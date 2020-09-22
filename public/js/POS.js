function openDiv(event, ingredient) {
    var i, menu, button;
    menu = document.getElementsByClassName("divmenu");
    for (i = 0; i < menu.length; i++) {
        menu[i].style.display = "none";
    }

    button = document.getElementsByClassName("categorybtn");
    for (i = 0; i < button.length; i++) {
        button[i].className = button[i].className.replace(" active", "");
    }

    document.getElementById(ingredient).style.display = "block";
    event.currentTarget.className += " active";
}