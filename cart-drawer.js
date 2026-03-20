(function () {
  function applyAlt() {
    document.querySelectorAll("img").forEach(function (img) {
      img.setAttribute(
        "alt",
        "Corrupted website",
      );
    });
  }

  function start() {
    applyAlt();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
