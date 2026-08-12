(function () {
  function init() {
    var openBtn = document.getElementById("material-open-btn");
    var overlay = document.getElementById("material-overlay");
    var closeBtn = document.getElementById("material-close-btn");
    if (!openBtn || !overlay) { return; }

    function open() {
      overlay.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
    function close() {
      overlay.style.display = "none";
      document.body.style.overflow = "";
    }

    openBtn.addEventListener("click", open);
    if (closeBtn) { closeBtn.addEventListener("click", close); }
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) { close(); }
    });
    document.addEventListener("keydown", function (e) {
      if (overlay.style.display === "flex" && e.key === "Escape") { close(); }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
