(function () {
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function init() {
    var openBtn = document.getElementById("hints-open-btn");
    if (!openBtn || typeof PS_TIPS === "undefined" || !PS_TIPS.length) return;

    var order = shuffle(PS_TIPS.map(function (_, i) { return i; }));
    var pos = 0;

    var overlay = document.getElementById("hints-overlay");
    var titleEl = document.getElementById("hints-tip-title");
    var bodyEl = document.getElementById("hints-tip-body");
    var counterEl = document.getElementById("hints-counter");
    var nextBtn = document.getElementById("hints-next-btn");
    var prevBtn = document.getElementById("hints-prev-btn");
    var closeBtn = document.getElementById("hints-close-btn");

    function render() {
      var tip = PS_TIPS[order[pos]];
      titleEl.textContent = tip.term;
      bodyEl.textContent = tip.explain;
      counterEl.textContent = "Tip " + (pos + 1) + " of " + order.length;
    }

    function open() {
      overlay.style.display = "flex";
      document.body.style.overflow = "hidden";
      render();
    }

    function close() {
      overlay.style.display = "none";
      document.body.style.overflow = "";
    }

    function next() {
      pos = (pos + 1) % order.length;
      render();
    }

    function prev() {
      pos = (pos - 1 + order.length) % order.length;
      render();
    }

    openBtn.addEventListener("click", open);
    closeBtn.addEventListener("click", close);
    nextBtn.addEventListener("click", next);
    prevBtn.addEventListener("click", prev);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) close();
    });
    document.addEventListener("keydown", function (e) {
      if (overlay.style.display !== "flex") return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
