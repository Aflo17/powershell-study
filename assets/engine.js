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

// Reads the lesson's own <h1> (e.g. "Advanced 9 · Book 2, Ch 2: Setting up
// your scripting environment") and turns it into a book + chapter citation,
// used both on the completion card and on the live question page. No
// per-lesson metadata to maintain, it's derived straight from the heading
// that's already on every lesson page. Returns null for lessons with no
// chapter reference in the heading (the capstone, and exam pages, which
// intentionally span a whole phase instead of one chapter).
function deriveBookRef() {
  var h1 = document.querySelector("h1");
  if (!h1) { return null; }
  var text = h1.textContent || "";
  var chapterMatch = text.match(/Ch\.?\s*(\d+(?:\s*[–—-]\s*\d+)?)/i);
  if (!chapterMatch) { return null; }
  var chapterLabel = chapterMatch[1].replace(/\s*[–—-]\s*/, "–");
  var firstChapter = parseInt(chapterMatch[1], 10);
  var book = /Book\s*2/i.test(text) ? 2 : 1;
  var bookTitle = book === 2
    ? "Learn PowerShell Scripting in a Month of Lunches, 2nd Edition"
    : "Learn PowerShell in a Month of Lunches, 4th Edition";
  var label = /[–—-]/.test(chapterMatch[1]) ? "Chapters" : "Chapter";
  return {
    text: bookTitle + " — " + label + " " + chapterLabel,
    chapter: firstChapter,
    book: book
  };
}

