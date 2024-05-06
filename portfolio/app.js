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

function openMediaScroller() {
    let media = document.getElementById("media-scroller");
    if (media.classList.contains("reveal")) {
        media.classList.remove("reveal");
    }
    else {
        media.classList.add("reveal");
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

document.addEventListener("DOMContentLoaded", function() {
    const theWords = ["studying CS at Brown", "making choreo for my dance team", "playing the NYT Strands"];
    let theBox = document.getElementById("word");
    console.log(theBox);
    let idx = 0;

    const writeBox = (word) => {
        const pieces = word.split("");
        let letterIndex = 0;
        let isDeleting = false;
    
        const writeLetters = () => {
            if (isDeleting) {
                if (letterIndex >= 0) {
                    theBox.innerHTML = pieces.slice(0, letterIndex).join("") + "<span class='cursor'></span>";
                    letterIndex--;
                    setTimeout(writeLetters, 100); // Adjust the timeout for deletion speed
                } else {
                    isDeleting = false;
                    switchWord();
                }
            } else {
                if (letterIndex <= pieces.length) {
                    theBox.innerHTML = pieces.slice(0, letterIndex).join("") + "<span class='cursor'></span>";
                    letterIndex++;
                    setTimeout(writeLetters, 100); // Adjust the timeout for typing speed
                } else {
                    isDeleting = true;
                    setTimeout(writeLetters, 1000); // Adjust the timeout before starting deletion
                }
            }
        };
    
        writeLetters();
    };
    const switchWord = () => {
        idx = idx >= theWords.length - 1 ? 0 : idx + 1;
        writeBox(theWords[idx]);
    };

    switchWord();
});