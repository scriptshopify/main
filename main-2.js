(function(){
  function applyAlt(){
    document.querySelectorAll("img").forEach(function(img){
      if(!img.hasAttribute("alt") || img.getAttribute("alt").trim()===""){
        img.setAttribute("alt","Bali blue marketing agency");
      }
    });
  }

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",applyAlt);
  }else{
    applyAlt();
  }
})();