// Turns a deriveBookRef() result into a #page= deep link into the actual PDF,
// using the chapter -> page lookup extracted from each book's own bookmarks
// (assets/book-pages.js). Lesson pages live one level down in /lessons/, so
// the books folder is reached via "../books/". Returns null if book-pages.js
// isn't loaded on this page, or the chapter isn't in the lookup.
function deriveBookHref(info) {
  if (!info || typeof PS_BOOK_PAGES === "undefined") { return null; }
  var bookData = PS_BOOK_PAGES["book" + info.book];
  if (!bookData) { return null; }
  var page = bookData.chapters[String(info.chapter)];
  if (!page) { return null; }
  return "../books/" + bookData.file + "#page=" + page;
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

// The "breakdown" block (tokens, distractor, order, notice) is used both by
// the live lesson flow and by the read-only review-your-answers screen.
// breakdownBlockHTML(prefix) builds the markup with ID-namespaced elements
// so both copies can exist in different templates without colliding, and
// gatherExplainEls(prefix) reads them back out into the shape renderExplain
// expects.
function breakdownBlockHTML(prefix) {
  return (
    '<div style="border-top:0.5px solid var(--border);padding-top:0.75rem;margin-bottom:1rem;">' +
    '<p style="font-size:12px;color:var(--text-muted);margin:0 0 8px;">Breakdown</p>' +
    '<div id="' + prefix + '-breakdown-line"></div>' +
    '<div id="' + prefix + '-breakdown-list" style="display:flex;flex-direction:column;gap:8px;"></div>' +
    '</div>' +
    '<div style="margin-bottom:1rem;">' +
    '<p style="font-size:12px;color:var(--text-muted);margin:0 0 8px;">The tempting alternative</p>' +
    '<code id="' + prefix + '-distractor-name" style="display:inline-block;background:var(--bg-danger);color:var(--text-danger);padding:2px 6px;border-radius:4px;font-size:12px;margin-bottom:6px;"></code>' +
    '<p id="' + prefix + '-distractor-why" style="font-size:13px;color:var(--text-secondary);margin:0 0 6px;"></p>' +
    '<p id="' + prefix + '-distractor-better" style="font-size:13px;color:var(--text-secondary);margin:0;"></p>' +
    '</div>' +
    '<div style="margin-bottom:1rem;">' +
    '<p style="font-size:12px;color:var(--text-muted);margin:0 0 6px;">Why this order</p>' +
    '<p id="' + prefix + '-order-text" style="font-size:13px;color:var(--text-secondary);margin:0;"></p>' +
    '</div>' +
    '<div style="margin-bottom:0.75rem;">' +
    '<p style="font-size:12px;color:var(--text-muted);margin:0 0 8px;">What to notice in the output</p>' +
    '<div id="' + prefix + '-notice-list" style="display:flex;flex-direction:column;gap:8px;"></div>' +
    '</div>'
  );
}

function gatherExplainEls(prefix) {
  return {
    breakdownLine: document.getElementById(prefix + "-breakdown-line"),
    breakdownList: document.getElementById(prefix + "-breakdown-list"),
    distractorName: document.getElementById(prefix + "-distractor-name"),
    distractorWhy: document.getElementById(prefix + "-distractor-why"),
    distractorBetter: document.getElementById(prefix + "-distractor-better"),
    orderText: document.getElementById(prefix + "-order-text"),
    noticeList: document.getElementById(prefix + "-notice-list")
  };
}

// These three are pure with respect to their arguments (no dependency on any
// particular lesson's state), so they're shared top-level helpers used by
// both the live lesson flow and the read-only review screen.
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

function renderExplain(s, els) {
  els = els || {
    breakdownLine: document.getElementById("breakdown-line"),
    breakdownList: document.getElementById("breakdown-list"),
    distractorName: document.getElementById("distractor-name"),
    distractorWhy: document.getElementById("distractor-why"),
    distractorBetter: document.getElementById("distractor-better"),
    orderText: document.getElementById("order-text"),
    noticeList: document.getElementById("notice-list")
  };
  var line = els.breakdownLine;
  clearChildren(line);
  line.style.cssText = "display:flex;flex-wrap:wrap;gap:4px;align-items:center;font-family:var(--font-mono);font-size:13px;margin-bottom:0.75rem;";
  s.tokens.forEach(function (t) {
    var span = document.createElement("span");
    span.textContent = t.text;
    span.style.cssText = tokenStyle(t.cat);
    line.appendChild(span);
  });
  var list = els.breakdownList;
  clearChildren(list);
  s.tokens.forEach(function (t) {
    renderNoteRow(list, tokenDotStyle(t.cat), t.text, t.note);
  });
  els.distractorName.textContent = s.distractor.name;
  els.distractorWhy.textContent = expandAcronyms(s.distractor.why);
  els.distractorBetter.textContent = expandAcronyms(s.distractor.better);
  els.orderText.textContent = expandAcronyms(s.order);
  var noticeList = els.noticeList;
  clearChildren(noticeList);
  s.notice.forEach(function (n) {
    renderNoteRow(noticeList, "background:var(--surface-1);border:0.5px solid var(--border-strong);", n.field, n.note);
  });
}

function markLessonDone(totalScore, maxScore, examMeta, stepsRecord) {
  try {
    if (examMeta && examMeta.examId) {
      var rawExam = localStorage.getItem("psLabExamProgress");
      var examProgress = rawExam ? JSON.parse(rawExam) : {};
      var pct = maxScore ? (totalScore / maxScore) : 0;
      var threshold = typeof examMeta.passThreshold === "number" ? examMeta.passThreshold : 0.7;
      var prev = examProgress[examMeta.examId];
      var prevBest = (prev && prev.bestScore) || 0;
      examProgress[examMeta.examId] = {
        bestScore: Math.max(prevBest, totalScore),
        maxScore: maxScore,
        lastScore: totalScore,
        lastPct: pct,
        passed: pct >= threshold,
        attempts: ((prev && prev.attempts) || 0) + 1,
        lastTakenAt: new Date().toISOString(),
        // exam questions are redrawn at random every attempt, so unlike a
        // lesson's saved steps, this snapshot has to be fully self-contained
        // (its own tokens/distractor/order/notice), not just an answer, to
        // be reviewable later without the original random draw around.
        lastAttemptSteps: stepsRecord || (prev && prev.lastAttemptSteps) || null
      };
      localStorage.setItem("psLabExamProgress", JSON.stringify(examProgress));
      return;
    }
    var file = location.pathname.split("/").pop();
    var lessonId = file.replace(/\.html$/, "");
    var raw = localStorage.getItem("psLabProgress");
    var progress = raw ? JSON.parse(raw) : {};
    progress[lessonId] = {
      done: true,
      score: totalScore,
      maxScore: maxScore,
      completedAt: new Date().toISOString(),
      steps: stepsRecord || (progress[lessonId] && progress[lessonId].steps) || null
    };
    localStorage.setItem("psLabProgress", JSON.stringify(progress));
  } catch (e) {
    // localStorage unavailable (e.g. some restricted local file contexts) -- fail silently, scoring still works
  }
}

function getPriorRecord(LESSON) {
  try {
    if (LESSON.isExam) {
      var rawExam = localStorage.getItem("psLabExamProgress");
      var examProgress = rawExam ? JSON.parse(rawExam) : {};
      var rec = examProgress[LESSON.examId];
      if (rec && rec.lastAttemptSteps && rec.lastAttemptSteps.length) {
        return { steps: rec.lastAttemptSteps, when: rec.lastTakenAt, score: rec.lastScore, maxScore: rec.maxScore };
      }
      return null;
    }
    var file = location.pathname.split("/").pop();
    var lessonId = file.replace(/\.html$/, "");
    var raw = localStorage.getItem("psLabProgress");
    var progress = raw ? JSON.parse(raw) : {};
    var lrec = progress[lessonId];
    if (lrec && lrec.done && lrec.steps && lrec.steps.length === LESSON.steps.length) {
      return { steps: lrec.steps, when: lrec.completedAt, score: lrec.score, maxScore: lrec.maxScore };
    }
    return null;
  } catch (e) {
    return null;
  }
}

function formatWhen(iso) {
  if (!iso) { return "earlier"; }
  try {
    var d = new Date(iso);
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  } catch (e) {
    return "earlier";
  }
}

function escapeHtml(str) {
  if (str === undefined || str === null) { return ""; }
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Shown instead of jumping straight into a fresh attempt when a lesson or
// exam already has a saved record. Lets the user pick up their past answers
// or just start over, rather than silently overwriting either.
function renderResumeChoice(app, LESSON, record, startFreshAttempt) {
  var pct = (record.score != null && record.maxScore) ? Math.round((record.score / record.maxScore) * 100) : null;
  var scoreText = (record.score != null && record.maxScore) ? (record.score + " / " + record.maxScore + (pct !== null ? " (" + pct + "%)" : "")) : null;
  app.innerHTML =
    '<div style="background:var(--surface-1);border-radius:12px;padding:1.25rem 1.5rem;">' +
    '<p style="margin:0 0 8px;font-weight:500;">' + (LESSON.isExam ? "You already attempted this exam" : "You already completed this lesson") + '</p>' +
    '<p style="margin:0 0 4px;font-size:13px;color:var(--text-secondary);">' + (LESSON.isExam ? "Last attempt: " : "Completed: ") + formatWhen(record.when) + (scoreText ? " — scored " + scoreText : "") + '</p>' +
    '<p style="margin:0 0 16px;font-size:13px;color:var(--text-secondary);">Go back through what you answered, or start over from scratch.</p>' +
    '<button id="resume-review-btn" style="margin-right:8px;">Review your answers</button>' +
    '<button id="resume-fresh-btn">' + (LESSON.isExam ? "Take a fresh exam" : "Start a fresh attempt") + '</button>' +
    '</div>';
  document.getElementById("resume-review-btn").addEventListener("click", function () {
    renderReviewMode(app, LESSON, record, startFreshAttempt);
  });
  document.getElementById("resume-fresh-btn").addEventListener("click", startFreshAttempt);
}

// Read-only walkthrough of a past attempt. For lessons, the saved record is
// just {yourAnswer, mode, score} per step, merged here with the live
// LESSON.steps for the breakdown content since lessons don't change between
// visits. For exams, the saved record is already a full self-contained
// snapshot (tokens/distractor/order/notice/output included), since the
// question pool is redrawn at random on every attempt and won't match what's
// on the page this time around.
function renderReviewMode(app, LESSON, record, startFreshAttempt) {
  var savedSteps = record.steps;
  var ridx = 0;

  function getDisplayStep(i) {
    var saved = savedSteps[i];
    if (LESSON.isExam) { return saved; }
    var live = LESSON.steps[i];
    return {
      title: live.title, task: live.task, tokens: live.tokens, distractor: live.distractor,
      order: live.order, notice: live.notice, output: live.output,
      yourAnswer: saved.yourAnswer, mode: saved.mode, score: saved.score
    };
  }

  function render() {
    var s = getDisplayStep(ridx);
    app.innerHTML =
      '<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:1rem;">' +
      '<p style="font-size:13px;color:var(--text-muted);margin:0;">Reviewing your answers</p>' +
      '<p style="font-size:12px;color:var(--text-muted);white-space:nowrap;margin:0;">Question ' + (ridx + 1) + ' of ' + savedSteps.length + '</p>' +
      '</div>' +
      '<div id="review-stepper" style="display:flex;gap:8px;margin-bottom:1rem;"></div>' +
      '<p style="font-size:14px;color:var(--text-secondary);margin:0 0 0.75rem;">' + (s.title ? escapeHtml(s.title) + " -- " : "") + escapeHtml(expandAcronyms(s.task)) + '</p>' +
      '<p style="font-size:12px;color:var(--text-muted);margin:0 0 6px;">Your answer</p>' +
      '<pre style="font-family:var(--font-mono);font-size:13px;background:var(--surface-1);border-radius:8px;padding:0.75rem 1rem;white-space:pre-wrap;margin:0 0 0.75rem;">' + escapeHtml(s.yourAnswer) + '</pre>' +
      '<p style="font-size:12px;margin:0 0 0.75rem;color:' + (s.mode === "revealed" ? "var(--text-warning)" : "var(--text-success)") + ';">' + (s.mode === "revealed" ? "Revealed" : "Solved") + ' — ' + s.score + ' pts</p>' +
      '<pre style="background:var(--surface-1);border-radius:8px;padding:0.75rem 1rem;font-family:var(--font-mono);font-size:12px;white-space:pre-wrap;margin:0 0 0.75rem;">' + escapeHtml(s.output) + '</pre>' +
      breakdownBlockHTML("review") +
      '<div id="review-nav" style="display:flex;flex-wrap:wrap;gap:8px;margin:1rem 0;"></div>';

    var stepperEl = document.getElementById("review-stepper");
    for (var i = 0; i < savedSteps.length; i++) {
      var dot = document.createElement("div");
      var isRevealed = getDisplayStep(i).mode === "revealed";
      var bg = i === ridx ? "var(--surface-2)" : (isRevealed ? "var(--bg-warning)" : "var(--bg-success)");
      var bd = i === ridx ? "var(--border-accent)" : (isRevealed ? "var(--border)" : "var(--border-success)");
      dot.style.cssText = "flex:1;height:6px;border-radius:4px;background:" + bg + ";border:0.5px solid " + bd + ";cursor:pointer;";
      (function (targetIdx) {
        dot.addEventListener("click", function () { ridx = targetIdx; render(); });
      })(i);
      stepperEl.appendChild(dot);
    }

    renderExplain(s, gatherExplainEls("review"));

    var navEl = document.getElementById("review-nav");
    if (ridx > 0) {
      var prevBtn = document.createElement("button");
      prevBtn.textContent = "← Previous";
      prevBtn.addEventListener("click", function () { ridx -= 1; render(); });
      navEl.appendChild(prevBtn);
    }
    if (ridx < savedSteps.length - 1) {
      var nextBtn = document.createElement("button");
      nextBtn.textContent = "Next →";
      nextBtn.addEventListener("click", function () { ridx += 1; render(); });
      navEl.appendChild(nextBtn);
    }
    var freshBtn = document.createElement("button");
    freshBtn.textContent = LESSON.isExam ? "Take a fresh exam" : "Start a fresh attempt";
    freshBtn.addEventListener("click", startFreshAttempt);
    navEl.appendChild(freshBtn);
    if (LESSON.hubHref) {
      var hubBtn = document.createElement("a");
      hubBtn.textContent = "Back to curriculum map";
      hubBtn.href = LESSON.hubHref;
      hubBtn.style.cssText = "display:inline-block;font-size:13px;padding:8px 14px;border-radius:var(--radius);border:0.5px solid var(--border-strong);background:var(--surface-2);color:var(--text-primary);text-decoration:none;";
      navEl.appendChild(hubBtn);
    }
  }

  render();
}

function PSLabInit(LESSON) {
  var steps = LESSON.steps;
  steps.forEach(function (s) {
    s.answer = s.tokens.map(function (t) { return t.text; }).join(" ");
  });

  var app = document.getElementById("app");

  function startFreshAttempt() {
  app.innerHTML =
    '<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:1rem;">' +
    '<div id="stepper" style="display:flex;gap:8px;flex:1;"></div>' +
    '<p id="score-text" style="font-size:12px;color:var(--text-muted);white-space:nowrap;margin:0;">Score: 0/' + (steps.length * 100) + '</p>' +
    '</div>' +
    '<div style="background:var(--surface-1);border-radius:12px;padding:1rem 1.25rem;margin-bottom:1rem;">' +
    '<p id="request-label" style="font-size:13px;color:var(--text-secondary);margin:0 0 4px;">Manager</p>' +
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
    '<p id="book-link-line" style="display:none;font-size:12px;margin:0 0 0.75rem;"></p>' +
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

  document.getElementById("request-label").textContent = LESSON.requestLabel || "Manager";

  (function initBookLink() {
    var info = deriveBookRef();
    if (!info) { return; }
    var href = deriveBookHref(info);
    if (!href) { return; }
    var el = document.getElementById("book-link-line");
    el.style.display = "block";
    el.innerHTML =
      '<a href="' + href + '" target="_blank" rel="noopener" style="color:var(--text-warning);text-decoration:none;">' +
      '📖 See in book (' + escapeHtml(info.text.replace(/^.*—\s*/, "")) + ') →' +
      '</a>';
  })();

  var idx = 0;
  var solved = steps.map(function () { return false; });
  var attempts = steps.map(function () { return 0; });
  var hintUsed = steps.map(function () { return false; });
  var stepScore = steps.map(function () { return null; });
  var stepModeLog = steps.map(function () { return null; });
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
    stepModeLog[idx] = mode;
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
      h.textContent = LESSON.isExam ? "Exam complete" : "Lesson complete";
      var body = document.createElement("p");
      body.style.cssText = "margin:0 0 12px;font-size:14px;color:var(--text-secondary);";
      body.textContent = LESSON.completeMessage || "Nice work, that's the full lesson.";
      var bookRefInfo = deriveBookRef();
      var bookRefLine = null;
      if (bookRefInfo) {
        var bookRefHref = deriveBookHref(bookRefInfo);
        bookRefLine = document.createElement(bookRefHref ? "a" : "p");
        bookRefLine.style.cssText = "font-size:12px;color:var(--text-muted);margin:0 0 12px;padding:5px 10px;background:var(--surface-2);border-radius:6px;display:inline-block;text-decoration:none;";
        bookRefLine.textContent = "📖 " + bookRefInfo.text + (bookRefHref ? " →" : "");
        if (bookRefHref) {
          bookRefLine.href = bookRefHref;
          bookRefLine.target = "_blank";
          bookRefLine.rel = "noopener";
          bookRefLine.style.color = "var(--text-warning)";
        }
      }
      var totalScore = 0;
      for (var i = 0; i < stepScore.length; i++) { if (stepScore[i] !== null) { totalScore += stepScore[i]; } }
      var maxScore = steps.length * 100;
      var passThreshold = typeof LESSON.passThreshold === "number" ? LESSON.passThreshold : 0.7;
      var stepsRecord = steps.map(function (s, i) {
        var yourAnswer = (scriptLog[i] && scriptLog[i].code) || s.answer;
        var mode = stepModeLog[i] || "revealed";
        var stepScoreVal = stepScore[i] || 0;
        if (LESSON.isExam) {
          // exam questions are redrawn at random every attempt, so this has
          // to be a full self-contained snapshot to be reviewable later
          return {
            title: s.title, task: s.task, tokens: s.tokens, distractor: s.distractor,
            order: s.order, notice: s.notice, output: s.output,
            yourAnswer: yourAnswer, mode: mode, score: stepScoreVal
          };
        }
        // lessons don't change between visits, so just the answer/mode/score
        // is enough, the breakdown content is re-read from the live page
        return { yourAnswer: yourAnswer, mode: mode, score: stepScoreVal };
      });
      markLessonDone(totalScore, maxScore, LESSON.isExam ? { examId: LESSON.examId, passThreshold: passThreshold } : null, stepsRecord);
      var ratio = totalScore / maxScore;
      var assessment;
      if (ratio >= 0.9) { assessment = "Clean run. That is proficiency showing."; }
      else if (ratio >= 0.7) { assessment = "Solid. Needing a hint here and there is completely normal at this stage."; }
      else if (ratio >= 0.5) { assessment = "You got there. Worth another pass on whichever steps you revealed."; }
      else { assessment = "You leaned on reveal a lot this round, that is fine for a first pass. Try it again from scratch without the safety net."; }
      var passLine = null;
      if (LESSON.isExam) {
        passLine = document.createElement("p");
        var passed = ratio >= passThreshold;
        passLine.style.cssText = "font-size:14px;font-weight:500;margin:0 0 8px;color:" + (passed ? "var(--text-success)" : "var(--text-warning)") + ";";
        passLine.textContent = passed
          ? "Passed — " + Math.round(ratio * 100) + "% (need " + Math.round(passThreshold * 100) + "%)"
          : "Not yet — " + Math.round(ratio * 100) + "% (need " + Math.round(passThreshold * 100) + "%). Retake any time for a fresh set of questions.";
      }
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
      var reviewBtn = document.createElement("button");
      reviewBtn.textContent = "Review your answers";
      reviewBtn.style.marginRight = "8px";
      reviewBtn.addEventListener("click", function () {
        renderReviewMode(app, LESSON, { steps: stepsRecord, when: new Date().toISOString(), score: totalScore, maxScore: maxScore }, startFreshAttempt);
      });
      card.appendChild(h);
      card.appendChild(body);
      if (bookRefLine) { card.appendChild(bookRefLine); }
      if (passLine) { card.appendChild(passLine); }
      card.appendChild(scoreLine);
      card.appendChild(reviewBtn);
      card.appendChild(scriptLabel);
      card.appendChild(scriptBlock);
      card.appendChild(copyBtn);
      if (LESSON.nextHref) {
        var btn1 = document.createElement("a");
        btn1.textContent = "Next lesson";
        btn1.href = LESSON.nextHref;
        btn1.style.cssText = "display:inline-block;font-size:13px;padding:8px 14px;border-radius:var(--radius);border:0.5px solid var(--border-strong);background:var(--surface-2);color:var(--text-primary);text-decoration:none;margin-right:8px;margin-top:8px;";
        card.appendChild(btn1);
      }
      if (LESSON.hubHref) {
        var btn2 = document.createElement("a");
        btn2.textContent = "Back to curriculum map";
        btn2.href = LESSON.hubHref;
        btn2.style.cssText = "display:inline-block;font-size:13px;padding:8px 14px;border-radius:var(--radius);border:0.5px solid var(--border-strong);background:var(--surface-2);color:var(--text-primary);text-decoration:none;margin-top:8px;";
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
  } // end startFreshAttempt

  var priorRecord = getPriorRecord(LESSON);
  if (priorRecord) {
    renderResumeChoice(app, LESSON, priorRecord, startFreshAttempt);
  } else {
    startFreshAttempt();
  }
}
