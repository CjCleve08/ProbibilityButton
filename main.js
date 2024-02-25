let button = document.getElementById("red-circle");
let scoreText = document.getElementById("score-text");
let resetProbibilityText = document.getElementById("reset-probibility-text");
let probabilityResetProbibilityText = document.getElementById("probibility-reset-probibility-text");
let highScoreText = document.getElementById("high-score-text");

//localStorage.setItem("highScore", 0);

let score = 0;
let resetProbibility = 0;
let probabilityResetProbibility = 0;
let highScore = localStorage.getItem("highScore");

highScoreText.innerHTML = "High Score: " + highScore.toString();

button.onmousedown = function() {
    button.classList.remove("button-up");
    button.classList.add("button-down");
};

button.onmouseup = function() {
    button.classList.remove("button-down");
    button.classList.add("button-up");

    if (score > highScore) {
        localStorage.setItem("highScore", score);
        highScore = localStorage.getItem("highScore");
    }

    var randomNum = Math.random() * 100
    if (randomNum <= resetProbibility) {
        ResetScore();
        return;
    }

    var otherRandomNum = Math.random() * 100
    if (otherRandomNum <= probabilityResetProbibility) {
        ResetProbibility();
    }

    AddToScore();
};

let AddToScore = () => {
    score++;
    resetProbibility++;
    probabilityResetProbibility = Math.floor(Math.random() * 25); 
    UpdateText();
}

let ResetScore = () => {
    score = 0;
    resetProbibility = 0;
    probabilityResetProbibility = 0;
    UpdateText();
}

let ResetProbibility = () => {
    resetProbibility = 0;
    probabilityResetProbibility = 0;
}

let UpdateText = () => {
    scoreText.innerHTML = score.toString();
    resetProbibilityText.innerHTML = "Score Reset Probibility: " + resetProbibility.toString() + "%";
    probabilityResetProbibilityText.innerHTML = "Probibility Reset Probibility: " + probabilityResetProbibility.toString() + "%";
    highScoreText.innerHTML = "High Score: " + highScore.toString();
}