const ai = document.getElementById("number");
const attempts = document.getElementById("prev");
var answer = Math.round(Math.random() * 100);
var attemptCount = 0;
function play() {

    var playerInput = document.getElementById("input").value;
    if (playerInput == answer) {
        ai.innerText = "Correct!"
    } else if (playerInput > answer) {
        ai.innerText = "Less..."
        attempts.append(playerInput + " ")
    } else {
        ai.innerText = "More..."
        attempts.append(playerInput + " ")
    }

    attemptCount += 1;
    if(attemptCount == 10) {
        alert("You have lost")
    }
}