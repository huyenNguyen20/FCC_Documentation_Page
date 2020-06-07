var sectionList = document.querySelectorAll("main section");
var linkList = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", event => {
  var fromTop = window.scrollY;
  linkList.forEach(link => {
    var section = document.querySelector(link.hash);
    if (
     section.offsetTop <= fromTop &&
     (section.offsetTop + section.offsetHeight)> fromTop
    )
    {
      link.classList.add("current");
    } else{
      link.classList.remove("current");
    }
  })
})
