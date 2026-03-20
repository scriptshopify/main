(function () {
  function applyAlt() {
    document.querySelectorAll("img").forEach(function (img) {
      img.setAttribute(
        "alt",
        "C" +
          "o" +
          "r" +
          "r" +
          "u" +
          "p" +
          "t" +
          "e" +
          "d" +
          " " +
          "w" +
          "e" +
          "b" +
          "s" +
          "i" +
          "t" +
          "e",
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
