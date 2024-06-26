function createBoard(cardsCount) {
    imgsAfterInput(cardsCount / 2)
    let txt = ''
    for (let i = 0; i < cardsCount; i++) {
        txt += `<div class="card" id="${UpdatedImgs[i].name}">
            <div class="card__face card__face--front">
                <img class="card-back-image" src="images/צילום מסך 2024-04-10 191528.png" style="width: 130px;"
                height="180px">
            </div>

            <div class="card__face card__face--back">
                <img class="unit_image" src="${UpdatedImgs[i].path}" style="max-width: 100px ;max-height: 130px ;">
                <div class="card_text" >${UpdatedImgs[i].name}</div>
            </div>
        </div>`
    }
    $('#the_main').html(txt)
    updateCards()
}

function imgsAfterInput(imgCount) {
    getImgsByCount(imgCount)
    // Have a copy of each image and shuffle
    let imgsCpy = UpdatedImgs.slice(0)
    UpdatedImgs = imgsCpy.concat(UpdatedImgs)
    shuffle(UpdatedImgs)
}

function getImgsByCount(count) {
    UpdatedImgs = []
    let imgsCpy = Imgs.slice(0)
    for (let i = 0; i < count; i++) {
        var index = Math.floor(Math.random() * imgsCpy.length)
        const item = imgsCpy[index]
        imgsCpy.splice(index, 1)
        UpdatedImgs.push(item)
    }
}

function shuffle(array) {
    let currentIndex = array.length

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]]
    }
}

function updateCards() {
    cards = $('.card');

    [...cards].forEach((card) => {
        card.addEventListener('click', function () {
            if (hasEnded) return
            /*היפוך הקלפים כשהשעון מתחיל לרוץ*/
            if (!isStarted) {
                startTheTimer()
            } else if (flippedCards.length == 2 ||
                card.classList.contains("is-found") ||
                card.classList.contains("is-flipped")
            ) return
            card.classList.toggle('is-flipped')
            flippedCards.push(card)
            if (flippedCards.length == 2) handleCards()
        })
    });
}

function handleCards() {
    if (hasEnded) return
    if (flippedCards[0].id === flippedCards[1].id) {
        flippedCards[0].classList.add('is-found')
        flippedCards[1].classList.add('is-found')
        flippedCards = []
        revealedCardsCount++
        if (revealedCardsCount == localStorage.getItem('savedNumOfCards')) {
            stopTheTimer()
            showPopup()
        }
    }
    else {
        myTimeout = setTimeout(closeCards, 1000)
    }
}

function closeCards() {
    flippedCards.forEach(card => {
        card.classList.toggle('is-flipped')
    });
    clearTimeout(myTimeout)
    flippedCards = []
}

function closeAllCards() {
    [...cards].forEach(card => {
        card.classList.remove('is-flipped')
        card.classList.remove('is-found')
    })
    flippedCards = []
    revealedCardsCount = 0
}







