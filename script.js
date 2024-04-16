// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let url = "https://cdn.glitch.global/7fb2b26c-772a-457c-a104-75e721dd9579/";
let cards = [
    "%20copy2.jpg?v=1710435473251",
    "Untitled-8.jpg?v=1710435488120",
    "Untitled-6.jpg?v=1710435496665",
    "Untitled-5.jpg?v=1710435505196",
    "Untitled-4.jpg?v=1710435515876",
    "Untitled-2.jpg?v=1710435523363",
    "ponyo4.webp?v=1710435537333",
    "chihiro%205.webp?v=1710435478959"
];

// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
    }
};

// Button to Double Deck 
buttonDouble.onclick = function() {
    console.log("deck has" + cards.length + "cards.");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend",
                "<div style='background-image: url(" + url +
                card +
                ")' class='card'>");
        }
    }

    console.log("Now the deck has " + cards.length + " cards.");
    buttonDouble.style.color = "silver";
};




// Button to Shuffle Cards

buttonShuffle.onclick = function() {
    shuffle(cards);
    game.innerHTML = "";
    console.log("I’m shuffling the cards!");
    i = 0;
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url + card + ")' id = '" + i + "' class='card'>"
                               );
        i = i + 1;
    }
};

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}




// Button to Flip All Cards
buttonFlip.onclick = function() {
    let i=0;

    for (let card of cards) {
 
        document.getElementById(i).style.backgroundImage = "";
         i = i + 1;
        
    }
};

// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
});