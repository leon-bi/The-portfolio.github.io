const navTrigger = document.querySelector(".nav-trigger");
const nav = document.querySelector(".stretchy-nav");

navTrigger.addEventListener("click",function(){
    nav.classList.toggle("nav-is-visible");
})

const ahref = document.querySelector(".links").children;

for(let i= 0; i<ahref.length; i++){
    const a = ahref[i].querySelector("a");
    a.addEventListener("click",function(){
        // remove active class from all lists
        for(let j=0; j<ahref.length;j++){
            ahref[j].querySelector('a').classList.remove("active")
        }

        // add class active to clicked link
        this.classList.add("active");
    })
}

// hide stretcchy nav when clicked outside of navtrigger
window.onclick=function(event){
    if (event.target!=navTrigger && event.target!=navTrigger.querySelector("span")){
        nav.classList.remove("nav-is-visible");
    }
}

$(document).ready(function() {
    $('#lightgallery').lightGallery({
      pager: true
    });
  });

  $(function(){
    //WOW plugin init
    new WOW().init();

    //parallax effect for banner
    (function() {
        var posY;
        var image = document.getElementById('parallax');;
        function paralax() {
            posY = window.pageYOffset;
            image.style.top = posY * 0.9 + 'px';
        }
        window.addEventListener('scroll', paralax);
    })();
});
