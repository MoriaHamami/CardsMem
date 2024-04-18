


const img0 = {
    name: "בה''ד 1",
    path: "images/cards/בהד1.png"
}
const img1 = {
    name: "גבעתי",
    path: "images/cards/גבעתי.png"
}
const img2 = {
    name: "גולני",
    path: "images/cards/גולני.png"
}
const img3 = {
    name: "דובר צהל",
    path: "images/cards/דוברצהל.png"
}
const img4 = {
    name: "דניאל הגרי",
    path: "images/cards/דניאל_הגרי-removebg-preview.png"
}
const img5 = {
    name: "דרגת סרן",
    path: "images/cards/דרגת_סרן.png"
}
const img6 = {
    name: "הרמטכל",
    path: "images/cards/הרמטכל-removebg-preview.png"
}
const img7 = {
    name: "חיל האוויר",
    path: "images/cards/חיל האוויר.png"
}
const img8 = {
    name: "חיל הים",
    path: "images/cards/חילהים.png"
}
const img9 = {
    name: "טנק",
    path: "images/cards/טנק.png"
}
const img10 = {
    name: "כובע ב",
    path: "images/cards/כובע ב.png"
}
const img11 = {
    name: "כפיר",
    path: "images/cards/כפיר.png"
}

const img12 = {
    name: "מודיעין",
    path: "images/cards/מודיעין.png"
}
const img13 = {
    name: "מטוס קרב",
    path: "images/cards/מטוס-removebg-preview.png"
}
const img14 = {
    name: "מימיה",
    path: "images/cards/מימיה-removebg-preview.png"
}
const img15 = {
    name: "משטרה צבאית",
    path: "images/cards/מצ.png"
}
const img16 = {
    name: "משאבי אנוש",
    path: "images/cards/משאביאנוש.png"
}
const img17 = {
    name: "נחל",
    path: "images/cards/נחל.png"
}
const img18 = {
    name: "נעלי חיר",
    path: "images/cards/נעליחיר.png"
}
const img19 = {
    name: "שקם",
    path: "images/cards/סמליל_כוורת_-_האגודה_למען_החייל.svg.png"
}
const img20 = {
    name: "דרגת סמר",
    path: "images/cards/סמר.png"
}
const img21 = {
    name: "פיקוד העורף",
    path: "images/cards/פיקודהעורף.png"
}
const img22 = {
    name: "צנחנים",
    path: "images/cards/צנחנים.png"
}
const img23 = {
    name: "קסדה",
    path: "images/cards/קסדה.png"
}
const img24 = {
    name: "חיל הרפואה",
    path: "images/cards/רפואה.png"
}
const img25 = {
    name: "שריון",
    path: "images/cards/שריון.png"
}
const img26 = {
    name: "הנדסה קרבית",
    path: "images/cards/תג_חיל_ההנדסה.png"
}
const img27 = {
    name: "חוגר",
    path: "images/cards/תעודת_חוגר.jpg"
}
const img28 = {
    name: "תקשוב",
    path: "images/cards/תקשוב.png"
}
const img29 = {
    name: "האמר",
    path: "images/cards/האמר.png"
}


let savedName = localStorage.getItem('savedName');

let cards;
let flippedCards = [];
let isStarted = false;
let revealedCardsCount = 0;
let hasEnded = false;

const Imgs = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29]
let UpdatedImgs

let displayElement = document.getElementsByClassName('display_saved_name')[0];
displayElement.textContent = savedName;

init()

function init() {

    createBoard(localStorage.getItem('savedNumOfCards') * 2);
    closePopup()
    // displayElement.textContent = savedName;
}





function closePopup() {
    $('#alertPopup').hide();
    // console.log('here');
    // hasEnded = true;
    // hrs = min = sec = ms = 0;
    // clearInterval(startTimer);
    // updateDisplay();
    // btnStart.removeClass('start-active');
    // btnStop.removeClass('stop-active');
    isStarted = false;
    // closeAllCards();
    // createBoard(localStorage.getItem('savedNumOfCards') * 2);
}

function showPopup() {
    // console.log('won:');
    hasEnded = true;
    $('#alertPopup').show();
    var audio = new Audio("./success.mp3");
    audio.play();
    document.getElementsByClassName('display_saved_name')[1].innerText = savedName;
}
