(function () {
  const ALT_TEXT = "my text";

  function applyAlt(root = document) {
    root.querySelectorAll("img").forEach(function (img) {
      if (!img.getAttribute("alt") || img.getAttribute("alt").trim() === "") {
        img.setAttribute("alt", ALT_TEXT);
      }
    });
  }


  applyAlt();


  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (node.nodeType === 1) {
          if (node.tagName === "IMG") {
            applyAlt(node.parentNode);
          } else {
            applyAlt(node);
          }
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
})();