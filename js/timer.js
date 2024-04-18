const btnStart = $('.start');
const btnStop = $('.stop');
const btnReset = $('.reset1, .reset2');

let hrs = min = sec = ms = 0, startTimer;
let myTimeout;

btnStart.on('click', startTheTimer
    // console.log('less start:');
    // console.log('flippedCards:', flippedCards)
);
function startTheTimer(){
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
        // if (min == 60) {
        //     hrs++;
        //     min = 0;
        // }
        updateDisplay();
    }, 10);
}
btnStop.on('click', stopTheTimer);

function stopTheTimer(){
    clearInterval(startTimer);
    btnStart.removeClass('start-active');
    btnStop.addClass('stop-active');
    
    isStarted = false;

}

btnReset.on('click', () => {
    // hrs = 
    min = sec = ms = 0;
    clearInterval(startTimer);
    updateDisplay();
    btnStart.removeClass('start-active');
    btnStop.removeClass('stop-active');
    isStarted = false;
    closeAllCards();
    createBoard(localStorage.getItem('savedNumOfCards')*2);
    closePopup()
    // updateCards()
});


function updateDisplay() {
    //Formated Display
    // phrs = hrs < 10 ? '0' + hrs : hrs;
    pmin = min < 10 ? '0' + min : min;
    psec = sec < 10 ? '0' + sec : sec;
    pms = ms < 10 ? '0' + ms : ms;
    //Output
    // $('.hrs,.hrs1').text(phrs);
    $('.min,.min1').text(pmin);
    $('.sec,.sec1').text(psec);
    $('.ms,.ms1').text(pms);
}