function openBlurb(name) {
    let blurb = document.getElementById(name + "-blurb");
    let item = document.getElementById(name + "-item");
    if (blurb.classList.contains("reveal")) {
        blurb.classList.remove("reveal");
        item.classList.remove("reveal-margin");
    }
    else {
        blurb.classList.add("reveal");
        item.classList.add("reveal-margin");
    }
}

let lastScrollY = window.scrollY;

window.onscroll = (event) => {
    toggleNavBar();
}

function toggleNavBar() {
    if (window.scrollY > 25 && lastScrollY < window.scrollY) {
        document.getElementById("navbar").classList.add("hidden");
    } 
    else {
        document.getElementById("navbar").classList.remove("hidden");
    }

    lastScrollY = window.scrollY;
}