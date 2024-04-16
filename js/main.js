


const imgPath0 = {
    name: "בה''ד 1",
    path: "images/cards/בהד1.png"
}
const imgPath1 = {
    name: "גבעתי",
    path: "images/cards/גבעתי.png"
}
const imgPath2 = {
    name: "גולני",
    path: "images/cards/גולני.png"
}
const imgPath3 = {
    name: "דובר צהל",
    path: "images/cards/דוברצהל.png"
}
const imgPath4 = {
    name: "דניאל הגרי",
    path: "images/cards/דניאל_הגרי-removebg-preview.png"
}
const imgPath5 = {
    name: "דרגת סרן",
    path: "images/cards/דרגת_סרן.png"
}
const imgPath6 = {
    name: "הרמטכל",
    path: "images/cards/הרמטכל-removebg-preview.png"
}
const imgPath7 = {
    name: "חיל האוויר",
    path: "images/cards/חיל האוויר.png"
}
const imgPath8 = {
    name: "חיל הים",
    path: "images/cards/חילהים.png"
}
const imgPath9 = {
    name: "טנק",
    path: "images/cards/טנק.png"
}
const imgPath10 = {
    name: "כובע ב",
    path: "images/cards/כובע ב.png"
}
const imgPath11 = {
    name: "כפיר",
    path: "images/cards/כפיר.png"
}

const imgPath12 = {
    name: "מודיעין",
    path: "images/cards/מודיעין.png"
}
const imgPath13 = {
    name: "מטוס קרב",
    path: "images/cards/מטוס-removebg-preview.png"
}
const imgPath14 = {
    name: "מימיה",
    path: "images/cards/מימיה-removebg-preview.png"
}
const imgPath15 = {
    name: "משטרה צבאית",
    path: "images/cards/מצ.png"
}
const imgPath16 = {
    name: "משאבי אנוש",
    path: "images/cards/משאביאנוש.png"
}
const imgPath17 = {
    name: "נחל",
    path: "images/cards/נחל.png"
}
const imgPath18 = {
    name: "נעלי חיר",
    path: "images/cards/נעליחיר.png"
}
const imgPath19 = {
    name: "שקם",
    path: "images/cards/סמליל_כוורת_-_האגודה_למען_החייל.svg.png"
}
const imgPath20 = {
    name: "דרגת סמר",
    path: "images/cards/סמר.png"
}
const imgPath21 = {
    name: "פיקוד העורף",
    path: "images/cards/פיקודהעורף.png"
}
const imgPath22 = {
    name: "צנחנים",
    path: "images/cards/צנחנים.png"
}
const imgPath23 = {
    name: "קסדה",
    path: "images/cards/קסדה.png"
}
const imgPath24 = {
    name: "חיל הרפואה",
    path: "images/cards/רפואה.png"
}
const imgPath25 = {
    name: "שריון",
    path: "images/cards/שריון.png"
}
const imgPath26 = {
    name: "הנדסה קרבית",
    path: "images/cards/תג_חיל_ההנדסה.png"
}
const imgPath27 = {
    name: "חוגר",
    path: "images/cards/תעודת_חוגר.jpg"
}
const imgPath28 = {
    name: "תקשוב",
    path: "images/cards/תקשוב.png"
}
const imgPath29 = {
    name: "האמר",
    path: "images/cards/האמר.png"
}



let cards;
let flippedCards = [];
let isStarted = false;



const ImgPaths = [imgPath0, imgPath1, imgPath2, imgPath3, imgPath4, imgPath5, imgPath6, imgPath7, imgPath8, imgPath9, imgPath10, imgPath11, imgPath12, imgPath13, imgPath14, imgPath15, imgPath16, imgPath17, imgPath18, imgPath19, imgPath20, imgPath21, imgPath22, imgPath23, imgPath24, imgPath25, imgPath26, imgPath27, imgPath28, imgPath29]
let UpdatedImgPaths

init()

function init() {
    
    createBoard(localStorage.getItem('savedNumOfCards')*2);
}

function saveData() {
    let savedName = document.getElementById("valueof_name").value;
    let savedNumOfCards = document.getElementById("valueof_numofcards").value;
    localStorage.setItem('savedName', savedName);
    localStorage.setItem('savedNumOfCards', savedNumOfCards);
}


let savedName = localStorage.getItem('savedName');
let displayElement = document.getElementsByClassName('display_saved_name')[0];
// let displayElement2 = document.getElementsByClassName('display_saved_name')[1];

displayElement.textContent = savedName;