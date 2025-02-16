let timerID;
let score = 0;
let totalChoices = 0;

function startQuestions(){
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


const choices = [
    {
        question: "Quel est le plus grand océan du monde ?",
        correct_answer: "Pacifique",
        incorrect_answers: ["Atlantique", "Indien", "Arctique"]
    },
    {
        question: "Qui a peint la Joconde ?",
        correct_answer: "Leonard de Vinci",
        incorrect_answers: ["Vincent Van Gogh", "Pablo Picasso", "Claude Monet"]
    },
    {
        question: "Quelle planète est la plus proche du Soleil ?",
        correct_answer: "Mercure",
        incorrect_answers: ["Mars", "Terre", "Vénus"]
    },
    {
        question: "Quel est l'élément chimique dont le symbole est \"O\" ?",
        correct_answer: "Oxygène",
        incorrect_answers: ["Ozone", "Or", "Osmium"]
    },
    {
        question: "En quelle année la Révolution française a-t-elle commencé ?",
        correct_answer: "1789",
        incorrect_answers: ["1812", "1756", "1804"]
    },
    {
        question: "Qui a écrit Les Misérables ?",
        correct_answer: "Victor Hugo",
        incorrect_answers: ["Emile Zola", "Gustave Flaubert", "Alexandre Dumas"]
    },
    {
        question: "Quelle est la capitale du Canada ?",
        correct_answer: "Ottawa",
        incorrect_answers: ["Toronto", "Montréal", "Québec"]
    },
    {
        question: "Quel est le plus grand désert du monde ?",
        correct_answer: "Antarctique",
        incorrect_answers: ["Sahara", "Gobi", "Arctique"]
    },
    {
        question: "Combien de côtés a un hexagone ?",
        correct_answer: "6",
        incorrect_answers: ["4", "5", "7"]
    },
    {
        question: "Qui a découvert la pénicilline ?",
        correct_answer: "Alexander Fleming",
        incorrect_answers: ["Louis Pasteur", "Marie Curie", "Albert Einstein"]
    }
];

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
    document.getElementsByClassName("questions-count")[i + 1].innerHTML = (i+1) + " / " + choices.length;
    let answers = document.getElementsByClassName("answers")[i + 1];
    document.getElementsByClassName("question")[i + 1].textContent = choices[i].question;
    let timeLeft = 10; // Timer duration in seconds
    const timerDisplay = document.getElementsByClassName("timer")[i + 1];
    const progressCircle = document.getElementsByClassName("progress")[i + 1];
    const totalLength = 2 * Math.PI * 50; // Circumference of the circle
    let x = Math.floor(Math.random() * 4);
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
            answer.style.backgroundColor = "red";
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