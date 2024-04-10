/*השעון*/
var timerInterval; 
var isStarted = false;

function startTimer() {
    var seconds = 0;
    isStarted = true;

    function updateClock() {
        seconds++;
        var minutes = Math.floor((seconds % 3600) / 60);
        var secs = seconds % 60;

        // הוספת אפס בהתאם לצורך
        minutes = (minutes < 10 ? "0" : "") + minutes;
        secs = (secs < 10 ? "0" : "") + secs;

        // הצגת השעון בעמוד HTML
        var clockDiv = document.getElementById('clock');
        clockDiv.innerText = minutes + ":" + secs;
    }

    // עדכון שעון כל שניה
    timerInterval = setInterval(updateClock, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    var clockDiv = document.getElementById('clock');
    clockDiv.innerText = "00:00";
    isStarted = true;
    startTimer(); // התחל את השעון מחדש
}



/*היפוך הקלפים כשהשעון מתחיל לרוץ*/
var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>
{
  card.addEventListener( 'click', function() 
  {
    if (!isStarted) return;
//אם השעון עדיין לא התחיל לרוץ 
    card.classList.toggle('is-flipped');
  });
});
