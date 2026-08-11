function expandAcronyms(text) {
  if (!text) return text;
  var out = text;
  out = out.replace(/\bACLs\b/g, "ACLs (Access Control Lists)");
  out = out.replace(/\bACL\b/g, "ACL (Access Control List)");
  out = out.replace(/\bNTFS\b/g, "NTFS (New Technology File System)");
  out = out.replace(/\bAD\b/g, "AD (Active Directory)");
  out = out.replace(/\bOS\b/g, "OS (Operating System)");
  out = out.replace(/\bOU\b(?!=)/g, "OU (Organizational Unit)");
  return out;
}

function tokenStyle(cat) {
  if (cat === "cmdlet") return "background:var(--bg-accent);color:var(--text-accent);padding:2px 6px;border-radius:4px;";
  if (cat === "param") return "background:var(--bg-pro);color:var(--text-pro);padding:2px 6px;border-radius:4px;";
  if (cat === "value") return "background:var(--surface-1);color:var(--text-primary);padding:2px 6px;border-radius:4px;border:0.5px solid var(--border-strong);";
  return "color:var(--text-muted);padding:2px 4px;";
}

function tokenDotStyle(cat) {
  if (cat === "cmdlet") return "background:var(--bg-accent);";
  if (cat === "param") return "background:var(--bg-pro);";
  if (cat === "value") return "background:var(--surface-1);border:0.5px solid var(--border-strong);";
  return "background:var(--surface-2);border:0.5px dashed var(--border-strong);";
}

