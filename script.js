var timerInterval;
var isStarted = false;

function startTimer() 
{
  var seconds = 0;
  isStarted = true;

  function updateClock() 
  {
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

[...cards].forEach((card) => {
  card.addEventListener('click', function () {
    if (!isStarted) return;
    //אם השעון עדיין לא התחיל לרוץ 
    card.classList.toggle('is-flipped');
  });
});


/******/

function showPopup() {
  document.getElementById("alertPopup").style.display = "block";
  document.getElementById("alertPopup").style.display = "block";
  document.getElementById("alertSound").play(); // ניגון הצליל
}

// פונקציה לסגירת ההתראה
function closePopup() {
  document.getElementById("alertPopup").style.display = "none";
}



/******/

function saveValues() {
  var valueof_name = document.getElementById('valueof_name').value;
  var valueof_numofcards = document.getElementById('valueof_numofcards').value;
  localStorage.setItem('valueof_name', valueof_name);
  localStorage.setItem('valueof_numofcards', valueof_numofcards);

  window.location.href = "index.html";
}

// בדיקה אם קיימים ערכים שנשמרו ב-localStorage והצגתם
window.onload = function () {
  var valueof_name = localStorage.getItem('valueof_name');
  var valueof_numofcards = localStorage.getItem('valueof_numofcards');
}

// אם קיים שם משתמש, הצגתו באלמנט HTML מתאים
if (valueof_name) {
  document.getElementById('userGreeting').textContent = "שלום, " + valueof_name;
}

// פונקציה שמפעילה את הפונקציות saveValues ו-startTimer
function saveValuesAndStartTimer() {
  saveValues(); // קריאה לפונקציה הראשונה
  startTimer(); // קריאה לפונקציה השנייה
}