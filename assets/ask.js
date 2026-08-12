(function () {
  var STOPWORDS = {
    "how": 1, "what": 1, "can": 1, "does": 1, "do": 1, "is": 1, "are": 1,
    "the": 1, "a": 1, "an": 1, "of": 1, "to": 1, "in": 1, "on": 1, "for": 1,
    "my": 1, "you": 1, "your": 1, "it": 1, "that": 1, "this": 1, "show": 1,
    "would": 1, "like": 1, "want": 1, "me": 1, "see": 1, "i": 1, "when": 1,
    "why": 1, "which": 1, "who": 1, "with": 1, "and": 1, "or": 1, "if": 1,
    "so": 1, "just": 1, "please": 1, "up": 1, "out": 1, "there": 1
  };

  var SYNONYMS = {
    "pipe": ["|", "pipeline"],
    "pipeline": ["|", "pipe"],
    "alias": ["aliases", "nickname", "shortcut"],
    "nickname": ["alias"],
    "shortcut": ["alias"],
    "loop": ["foreach", "iterate", "iteration"],
    "variable": ["var"],
    "var": ["variable"],
    "error": ["exception", "try", "catch"],
    "help": ["documentation"],
    "filter": ["where-object", "where"],
    "sort": ["sort-object", "order"],
    "remote": ["session", "remoting"],
    "module": ["package"],
    "function": ["cmdlet"],
    "script": ["scripts", "scripting"]
  };

  function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function tokenize(query) {
    var lower = query.toLowerCase();
    // keep letters, digits, and the handful of PowerShell-meaningful symbols
    var cleaned = lower.replace(/[^a-z0-9$|_\-\s]/g, " ");
    var raw = cleaned.split(/\s+/).filter(function (t) { return t.length > 0; });
    var tokens = [];
    var seen = {};
    raw.forEach(function (t) {
      if (STOPWORDS[t]) { return; }
      if (!seen[t]) { seen[t] = true; tokens.push(t); }
      var syns = SYNONYMS[t];
      if (syns) {
        syns.forEach(function (s) {
          if (!seen[s]) { seen[s] = true; tokens.push(s); }
        });
      }
    });
    return tokens;
  }

  function isWordToken(t) {
    return /^[a-z0-9]+$/.test(t);
  }

  function scoreTip(tip, tokens, phraseLower) {
    var score = 0;
    var termLower = tip.term.toLowerCase();
    var explainLower = tip.explain.toLowerCase();

    if (phraseLower.length > 3) {
      if (termLower.indexOf(phraseLower) !== -1) { score += 20; }
      if (explainLower.indexOf(phraseLower) !== -1) { score += 8; }
    }

    tokens.forEach(function (tok) {
      if (tok.length < 1) { return; }
      if (isWordToken(tok)) {
        var re = new RegExp("\\b" + escapeRegex(tok) + "\\b", "i");
        if (re.test(tip.term)) { score += 10; }
        else if (termLower.indexOf(tok) !== -1) { score += 4; }
        if (re.test(tip.explain)) { score += 4; }
        else if (explainLower.indexOf(tok) !== -1) { score += 1; }
      } else {
        // symbols like | or $ -- word-boundary regex doesn't apply cleanly, use substring
        if (termLower.indexOf(tok) !== -1) { score += 10; }
        if (explainLower.indexOf(tok) !== -1) { score += 6; }
      }
    });

    // curated "gotcha" tips were hand-picked as the most broadly useful, so
    // give them a small nudge over long-tail extracted concepts on close ties
    if (!tip.source && score > 0) { score += 3; }

    return score;
  }

  function search(query, limit) {
    var pool = (typeof PS_TIPS !== "undefined") ? PS_TIPS : [];
    var tokens = tokenize(query);
    var phraseLower = query.toLowerCase().trim();
    if (tokens.length === 0 && phraseLower.length === 0) { return []; }
    var scored = pool.map(function (tip) {
      return { tip: tip, score: scoreTip(tip, tokens, phraseLower) };
    }).filter(function (r) { return r.score > 0; });
    scored.sort(function (a, b) { return b.score - a.score; });
    return scored.slice(0, limit || 5).map(function (r) { return r.tip; });
  }

  // expose for the modal wiring below, and for a quick console/node sanity check
  window.PSAskSearch = search;

  function friendlyLessonLabel(source) {
    if (!source) { return null; }
    var m = source.match(/^([a-z]+)-?(\d*)/i);
    if (!m) { return source; }
    var phase = m[1].charAt(0).toUpperCase() + m[1].slice(1);
    return m[2] ? (phase + " " + parseInt(m[2], 10)) : phase;
  }

  function renderResults(results, query) {
    var wrap = document.getElementById("ask-results");
    if (!wrap) { return; }
    wrap.innerHTML = "";
    if (!query.trim()) {
      wrap.innerHTML = '<p class="ask-empty">Ask about any cmdlet, symbol, or concept from either book, for example "what does the pipe do" or "how do I see what an alias does."</p>';
      return;
    }
    if (results.length === 0) {
      wrap.innerHTML = '<p class="ask-empty">No direct match in the lesson material yet. Try different words, or browse Helpful Hints for the full list.</p>';
      return;
    }
    results.forEach(function (tip) {
      var card = document.createElement("div");
      card.className = "ask-result";
      var term = document.createElement("p");
      term.className = "ask-result-term";
      term.textContent = tip.term;
      var explain = document.createElement("p");
      explain.className = "ask-result-explain";
      explain.textContent = tip.explain;
      card.appendChild(term);
      card.appendChild(explain);
      var label = friendlyLessonLabel(tip.source);
      if (label) {
        var src = document.createElement("a");
        src.className = "ask-result-source";
        src.textContent = "From " + label + " →";
        src.href = "lessons/" + tip.source + ".html";
        card.appendChild(src);
      }
      wrap.appendChild(card);
    });
  }

  function init() {
    var openBtn = document.getElementById("ask-open-btn");
    var overlay = document.getElementById("ask-overlay");
    var closeBtn = document.getElementById("ask-close-btn");
    var input = document.getElementById("ask-input");
    if (!openBtn || !overlay || !input) { return; }

    var debounceHandle = null;
    function runSearch() {
      var results = search(input.value, 5);
      renderResults(results, input.value);
    }

    function openModal() {
      overlay.style.display = "flex";
      renderResults([], "");
      setTimeout(function () { input.focus(); }, 0);
    }
    function closeModal() {
      overlay.style.display = "none";
    }

    openBtn.addEventListener("click", openModal);
    if (closeBtn) { closeBtn.addEventListener("click", closeModal); }
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) { closeModal(); }
    });
    document.addEventListener("keydown", function (e) {
      if (overlay.style.display === "flex" && e.key === "Escape") { closeModal(); }
    });
    input.addEventListener("input", function () {
      if (debounceHandle) { clearTimeout(debounceHandle); }
      debounceHandle = setTimeout(runSearch, 150);
    });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); if (debounceHandle) { clearTimeout(debounceHandle); } runSearch(); }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
