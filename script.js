var menubutton=document.querySelector('.adesh');
var leftNav=document.querySelector('.left-nav');

menubutton.addEventListener("click",function() {
    leftNav.classList.toggle('dropdown');
})