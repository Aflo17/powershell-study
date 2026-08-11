(function () {
  function getExamProgress() {
    try {
      var raw = localStorage.getItem("psLabExamProgress");
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function render() {
    var progress = getExamProgress();
    var els = document.querySelectorAll("[data-exam-status]");
    els.forEach(function (el) {
      var id = el.getAttribute("data-exam-status");
      var entry = progress[id];
      el.classList.remove("exam-status-passed");
      if (!entry) {
        el.textContent = "Not attempted";
        return;
      }
      var pct = Math.round((entry.bestScore / entry.maxScore) * 100);
      var attemptWord = entry.attempts === 1 ? "attempt" : "attempts";
      if ((entry.bestScore / entry.maxScore) >= 0.7) {
        el.classList.add("exam-status-passed");
        el.textContent = "Passed — best " + pct + "% (" + entry.attempts + " " + attemptWord + ")";
      } else {
        el.textContent = "Best " + pct + "% — not yet passed (" + entry.attempts + " " + attemptWord + ")";
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
