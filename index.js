const homeScore = document.getElementById('home-score')
const guestScore = document.getElementById('guest-score')
const leadTeam = document.getElementById('lead')
let homeScoreNumber = 0
let guestScoreNumber = 0

function addOneHome() {
    homeScoreNumber += 1
    homeScore.textContent = homeScoreNumber
}

function addTwoHome() {
    homeScoreNumber += 2
    homeScore.textContent = homeScoreNumber
}

function addThreeHome() {
    homeScoreNumber += 3
    homeScore.textContent = homeScoreNumber
}

function addOneGuest() {
    guestScoreNumber += 1
    guestScore.textContent = guestScoreNumber
}

function addTwoGuest() {
    guestScoreNumber += 2
    guestScore.textContent = guestScoreNumber
}

function addThreeGuest() {
    guestScoreNumber += 3
    guestScore.textContent = guestScoreNumber
}

function newGame() {
    homeScoreNumber = 0
    homeScore.textContent = homeScoreNumber
    guestScoreNumber = 0
    guestScore.textContent = guestScoreNumber
}

function foulHome() {
    homeScoreNumber -= 5
    homeScore.textContent = homeScoreNumber
}

function foulGuest() {
    guestScoreNumber -= 5
    guestScore.textContent = guestScoreNumber
}

function updateLead() {
    if (homeScoreNumber < guestScoreNumber) {
        leadTeam.textContent = "Guest is in the lead!"
    } else if (homeScoreNumber > guestScoreNumber) {
        leadTeam.textContent = "Home is in the lead!"
    } else if (homeScoreNumber === guestScoreNumber && homeScoreNumber !== 0) {
        leadTeam.textContent = "It's neck and neck!"
    } else {
        leadTeam.textContent = "Let the games begin!"
    }
}
