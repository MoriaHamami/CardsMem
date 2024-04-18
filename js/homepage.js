function saveData() {
    let savedName = document.getElementById("valueof_name").value;
    let savedNumOfCards = document.getElementById("valueof_numofcards").value;
    if (savedNumOfCards > 30) return showInputErr();
    localStorage.setItem('savedName', savedName);
    localStorage.setItem('savedNumOfCards', savedNumOfCards);
    location.href = '../index.html'
}

let savedName = localStorage.getItem('savedName');
function showInputErr(){
    $('.err').show();
}
// document.getElementsByClassName('.form-control')[1].
// $('.form-control').on('change', ()=> {
// })

function onChangeInput(){
    console.log('here:');
    $('.err').hide();
}

