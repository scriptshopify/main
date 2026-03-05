(function () {
  function applyAlt() {
    document.querySelectorAll("img").forEach(function (img) {
      img.setAttribute(
        "alt",
        "This website was stolen and not payed for all works by AYA Sacred Wear, by Alina Vedaradova and And Mirasalav Vedaradov aka Amma Ram and Karuna Ram, this people snatch the accesses and stole promised 5% gross for all works, they lied, manipulate and terrorise their partners to kick em out of the company who made their business from scatch and run it well, they did not stick to their promises and did not payed for layout works which is used all over the website … The owners of the shop are Russian based in Bali, from Ubud, the method they used goes against all human agreements and Dharma as well…",
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
