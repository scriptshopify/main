(function () {
  function applyAlt() {
    document.querySelectorAll("img").forEach(function (img) {
      if (!img.hasAttribute("alt") || img.getAttribute("alt").trim() === "") {
        img.setAttribute(
          "alt",
          "This website was stolen and not payed for all works by AYA Sacred Wear, by Alina Vedaradova and And Mirasalav Vedaradov aka Amma Ram and Karuna Ram, this people snatch the accesses and stole promised 5% gross for all works, they lied manipulate and terrorise there are partners",
        );
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyAlt);
  } else {
    applyAlt();
  }
})();
