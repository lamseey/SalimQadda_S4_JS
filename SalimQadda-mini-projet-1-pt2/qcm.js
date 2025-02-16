let timerID;
let score = 0;
let totalChoices = 0;
let choices;

function decodeHTMLEntities(text) {
    const parser = new DOMParser();
    return parser.parseFromString(text, "text/html").body.textContent;
}


async function fromOpenTDBtoQuiz(numOfQuestions, category, difficulty, type, encode) {
    const response = await fetch(`https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&type=${type}&encode=${encode}`);
    const data = await response.json();

    return data.results.map(question => ({
        question: decodeHTMLEntities(question.question),
        correct_answer: decodeHTMLEntities(question.correct_answer),
        incorrect_answers: question.incorrect_answers.map(ans => decodeHTMLEntities(ans)),
        type: question.type,
        difficulty: question.difficulty,
        category: category
    }));
}


async function startQuestions(){
    event.preventDefault();
    choices = await fromOpenTDBtoQuiz(document.forms["startForm"]["numQuestions"].value, document.forms["startForm"]["category"].value, document.forms["startForm"]["difficulty"].value, document.forms["startForm"]["type"].value, document.forms["startForm"]["encode"].value);
    score = 0;
    totalChoices = 0;
    let content = document.getElementsByClassName("main-content");
    while (content.length > 1){
            content[1].remove();
    }
    document.getElementById("startPage").style.display = "none";
    document.getElementById("finalPage").style.display = "none";
    questionStart(0);
}



function questionStart(i) {
    if (i === choices.length){
        document.getElementById("startPage").style.display = "none";
        document.getElementById("finalPage").style.display = "flex";
        document.getElementById("finalScore").innerHTML = "Votre score est de " + score + " / " + choices.length;
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;}
    let myQuestion = document.createElement("div");
    document.body.appendChild(myQuestion);
    myQuestion.innerHTML = document.getElementById("main-content").innerHTML;
    myQuestion.className = "main-content";
    myQuestion.style.display = "block";
    document.getElementsByClassName("questions-count")[i + 1].innerHTML = (i + 1) + " / " + choices.length;
    let answers = document.getElementsByClassName("answers")[i + 1];
    document.getElementsByClassName("question")[i + 1].textContent = choices[i].question;
    let timeLeft = 10; // Timer duration in seconds
    const timerDisplay = document.getElementsByClassName("timer")[i + 1];
    const progressCircle = document.getElementsByClassName("progress")[i + 1];
    const totalLength = 2 * Math.PI * 50; // Circumference of the circle
    let x = Math.floor(Math.random() * (choices[i].incorrect_answers.length + 1));
    let k = 0;
    for (let j = 0; j < choices[i].incorrect_answers.length + 1; j++) {
        let answer = document.createElement("button");
        answer.className = "answer";
        if (j === x) {
            answer.innerHTML = choices[i].correct_answer;
        }
        else{
            answer.innerHTML = choices[i].incorrect_answers[k]; k++;
        }
        answer.addEventListener("click", function () {
            if (j === x) {
                score += 1;
            }
            answer.style.backgroundColor = "orange";
            document.getElementsByClassName("answer")[x + totalChoices].style.backgroundColor = "green";
            totalChoices += choices[i].incorrect_answers.length + 1;
            myQuestion.style.opacity = "0.4";
            myQuestion.style.pointerEvents = "none";
            questionStart(i+1);
        });
        answers.appendChild(answer);
    }
    if (timerID){clearTimeout(timerID);}
    function updateTimer() {
        timerDisplay.textContent = timeLeft;
        let progress = (timeLeft / 10) * totalLength;
        progressCircle.style.strokeDashoffset = totalLength - progress;

        if (timeLeft > 0) {
            timeLeft--;
            timerID = setTimeout(updateTimer, 1000);
        }
        else {
            myQuestion.style.opacity = "0.25";
            myQuestion.style.pointerEvents = "none";
            questionStart(i+1);
        }
    }
    updateTimer();
    window.scrollTo({
        top: document.body.scrollHeight - (window.innerHeight-50),
        behavior: "smooth"
    });

}