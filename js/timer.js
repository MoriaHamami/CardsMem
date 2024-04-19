const btnStart = $('.start')
const btnStop = $('.stop')
const btnReset = $('.reset1, .reset2')

let hrs = min = sec = ms = 0, startTimer
let myTimeout

btnStart.on('click', startTheTimer)
btnStop.on('click', stopTheTimer)
btnReset.on('click', resetTimer)

function startTheTimer() {
    if (hasEnded) return
    btnStart.addClass('start-active')
    btnStop.removeClass('stop-active')
    isStarted = true
    startTimer = setInterval(() => {
        ms++
        if (ms == 100) {
            sec++
            ms = 0
        }
        if (sec == 60) {
            min++
            sec = 0
        }
        updateDisplay()
    }, 10)
}

function stopTheTimer() {
    clearInterval(startTimer)
    btnStart.removeClass('start-active')
    btnStop.addClass('stop-active')
    isStarted = false
}

function resetTimer() {
    hasEnded = false
    min = sec = ms = 0
    clearInterval(startTimer)
    updateDisplay()
    btnStart.removeClass('start-active')
    btnStop.removeClass('stop-active')
    isStarted = false
    closeAllCards()
    createBoard(localStorage.getItem('savedNumOfCards') * 2)
    closePopup()
}

function updateDisplay() {
    //Formated Display
    pmin = min < 10 ? '0' + min : min
    psec = sec < 10 ? '0' + sec : sec
    pms = ms < 10 ? '0' + ms : ms
    //Output
    $('.min,.min1').text(pmin)
    $('.sec,.sec1').text(psec)
    $('.ms,.ms1').text(pms)
}