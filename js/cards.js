function createBoard(cardsCount) {
    imgPathsAfterInput(cardsCount / 2)
    console.log('updatedImGpATHS', UpdatedImgPaths)
    let txt = ''
    for (let i = 0; i < cardsCount; i++) {
        txt += `<div class="card" id="${UpdatedImgPaths[i].name}">
            <div class="card__face card__face--front">
                <img class="card-back-image" src="images/צילום מסך 2024-04-10 191528.png" style="width: 130px;"
                height="180px">
            </div>

            <div class="card__face card__face--back">
                <img class="unit_image" src="${UpdatedImgPaths[i].path}" style="max-width: 100px ;max-height: 130px ;">
                <div class="card_text" >${UpdatedImgPaths[i].name}</div>
            </div>
        </div>`
    }
    $('#the_main').html(txt)
    updateCards()
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





function updateCards() {
    cards = $('.card');

    [...cards].forEach((card) => {
        card.addEventListener('click', function () {
            /*היפוך הקלפים כשהשעון מתחיל לרוץ*/
            if (!isStarted ||
                flippedCards.length == 2 ||
                card.classList.contains("is-found") ||
                card.classList.contains("is-flipped")
            ) return;
            // IF THIS ISNT FIRST OR SECOND CARD RETURN
            // if(!isStarted || card.classList.contains(flippedCards[1]) || card.classList.contains(flippedCards[0]))
            card.classList.toggle('is-flipped');
            flippedCards.push(card);
            if (flippedCards.length == 2) handleCards();
        });
    });
}

function handleCards() {
    if (flippedCards[0].id === flippedCards[1].id) {
        // console.log('found a match:', flippedCards[1])
        flippedCards[0].classList.add('is-found');
        flippedCards[1].classList.add('is-found');
        flippedCards = [];
    }
    else {
        // closeCards()
        myTimeout = setTimeout(closeCards, 1000);
        // console.log('didnt find a match:', flippedCards[1].id)
    }
}

function closeCards() {
    console.log('closecards:')
    // delay(2)
    flippedCards.forEach(card => {
        card.classList.toggle('is-flipped');
    });
    clearTimeout(myTimeout);
    flippedCards = [];
}

function closeAllCards() {
    console.log('cards:', cards);
    [...cards].forEach(card => {
        card.classList.remove('is-flipped');
        card.classList.remove('is-found');
    });
    flippedCards = [];
}
// function delay(time) {
//     return new Promise(resolve => setTimeout(resolve, time));
//   }

