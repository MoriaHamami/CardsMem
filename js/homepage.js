let savedName = localStorage.getItem('savedName')
// Get the input field
var input = document.getElementById("myForm")

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault()
        // Trigger the button element with a click
        document.getElementsByClassName("start")[0].click()
    }
})

function saveData() {
    let savedName = document.getElementById("valueof_name").value
    let savedNumOfCards = document.getElementById("valueof_numofcards").value
    if (!(savedNumOfCards <= 30 && savedNumOfCards > 0) || savedNumOfCards === 0) return showInputErr()
    localStorage.setItem('savedName', savedName)
    localStorage.setItem('savedNumOfCards', savedNumOfCards)
    location.href = './index.html'
}

function showInputErr() {
    $('.err').show()
}

function onChangeInput() {
    $('.err').hide()
}

