(function () {
  function getProgress() {
    try {
      var raw = localStorage.getItem("psLabProgress");
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveProgress(progress) {
    try {
      localStorage.setItem("psLabProgress", JSON.stringify(progress));
    } catch (e) {
      // localStorage unavailable, nothing we can do, fail silently
    }
  }

  function lessonIdFromHref(href) {
    var parts = href.split("/");
    var file = parts[parts.length - 1];
    return file.replace(/\.html$/, "");
  }

  function renderProgressBars(rows, totalLessons) {
    var progress = getProgress();
    var totalDone = 0;

    rows.forEach(function (row) {
      var id = row.getAttribute("data-lesson-id");
      if (!id) return;
      var cb = row.querySelector(".done-checkbox");
      var isDone = !!(progress[id] && progress[id].done);
      if (cb) cb.checked = isDone;
      row.classList.toggle("lesson-row-done", isDone);
      if (isDone) totalDone++;
    });

    var overallLabel = document.getElementById("progress-label");
    var overallFill = document.getElementById("progress-bar-fill");
    if (overallLabel) {
      overallLabel.textContent = totalDone + " / " + totalLessons + " lessons complete";
    }
    if (overallFill) {
      overallFill.style.width = (totalLessons ? (totalDone / totalLessons * 100) : 0) + "%";
    }

    document.querySelectorAll(".phase-section").forEach(function (section) {
      var sectionRows = section.querySelectorAll(".lesson-row[data-lesson-id]");
      var total = sectionRows.length;
      if (total === 0) return;
      var done = 0;
      sectionRows.forEach(function (r) {
        var id = r.getAttribute("data-lesson-id");
        if (progress[id] && progress[id].done) done++;
      });
      var badge = section.querySelector(".phase-progress");
      if (badge) badge.textContent = done + " / " + total + " complete";
      var fill = section.querySelector(".phase-progress-fill");
      if (fill) fill.style.width = (total ? (done / total * 100) : 0) + "%";
    });
  }

  function init() {
    var rows = Array.prototype.slice.call(document.querySelectorAll(".lesson-row"));
    var totalLessons = 0;

    rows.forEach(function (row) {
      var link = row.querySelector(".lesson-title a");
      if (!link) return; // not-built or reference row, nothing to track
      var lessonId = lessonIdFromHref(link.getAttribute("href"));
      row.setAttribute("data-lesson-id", lessonId);
      totalLessons++;

      var left = row.querySelector(".lesson-left");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "done-checkbox";
      checkbox.setAttribute("aria-label", "Mark this lesson done");
      checkbox.addEventListener("change", function () {
        var p = getProgress();
        if (checkbox.checked) {
          p[lessonId] = p[lessonId] || {};
          p[lessonId].done = true;
          p[lessonId].completedAt = p[lessonId].completedAt || new Date().toISOString();
        } else if (p[lessonId]) {
          p[lessonId].done = false;
        }
        saveProgress(p);
        renderProgressBars(rows, totalLessons);
      });
      if (left) left.insertBefore(checkbox, left.firstChild);
    });

    document.querySelectorAll(".phase-section").forEach(function (section) {
      var titleEl = section.querySelector(".phase-title");
      if (!titleEl) return;
      var badge = document.createElement("span");
      badge.className = "phase-progress";
      titleEl.appendChild(document.createTextNode(" "));
      titleEl.appendChild(badge);
      var track = document.createElement("div");
      track.className = "phase-progress-track";
      var fill = document.createElement("div");
      fill.className = "phase-progress-fill";
      track.appendChild(fill);
      titleEl.insertAdjacentElement("afterend", track);
    });

    renderProgressBars(rows, totalLessons);

    var resetBtn = document.getElementById("reset-progress-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        if (window.confirm("Reset all lesson progress? This clears every checkmark on this device and browser.")) {
          saveProgress({});
          renderProgressBars(rows, totalLessons);
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
