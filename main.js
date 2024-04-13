const imgPath0 = "images/handasa.png"
const imgPath1 = "images/golani.png"
const imgPath2 = "images/bahad1.png"
const imgPath3 = "images/dover.png"
const imgPath4 = "images/givaty.png"
const imgPath5 = "images/intele.png"
const imgPath6 = "images/nahal.png"
const imgPath7 = "images/navy.png"
const imgPath8 = "images/rafooha.png"
const imgPath9 = "images/shiryon.jpg"
const imgPath10 = "images/airforce.png"
const imgPath11 = "images/para.png"

const imgPath12 = "images/para.png"
const imgPath13 = "images/para.png"
const imgPath14 = "images/para.png"
const imgPath15 = "images/para.png"
const imgPath16 = "images/para.png"
const imgPath17 = "images/para.png"
const imgPath18 = "images/para.png"
const imgPath19 = "images/para.png"
const imgPath20 = "images/para.png"
const imgPath21 = "images/para.png"
const imgPath22 = "images/para.png"
const imgPath23 = "images/para.png"
const imgPath24 = "images/para.png"
const imgPath25 = "images/para.png"
const imgPath26 = "images/para.png"
const imgPath27 = "images/para.png"
const imgPath28 = "images/para.png"
const imgPath29 = "images/para.png"

const ImgPaths = [imgPath0, imgPath1, imgPath2, imgPath3, imgPath4, imgPath5, imgPath6, imgPath7, imgPath8, imgPath9, imgPath10, imgPath11, imgPath12, imgPath13, imgPath14, imgPath15, imgPath16, imgPath17, imgPath18, imgPath19, imgPath20, imgPath21, imgPath22, imgPath23, imgPath24, imgPath25, imgPath26, imgPath27, imgPath28, imgPath29]
let UpdatedImgPaths
createBoard(10)

function createBoard(cardsCount) {
    imgPathsAfterInput(cardsCount)
    let txt =''
    for (let i = 0; i < cardsCount; i++) {
        txt += `<div class="card">
            <div class="card__face card__face--front">
                <img class="card-back-image" src="images/צילום מסך 2024-04-10 191528.png" style="width: 130px;"
                height="180px">
            </div>

            <div class="card__face card__face--back">
                <img class="unit_image" src="${UpdatedImgPaths[i]}" style="max-width: 100px ;max-height: 130px ;">
                <div class="card_text">גבעתי</div>
            </div>
        </div>`
    }
    $('#the_main').html(txt)
}

// console.log(UpdatedImgPaths)

function imgPathsAfterInput(imgCount) {
    getImgPathsByCount(imgCount)
    // Have a copy of each image and shuffle
    let imgPathsCpy = UpdatedImgPaths.slice(0);
    UpdatedImgPaths = imgPathsCpy.concat(UpdatedImgPaths)
    shuffle(UpdatedImgPaths)
}

function getImgPathsByCount(count) {
    UpdatedImgPaths = []
    let imgPathsCpy = ImgPaths.slice(0);
    for (let i = 0; i < count; i++) {
        var index = Math.floor(Math.random() * imgPathsCpy.length);
        const item = imgPathsCpy[index];
        imgPathsCpy.splice(index, 1);
        UpdatedImgPaths.push(item)
    }
}

function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}