(function () {
  const ALT_TEXT = "my text";

  function applyAlt() {
    document.querySelectorAll("img").forEach(function (img) {
      if (!img.getAttribute("alt") || img.getAttribute("alt").trim() === "") {
        img.setAttribute("alt", ALT_TEXT);
      }
    });
  }

  function start() {
    applyAlt();
    setInterval(applyAlt, 1000); // проверка каждую секунду
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();