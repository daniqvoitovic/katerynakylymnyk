var icon = document.getElementById("switcher");

icon.onclick = function () {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        icon.src = "./assets/day-switcher-icon.png";
    } else {
        icon.src = "./assets/night-switcher-icon.png";
    }
}