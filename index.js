let homeScoreEl = document.getElementById("home-score");
let homeScore = 0;

let guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;

let winnerEl = document.getElementById("winner");

function incrementHomeByOne() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function incrementHomeByTwo() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function incrementHomeByThree() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function incrementGuestByOne() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function incrementGuestByTwo() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function incrementGuestByThree() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

function winner() {
    if(homeScore > guestScore) {
        winnerEl.textContent = "Home is the Winner!";
    } else if (homeScore < guestScore){
        winnerEl.textContent = "Guest is the Winner!"
    } else {
        winnerEl.textContent = "Match is a draw";
    }
}




