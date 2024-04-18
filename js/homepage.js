function saveData() {
    let savedName = document.getElementById("valueof_name").value;
    let savedNumOfCards = document.getElementById("valueof_numofcards").value;
    if (savedNumOfCards > 30) return;
    localStorage.setItem('savedName', savedName);
    localStorage.setItem('savedNumOfCards', savedNumOfCards);
    
}
let savedName = localStorage.getItem('savedName');
