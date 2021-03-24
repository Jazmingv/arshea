var menu;
var hamburger;
var line;
var menuOpen = false;

document.addEventListener("DOMContentLoaded", function(event) {

    menu = document.getElementById("menu");
    hamburger = document.getElementById("hamburger");
    line = document.getElementsByClassName("line");

});

function openMenu() {
    menu.style.left = "0px";;
    for (i = 0; i < line.length; i++) {
        line[i].style.backgroundColor = "#FFF";
    }
    menuOpen = true;
}

function closeMenu() {
    menu.style.left = "-320px";
    for (i = 0; i < line.length; i++) {
        line[i].style.backgroundColor = "#3b3b3b";
    }
    menuOpen = false;
}

function toggleMenu() {
    if (menuOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}