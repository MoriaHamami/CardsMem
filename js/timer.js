const btnStart = $('.start');
const btnStop = $('.stop');
const btnReset = $('.reset');

let hrs = min = sec = ms = 0, startTimer;
let myTimeout;

btnStart.on('click', () => {
    console.log('less start:');
    console.log('flippedCards:', flippedCards)
    btnStart.addClass('start-active');
    btnStop.removeClass('stop-active');
    isStarted = true;
    startTimer = setInterval(() => {
        ms++;//ms=ms+1;
        if (ms == 100) {
            sec++;
            ms = 0;
        }
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (min == 60) {
            hrs++;
            min = 0;
        }
        updateDisplay();
    }, 10);
});

btnStop.on('click', () => {
    clearInterval(startTimer);
    btnStart.removeClass('start-active');
    btnStop.addClass('stop-active');

    isStarted = false;
});

btnReset.on('click', () => {
    hrs = min = sec = ms = 0;
    clearInterval(startTimer);
    updateDisplay();
    btnStart.removeClass('start-active');
    btnStop.removeClass('stop-active');
    isStarted = false;
    closeAllCards();
    createBoard(10);
    // updateCards()
});


function updateDisplay() {
    //Formated Display
    phrs = hrs < 10 ? '0' + hrs : hrs;
    pmin = min < 10 ? '0' + min : min;
    psec = sec < 10 ? '0' + sec : sec;
    pms = ms < 10 ? '0' + ms : ms;
    //Output
    $('.hrs').text(phrs);
    $('.min').text(pmin);
    $('.sec').text(psec);
    $('.ms').text(pms);
}