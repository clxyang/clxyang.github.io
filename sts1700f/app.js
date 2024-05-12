function openBlurb(name) {
    // let blurb = document.getElementById(name + "-blurb");
    let item = document.getElementById(name + "-item");
    if (item.classList.contains("reveal")) {
        item.classList.remove("reveal");
    }
    else {
        candle = document.getElementById("candle-item");
        flowers = document.getElementById("flowers-item");
        book = document.getElementById("book-item");
        chair = document.getElementById("chair-item");

        if (candle.classList.contains("reveal")) {
            candle.classList.remove("reveal");
        }
        if (flowers.classList.contains("reveal")) {
            flowers.classList.remove("reveal");
        }
        if (book.classList.contains("reveal")) {
            book.classList.remove("reveal");
        }
        if (chair.classList.contains("reveal")) {
            chair.classList.remove("reveal");
        }

        item.classList.add("reveal");
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