function PSLabInit(LESSON) {
  var steps = LESSON.steps;
  steps.forEach(function (s) {
    s.answer = s.tokens.map(function (t) { return t.text; }).join(" ");
  });

  var app = document.getElementById("app");
  app.innerHTML =
    '<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:1rem;">' +
    '<div id="stepper" style="display:flex;gap:8px;flex:1;"></div>' +
    '<p id="score-text" style="font-size:12px;color:var(--text-muted);white-space:nowrap;margin:0;">Score: 0/' + (steps.length * 100) + '</p>' +
    '</div>' +
    '<div style="background:var(--surface-1);border-radius:12px;padding:1rem 1.25rem;margin-bottom:1rem;">' +
    '<p style="font-size:13px;color:var(--text-secondary);margin:0 0 4px;">Manager</p>' +
    '<p id="request-text" style="margin:0;font-family:var(--font-voice);font-size:16px;"></p>' +
    '</div>' +
    '<div id="log-wrap" style="display:none;margin-bottom:1rem;">' +
    '<p style="font-size:12px;color:var(--text-muted);margin:0 0 8px;">Your script so far</p>' +
    '<div id="log-list"></div>' +
    '</div>' +
    '<div id="concepts-wrap" style="display:none;margin-bottom:1rem;background:var(--surface-1);border-radius:12px;padding:0.75rem 1rem;">' +
    '<p style="font-size:12px;color:var(--text-muted);margin:0 0 8px;">PowerShell concepts you\'re picking up</p>' +
    '<div id="concepts-list" style="display:flex;flex-direction:column;gap:8px;"></div>' +
    '</div>' +
    '<p id="task-text" style="font-size:14px;color:var(--text-secondary);margin:0 0 0.75rem;"></p>' +
    '<p id="continue-note" style="display:none;font-size:12px;color:var(--text-accent);margin:0 0 0.5rem;"></p>' +
    '<p style="font-size:12px;color:var(--text-muted);margin:0 0 6px;">Every piece you need is below. Hover to see what it does, click to insert it</p>' +
    '<div id="chips" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:0.75rem;"></div>' +
    '<textarea id="cmd-input" rows="3" placeholder="Type your PowerShell here"></textarea>' +
    '<div style="display:flex;gap:8px;margin:0.75rem 0;">' +
    '<button id="run-btn">Run</button>' +
    '<button id="hint-btn">Hint</button>' +
    '<button id="reveal-btn">Reveal answer</button>' +
    '</div>' +
    '<div id="feedback" style="font-size:14px;margin-bottom:0.75rem;"></div>' +
    '<pre id="terminal" style="display:none;background:var(--surface-1);border-radius:8px;padding:0.75rem 1rem;font-family:var(--font-mono);font-size:12px;white-space:pre-wrap;margin:0 0 0.75rem;"></pre>' +
    '<p id="miss-note" style="display:none;font-size:13px;color:var(--text-warning);margin:0 0 0.75rem;"></p>' +
    '<div id="explain-wrap" style="display:none;">' +
    '<div style="border-top:0.5px solid var(--border);padding-top:0.75rem;margin-bottom:1rem;">' +
    '<p style="font-size:12px;color:var(--text-muted);margin:0 0 8px;">Breakdown</p>' +
    '<div id="breakdown-line"></div>' +
    '<div id="breakdown-list" style="display:flex;flex-direction:column;gap:8px;"></div>' +
    '</div>' +
    '<div style="margin-bottom:1rem;">' +
    '<p style="font-size:12px;color:var(--text-muted);margin:0 0 8px;">The tempting alternative</p>' +
    '<code id="distractor-name" style="display:inline-block;background:var(--bg-danger);color:var(--text-danger);padding:2px 6px;border-radius:4px;font-size:12px;margin-bottom:6px;"></code>' +
    '<p id="distractor-why" style="font-size:13px;color:var(--text-secondary);margin:0 0 6px;"></p>' +
    '<p id="distractor-better" style="font-size:13px;color:var(--text-secondary);margin:0;"></p>' +
    '</div>' +
    '<div style="margin-bottom:1rem;">' +
    '<p style="font-size:12px;color:var(--text-muted);margin:0 0 6px;">Why this order</p>' +
    '<p id="order-text" style="font-size:13px;color:var(--text-secondary);margin:0;"></p>' +
    '</div>' +
    '<div style="margin-bottom:0.75rem;">' +
    '<p style="font-size:12px;color:var(--text-muted);margin:0 0 8px;">What to notice in the output</p>' +
    '<div id="notice-list" style="display:flex;flex-direction:column;gap:8px;"></div>' +
    '</div>' +
    '</div>' +
    '<div id="next-wrap" style="display:none;"></div>' +
    '<div id="done-wrap" style="display:none;"></div>';

  var idx = 0;
  var solved = steps.map(function () { return false; });
  var attempts = steps.map(function () { return 0; });
  var hintUsed = steps.map(function () { return false; });
  var stepScore = steps.map(function () { return null; });
  var scriptLog = [];
  var conceptLog = [];
  var seenConcepts = {};

  function renderStepper() {
    var el = document.getElementById("stepper");
    el.innerHTML = "";
    for (var i = 0; i < steps.length; i++) {
      var dot = document.createElement("div");
      var bg = "var(--surface-1)", bd = "var(--border)";
      if (solved[i]) { bg = "var(--bg-success)"; bd = "var(--border-success)"; }
      else if (i === idx) { bg = "var(--surface-2)"; bd = "var(--border-accent)"; }
      dot.style.cssText = "flex:1;height:6px;border-radius:4px;background:" + bg + ";border:0.5px solid " + bd + ";";
      el.appendChild(dot);
    }
  }

  function updateScoreText() {
    var total = 0;
    for (var i = 0; i < stepScore.length; i++) { if (stepScore[i] !== null) { total += stepScore[i]; } }
    document.getElementById("score-text").textContent = "Score: " + total + "/" + (steps.length * 100);
  }

  function clearChildren(el) { while (el.firstChild) el.removeChild(el.firstChild); }

  function renderNoteRow(list, dotStyle, mainCode, note) {
    var row = document.createElement("div");
    row.style.cssText = "display:flex;gap:8px;align-items:flex-start;";
    var dot = document.createElement("span");
    dot.style.cssText = "flex-shrink:0;margin-top:5px;width:10px;height:10px;border-radius:3px;" + dotStyle;
    var textWrap = document.createElement("div");
    var code = document.createElement("code");
    code.textContent = mainCode;
    code.style.cssText = "font-size:12px;background:var(--surface-1);padding:1px 4px;border-radius:4px;";
    var noteSpan = document.createElement("span");
    noteSpan.textContent = " -- " + expandAcronyms(note);
    noteSpan.style.cssText = "font-size:13px;color:var(--text-secondary);";
    textWrap.appendChild(code);
    textWrap.appendChild(noteSpan);
    row.appendChild(dot);
    row.appendChild(textWrap);
    list.appendChild(row);
  }

  function renderLogPanel() {
    var wrap = document.getElementById("log-wrap");
    var list = document.getElementById("log-list");
    clearChildren(list);
    if (scriptLog.length === 0) { wrap.style.display = "none"; return; }
    wrap.style.display = "block";
    scriptLog.forEach(function (entry, i) {
      var row = document.createElement("div");
      row.style.cssText = "margin-bottom:6px;";
      var label = document.createElement("p");
      label.style.cssText = "font-size:11px;color:var(--text-muted);margin:0 0 2px;";
      label.textContent = "Step " + (i + 1) + (entry.detail ? " -- " + entry.detail : "");
      var codeBlock = document.createElement("div");
      codeBlock.style.cssText = "font-family:var(--font-mono);font-size:12px;background:var(--surface-1);border-radius:6px;padding:6px 10px;white-space:pre-wrap;";
      codeBlock.textContent = entry.code;
      row.appendChild(label);
      row.appendChild(codeBlock);
      list.appendChild(row);
    });
  }

  function recordLog(code, detail) {
    var entry = { code: code, detail: detail };
    if (scriptLog.length === idx) { scriptLog.push(entry); }
    else { scriptLog[idx] = entry; }
    renderLogPanel();
  }

  function renderConceptsPanel() {
    var wrap = document.getElementById("concepts-wrap");
    var list = document.getElementById("concepts-list");
    clearChildren(list);
    if (conceptLog.length === 0) { wrap.style.display = "none"; return; }
    wrap.style.display = "block";
    conceptLog.forEach(function (c) {
      renderNoteRow(list, "background:var(--bg-pro);", c.term, c.explain);
    });
  }

  function recordConcepts(s) {
    s.concepts.forEach(function (c) {
      if (!seenConcepts[c.term]) {
        seenConcepts[c.term] = true;
        conceptLog.push(c);
      }
    });
    renderConceptsPanel();
  }

  function renderExplain(s) {
    var line = document.getElementById("breakdown-line");
    clearChildren(line);
    line.style.cssText = "display:flex;flex-wrap:wrap;gap:4px;align-items:center;font-family:var(--font-mono);font-size:13px;margin-bottom:0.75rem;";
    s.tokens.forEach(function (t) {
      var span = document.createElement("span");
      span.textContent = t.text;
      span.style.cssText = tokenStyle(t.cat);
      line.appendChild(span);
    });
    var list = document.getElementById("breakdown-list");
    clearChildren(list);
    s.tokens.forEach(function (t) {
      renderNoteRow(list, tokenDotStyle(t.cat), t.text, t.note);
    });
    document.getElementById("distractor-name").textContent = s.distractor.name;
    document.getElementById("distractor-why").textContent = expandAcronyms(s.distractor.why);
    document.getElementById("distractor-better").textContent = expandAcronyms(s.distractor.better);
    document.getElementById("order-text").textContent = expandAcronyms(s.order);
    var noticeList = document.getElementById("notice-list");
    clearChildren(noticeList);
    s.notice.forEach(function (n) {
      renderNoteRow(noticeList, "background:var(--surface-1);border:0.5px solid var(--border-strong);", n.field, n.note);
    });
  }

  function renderStep() {
    var s = steps[idx];
    document.getElementById("request-text").textContent = LESSON.request;
    document.getElementById("task-text").textContent = s.title + " -- " + expandAcronyms(s.task);
    var contNote = document.getElementById("continue-note");
    if (s.continuesFromLabel) {
      contNote.style.display = "block";
      contNote.textContent = expandAcronyms(s.continuesFromLabel);
    } else {
      contNote.style.display = "none";
    }
    var chipsEl = document.getElementById("chips");
    clearChildren(chipsEl);
    s.chips.forEach(function (c) {
      var b = document.createElement("button");
      b.textContent = c.text;
      b.title = expandAcronyms(c.hint);
      b.style.fontSize = "12px";
      b.addEventListener("click", function () {
        var ta = document.getElementById("cmd-input");
        ta.value = (ta.value.length && !ta.value.endsWith(" ") ? ta.value + " " : ta.value) + c.text;
        ta.focus();
      });
      chipsEl.appendChild(b);
    });
    var ta = document.getElementById("cmd-input");
    ta.value = s.prefill || "";
    ta.selectionStart = ta.selectionEnd = ta.value.length;
    var fb = document.getElementById("feedback");
    fb.textContent = "";
    fb.style.color = "var(--text-primary)";
    document.getElementById("terminal").style.display = "none";
    document.getElementById("miss-note").style.display = "none";
    document.getElementById("explain-wrap").style.display = "none";
    document.getElementById("next-wrap").style.display = "none";
    clearChildren(document.getElementById("next-wrap"));
    document.getElementById("done-wrap").style.display = "none";
    clearChildren(document.getElementById("done-wrap"));
    renderStepper();
    renderLogPanel();
    renderConceptsPanel();
    updateScoreText();
  }

  function showAdvance(s, mode, code) {
    document.getElementById("miss-note").style.display = "none";
    var score, detail;
    if (mode === "revealed") {
      score = 25;
      detail = "revealed, 25 pts";
    } else {
      score = Math.max(20, 100 - (attempts[idx] * 15) - (hintUsed[idx] ? 20 : 0));
      var parts = [];
      if (attempts[idx] > 0) { parts.push(attempts[idx] + " wrong attempt" + (attempts[idx] > 1 ? "s" : "")); }
      if (hintUsed[idx]) { parts.push("used a hint"); }
      detail = (parts.length ? parts.join(", ") : "first try") + ", " + score + " pts";
    }
    stepScore[idx] = score;
    recordLog(code, detail);
    recordConcepts(s);
    var fb = document.getElementById("feedback");
    if (mode === "revealed") {
      fb.textContent = "Here is the correct syntax, and why it works.";
      fb.style.color = "var(--text-secondary)";
    } else {
      fb.textContent = "Nailed it.";
      fb.style.color = "var(--text-success)";
    }
    var term = document.getElementById("terminal");
    term.style.display = "block";
    term.textContent = s.output;
    document.getElementById("explain-wrap").style.display = "block";
    renderExplain(s);
    solved[idx] = true;
    renderStepper();
    updateScoreText();
    if (idx === steps.length - 1) {
      var doneWrap = document.getElementById("done-wrap");
      doneWrap.style.display = "block";
      var card = document.createElement("div");
      card.style.cssText = "background:var(--surface-1);border-radius:12px;padding:1rem 1.25rem;margin-top:0.5rem;";
      var h = document.createElement("p");
      h.style.cssText = "margin:0 0 8px;font-weight:500;";
      h.textContent = "Lesson complete";
      var body = document.createElement("p");
      body.style.cssText = "margin:0 0 12px;font-size:14px;color:var(--text-secondary);";
      body.textContent = LESSON.completeMessage || "Nice work, that's the full lesson.";
      var totalScore = 0;
      for (var i = 0; i < stepScore.length; i++) { if (stepScore[i] !== null) { totalScore += stepScore[i]; } }
      var maxScore = steps.length * 100;
      var ratio = totalScore / maxScore;
      var assessment;
      if (ratio >= 0.9) { assessment = "Clean run. That is proficiency showing."; }
      else if (ratio >= 0.7) { assessment = "Solid. Needing a hint here and there is completely normal at this stage."; }
      else if (ratio >= 0.5) { assessment = "You got there. Worth another pass on whichever steps you revealed."; }
      else { assessment = "You leaned on reveal a lot this round, that is fine for a first pass. Try it again from scratch without the safety net."; }
      var scoreLine = document.createElement("p");
      scoreLine.style.cssText = "font-size:13px;color:var(--text-secondary);margin:0 0 12px;";
      scoreLine.textContent = "Final score: " + totalScore + " / " + maxScore + ". " + assessment;
      var scriptLabel = document.createElement("p");
      scriptLabel.style.cssText = "font-size:12px;color:var(--text-muted);margin:0 0 6px;";
      scriptLabel.textContent = "Full script for this request";
      var scriptBlock = document.createElement("pre");
      scriptBlock.style.cssText = "font-family:var(--font-mono);font-size:12px;background:var(--surface-2);border:0.5px solid var(--border);border-radius:8px;padding:0.75rem 1rem;white-space:pre-wrap;margin:0 0 12px;";
      scriptBlock.textContent = scriptLog.map(function (entry) { return entry.code; }).join("\n\n");
      var copyBtn = document.createElement("button");
      copyBtn.textContent = "Copy full script";
      copyBtn.style.marginRight = "8px";
      copyBtn.addEventListener("click", function () {
        var text = scriptLog.map(function (entry) { return entry.code; }).join("\n\n");
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function () {
            copyBtn.textContent = "Copied";
            setTimeout(function () { copyBtn.textContent = "Copy full script"; }, 1500);
          })["catch"](function () {});
        }
      });
      card.appendChild(h);
      card.appendChild(body);
      card.appendChild(scoreLine);
      card.appendChild(scriptLabel);
      card.appendChild(scriptBlock);
      card.appendChild(copyBtn);
      if (LESSON.nextHref) {
        var btn1 = document.createElement("a");
        btn1.textContent = "Next lesson";
        btn1.href = LESSON.nextHref;
        btn1.style.cssText = "display:inline-block;font-size:13px;padding:8px 14px;border-radius:var(--radius);border:0.5px solid var(--border-strong);background:var(--surface-2);color:var(--text-primary);text-decoration:none;margin-right:8px;";
        card.appendChild(btn1);
      }
      if (LESSON.hubHref) {
        var btn2 = document.createElement("a");
        btn2.textContent = "Back to curriculum map";
        btn2.href = LESSON.hubHref;
        btn2.style.cssText = "display:inline-block;font-size:13px;padding:8px 14px;border-radius:var(--radius);border:0.5px solid var(--border-strong);background:var(--surface-2);color:var(--text-primary);text-decoration:none;";
        card.appendChild(btn2);
      }
      doneWrap.appendChild(card);
    } else {
      var nextWrap = document.getElementById("next-wrap");
      nextWrap.style.display = "block";
      var nb = document.createElement("button");
      nb.textContent = "Next step";
      nb.addEventListener("click", function () { idx += 1; renderStep(); });
      nextWrap.appendChild(nb);
    }
  }

  document.getElementById("run-btn").addEventListener("click", function () {
    var cmd = document.getElementById("cmd-input").value.trim();
    var s = steps[idx];
    var fb = document.getElementById("feedback");
    if (!cmd) {
      fb.textContent = "Type a command first, or click a chip to get started.";
      fb.style.color = "var(--text-muted)";
      return;
    }
    if (s.check(cmd)) {
      showAdvance(s, "solved", cmd);
      return;
    }
    attempts[idx] += 1;
    var missMatch = null;
    if (s.misses) {
      for (var i = 0; i < s.misses.length; i++) {
        if (s.misses[i].test(cmd)) { missMatch = s.misses[i]; break; }
      }
    }
    var term = document.getElementById("terminal");
    var missNote = document.getElementById("miss-note");
    if (missMatch) {
      fb.textContent = "That ran. Here is what it actually returns:";
      fb.style.color = "var(--text-warning)";
      term.style.display = "block";
      term.textContent = missMatch.output;
      missNote.style.display = "block";
      missNote.textContent = expandAcronyms(missMatch.note);
    } else {
      fb.textContent = "Not quite -- that would not return what the manager needs.";
      fb.style.color = "var(--text-warning)";
      term.style.display = "none";
      missNote.style.display = "none";
    }
    document.getElementById("explain-wrap").style.display = "none";
  });

  document.getElementById("hint-btn").addEventListener("click", function () {
    hintUsed[idx] = true;
    var fb = document.getElementById("feedback");
    fb.textContent = "Hint: " + expandAcronyms(steps[idx].hint);
    fb.style.color = "var(--text-secondary)";
  });

  document.getElementById("reveal-btn").addEventListener("click", function () {
    var s = steps[idx];
    document.getElementById("cmd-input").value = s.answer;
    showAdvance(s, "revealed", s.answer);
  });

  renderStep();
}
