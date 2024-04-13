const imgPath0 = {
    name: "הנדסה קרבית",
    path: "images/handasa.png"
}
const imgPath1 = {
    name: "גולני",
    path: "images/golani.png"
}
const imgPath2 = {
    name: "בהד 1",
    path: "images/bahad1.png"
}
const imgPath3 = {
    name: "דובר צהל",
    path: "images/dover.png"
}
const imgPath4 = {
    name: "גבעתי",
    path: "images/givaty.png"
}
const imgPath5 = {
    name: "מודיעין",
    path: "images/intele.png"
}
const imgPath6 = {
    name: "נחל",
    path: "images/nahal.png"
}
const imgPath7 = {
    name: "חיל הים",
    path: "images/navy.png"
}
const imgPath8 = {
    name: "רפואה",
    path: "images/rafooha.png"
}
const imgPath9 = {
    name: "שריון",
    path: "images/shiryon.jpg"
}
const imgPath10 = {
    name: "חיל האוויר",
    path: "images/airforce.png"
}
const imgPath11 = {
    name: "צנחנים",
    path: "images/para.png"
}

const imgPath12 = {
    name: "",
    path: "images/para.png"
}
const imgPath13 = {
    name: "",
    path: "images/para.png"
}
const imgPath14 = {
    name: "",
    path: "images/para.png"
}
const imgPath15 = {
    name: "",
    path: "images/para.png"
}
const imgPath16 = {
    name: "",
    path: "images/para.png"
}
const imgPath17 = {
    name: "",
    path: "images/para.png"
}
const imgPath18 = {
    name: "",
    path: "images/para.png"
}
const imgPath19 = {
    name: "",
    path: "images/para.png"
}
const imgPath20 = {
    name: "",
    path: "images/para.png"
}
const imgPath21 = {
    name: "",
    path: "images/para.png"
}
const imgPath22 = {
    name: "",
    path: "images/para.png"
}
const imgPath23 = {
    name: "",
    path: "images/para.png"
}
const imgPath24 = {
    name: "",
    path: "images/para.png"
}
const imgPath25 = {
    name: "",
    path: "images/para.png"
}
const imgPath26 = {
    name: "",
    path: "images/para.png"
}
const imgPath27 = {
    name: "",
    path: "images/para.png"
}
const imgPath28 = {
    name: "",
    path: "images/para.png"
}
const imgPath29 = {
    name: "",
    path: "images/para.png"
}



let cards;
let flippedCards = [];
let isStarted = false;



const ImgPaths = [imgPath0, imgPath1, imgPath2, imgPath3, imgPath4, imgPath5, imgPath6, imgPath7, imgPath8, imgPath9, imgPath10, imgPath11, imgPath12, imgPath13, imgPath14, imgPath15, imgPath16, imgPath17, imgPath18, imgPath19, imgPath20, imgPath21, imgPath22, imgPath23, imgPath24, imgPath25, imgPath26, imgPath27, imgPath28, imgPath29]
let UpdatedImgPaths

init()

function init(){
    createBoard(10)
}

