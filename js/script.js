const navToggleBtn = document.getElementById("nav-toggle-btn");
const navList = document.getElementById("navList");
const svgLine = document.getElementById("svgLine");
const linkCtn = document.getElementById("linkCtn");
const autoCloseNav = document.getElementById('navList').getElementsByTagName('li');

navToggleBtn.addEventListener("click", function onClick() {
    navList.classList.toggle("nav-open");
    svgLine.classList.toggle("svg-flip");
    linkCtn.classList.toggle("full-vh")
});

// autoCloseNav.addEventListener("click", function onClick(closeVar) {
//     navList.classList.remove("nav-open");
//     linkCtn.classList.remove("full-vh");
// });

for(var i=0;i<autoCloseNav.length;i++)
    autoCloseNav[i].onclick = closeVar;

    function closeVar(e) {
        navList.classList.remove('nav-open');
      }