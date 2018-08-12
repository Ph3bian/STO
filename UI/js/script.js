navControl = () => {
    let ctrl = document.getElementById("nav-group");
    if (ctrl.className === "headernav") {
        ctrl.className += " fluid";
    } else {
        ctrl.className = "headernav";
    }
}
window.onscroll = () => {
    let navTop = 51;
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > navTop) {

    }
}