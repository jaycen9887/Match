// GLOBAL VARIABLES
var cardBack = $(".back");
var cardFront = $(".front");

var matchesRemaining = 0;
var wins = 0;

var selectedCard01;
var selectedCard02;

    /*name: ["Two of Clubs", "Two of Diamonds", "Two of Hearts", "Two of Spades", "Ace of Clubs", "Ace of Diamonds", "Ace of Hearts", "Ace of Spades", "Jack of Clubs", "Jack of Diamonds", "Jack of Hearts", "Jack of Spades", "Queen of Clubs", "Queen of Diamonds", "Queen of Hearts", "Queen of Spades", "King of Clubs", "King of Diamonds", "King of Hearts", "King of Spades"],
    image : ["assets/images/2_clubs.png", "assets/images/2_diamonds.png", "assets/images/2_hearts.png", "assets/images/2_spades.png", "assets/images/a_clubs.png", "assets/images/a_diamonds.png", "assets/images/a_hearts.png", "assets/images/a_spades.png", "assets/images/j_clubs.png", "assets/images/j_diamonds.png", "assets/images/j_hearts.png", "assets/images/j_spades.png", "assets/images/q_clubs.png", "assets/images/q_diamonds.png", "assets/images/q_hearts.png", "assets/images/q_spades.png", "assets/images/k_clubs.png", "assets/images/k_diamonds.png", "assets/images/k_hearts.png", "assets/images/k_spades.png"]*/

var cards = {
    name: ["Two of Hearts", "Two of Spades", "Ace of Hearts", "Ace of Spades", "Jack of Hearts", "Jack of Spades", "Queen of Hearts", "Queen of Spades", "King of Hearts", "King of Spades"],
    image : ["assets/images/2_hearts.png", "../images/2_spades.png", "assets/images/a_hearts.png", "assets/images/a_spades.png", "assets/images/j_hearts.png", "assets/images/j_spades.png", "assets/images/q_hearts.png", "assets/images/q_spades.png", "assets/images/k_hearts.png", "assets/images/k_spades.png"],
    back: "assets/images.cardback.png"
};



/*$(document).ready(function () {

    cardBack.src = cards.back;
        
    cardFront.src = "/assets/images/2_clubs.png";


});*/

//FUNCTIONS

/* Function randomly places cards in a position  */

/* Function shows the card positions then pauses 10 seconds*/

/* Function flips cards to cardback */

/* Function flips card to front when clicked */

/* Function checks if cards clicked on are a match or not 
    if cards are not a match it flips the back over
    if cards are a match change css on card back to green with a check on it. Updates matches remaining and wins
*/




//FUNCTION CALLS