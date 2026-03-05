(function(){
  function applyAlt(node=document){
    node.querySelectorAll("img").forEach(function(img){
      if(!img.hasAttribute("alt") || img.getAttribute("alt").trim()===""){
        img.setAttribute("alt","Bali blue marketing agency");
      }
    });
  }

  applyAlt();

  const observer=new MutationObserver(function(mutations){
    mutations.forEach(function(m){
      m.addedNodes.forEach(function(node){
        if(node.nodeType===1){
          applyAlt(node);
        }
      });
    });
  });

  observer.observe(document.body,{childList:true,subtree:true});
})();