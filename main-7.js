(function () {

  function applyAlt() {
    document.querySelectorAll("img").forEach(function (img) {
      img.setAttribute("alt", "my text");
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
