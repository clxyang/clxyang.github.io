function openBlurb(name) {
    // let blurb = document.getElementById(name + "-blurb");
    let item = document.getElementById(name + "-item");
    // candle=barrett, flowers=wallace, chair=wallace, book=dalbe
    let person = "wallace"
    if (name == "candle") {
        person = "barrett";
    }
    if (name == "book") {
        person = "dalbe";
    }
    if (name == "chair") {
        person = "chair"
    }
    // console.log("person is ", person);

    let quote = document.getElementById(person + "-q")

    if (item.classList.contains("reveal")) {
        item.classList.remove("reveal");
        quote.classList.remove("side");
    }
    else {
        candle = document.getElementById("candle-item");
        flowers = document.getElementById("flowers-item");
        book = document.getElementById("book-item");
        chair = document.getElementById("chair-item");

        wallace = document.getElementById("wallace-q");
        barrett = document.getElementById("barrett-q")
        dalbe = document.getElementById("dalbe-q")
        chairq = document.getElementById("chair-q")

        if (candle.classList.contains("reveal")) {
            candle.classList.remove("reveal");
            barrett.classList.remove("side");
            barrett.classList.add("hide");
        }
        if (flowers.classList.contains("reveal")) {
            flowers.classList.remove("reveal");
            wallace.classList.remove("side");
            wallace.classList.add("hide");
        }
        if (book.classList.contains("reveal")) {
            book.classList.remove("reveal");
            dalbe.classList.remove("side");
            dalbe.classList.add("hide");
        }
        if (chair.classList.contains("reveal")) {
            chair.classList.remove("reveal");
            chair.classList.remove("side");
            chairq.classList.add("hide");
        }

        // if (wallace.classList.contains("side")) {
        //     wallace.classList.remove("side");
        // }
        // if (barrett.classList.contains("side")) {
        //     barrett.classList.remove("side");
        // }
        // if (dalbe.classList.contains("side")) {
        //     dalbe.classList.remove("side");
        // }

        wallace.classList.add("hide");
        barrett.classList.add("hide");
        dalbe.classList.add("hide");
        chairq.classList.add("hide");

        if (quote.classList.contains("hide")) {
            quote.classList.remove("hide");
        }
        item.classList.add("reveal");
        quote.classList.add("side");
    }
}

// document.addEventListener("DOMContentLoaded", function() {
//     const theWords = ["the virtual laboratory", "the virtual séance room"];
//     let theBox = document.getElementById("word");
//     console.log(theBox);
//     let idx = 0;

//     const writeBox = (word) => {
//         const pieces = word.split("");
//         let letterIndex = 0;
//         let isDeleting = false;
    
//         const writeLetters = () => {
//             if (isDeleting) {
//                 if (letterIndex >= 0) {
//                     theBox.innerHTML = pieces.slice(0, letterIndex).join("") + "<span class='cursor'></span>";
//                     letterIndex--;
//                     setTimeout(writeLetters, 100); // Adjust the timeout for deletion speed
//                 } else {
//                     isDeleting = false;
//                     switchWord();
//                 }
//             } else {
//                 if (letterIndex <= pieces.length) {
//                     theBox.innerHTML = pieces.slice(0, letterIndex).join("") + "<span class='cursor'></span>";
//                     letterIndex++;
//                     setTimeout(writeLetters, 100); // Adjust the timeout for typing speed
//                 } else {
//                     isDeleting = true;
//                     setTimeout(writeLetters, 2200); // Adjust the timeout before starting deletion
//                 }
//             }
//         };
    
//         writeLetters();
//     };
//     const switchWord = () => {
//         idx = idx >= theWords.length - 1 ? 0 : idx + 1;
//         writeBox(theWords[idx]);
//     };

//     switchWord();
// });