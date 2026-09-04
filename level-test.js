
/* ==========================================
   ENGLISH PRACTICE - ENGLISH LEVEL TEST
   ========================================== */

var questions = [
    {
        level: "A1",
        category: "A1 - Basic Grammar",
        question: "My sister ___ 14 years old.",
        answers: ["am", "is", "are", "be"],
        correct: 1,
        explanation: "We use 'is' with he, she and it."
    },
    {
        level: "A1",
        category: "A1 - Basic Vocabulary",
        question: "I usually have breakfast ___ 8 o'clock.",
        answers: ["in", "on", "at", "from"],
        correct: 2,
        explanation: "We use 'at' with specific times."
    },
    {
        level: "A1",
        category: "A1 - Basic Grammar",
        question: "They ___ football every Saturday.",
        answers: ["plays", "playing", "play", "played"],
        correct: 2,
        explanation: "With 'they', we use the base form 'play' in the present simple."
    },

    {
        level: "A2",
        category: "A2 - Grammar",
        question: "I ___ to London three times last year.",
        answers: ["go", "went", "have gone", "am going"],
        correct: 1,
        explanation: "We use the past simple for completed actions at a finished time in the past."
    },
    {
        level: "A2",
        category: "A2 - Grammar",
        question: "There aren't ___ apples left.",
        answers: ["much", "many", "a little", "any of"],
        correct: 1,
        explanation: "Apples are countable and plural, so we use 'many'."
    },
    {
        level: "A2",
        category: "A2 - Vocabulary",
        question: "Can you ___ me your phone for a minute?",
        answers: ["borrow", "lend", "take", "owe"],
        correct: 1,
        explanation: "'Lend' means to give something temporarily to another person."
    },

    {
        level: "B1",
        category: "B1 - Grammar",
        question: "If I ___ more free time, I would learn another language.",
        answers: ["have", "had", "will have", "would have"],
        correct: 1,
        explanation: "The second conditional uses the past simple after 'if'."
    },
    {
        level: "B1",
        category: "B1 - Phrasal Verbs",
        question: "We had to ___ the meeting because the manager was ill.",
        answers: ["put off", "put up", "put out", "put on"],
        correct: 0,
        explanation: "'Put off' means to postpone something."
    },
    {
        level: "B1",
        category: "B1 - Grammar",
        question: "I've lived here ___ 2021.",
        answers: ["for", "since", "during", "from"],
        correct: 1,
        explanation: "We use 'since' with the starting point of an action or situation."
    },

    {
        level: "B2",
        category: "B2 - Grammar",
        question: "By the time we arrived, the film ___.",
        answers: [
            "already started",
            "has already started",
            "had already started",
            "was already starting"
        ],
        correct: 2,
        explanation: "The past perfect shows that one past action happened before another past action."
    },
    {
        level: "B2",
        category: "B2 - Vocabulary",
        question: "The company needs to ___ its environmental impact.",
        answers: ["reduce", "lower down", "decrease off", "take down"],
        correct: 0,
        explanation: "'Reduce' is the natural verb used with 'environmental impact'."
    },
    {
        level: "B2",
        category: "B2 - Collocations",
        question: "She made a ___ decision to leave the company.",
        answers: ["strong", "heavy", "firm", "powerful"],
        correct: 2,
        explanation: "'Make a firm decision' is a common English collocation."
    },

    {
        level: "C1",
        category: "C1 - Grammar",
        question: "Had I known about the problem, I ___ you earlier.",
        answers: [
            "would tell",
            "would have told",
            "will have told",
            "had told"
        ],
        correct: 1,
        explanation: "This is an inverted third conditional."
    },
    {
        level: "C1",
        category: "C1 - Vocabulary",
        question: "The report provides a ___ analysis of the situation.",
        answers: [
            "thorough",
            "thoroughly",
            "through",
            "thoroughness"
        ],
        correct: 0,
        explanation: "'Thorough' is the adjective meaning complete and detailed."
    },

    {
        level: "C2",
        category: "C2 - Advanced Grammar",
        question: "Rarely ___ such a remarkable performance.",
        answers: [
            "I have seen",
            "have I seen",
            "I saw",
            "did I have seen"
        ],
        correct: 1,
        explanation: "After 'rarely', we use subject-auxiliary inversion."
    }
];


/* ==========================================
   ELEMENTS
   ========================================== */

var startScreen = document.getElementById("startScreen");
var questionScreen = document.getElementById("questionScreen");
var resultScreen = document.getElementById("resultScreen");

var startTestButton = document.getElementById("startTestButton");
var nextQuestionButton = document.getElementById("nextQuestionButton");
var restartTestButton = document.getElementById("restartTestButton");

var questionCounter = document.getElementById("questionCounter");
var questionScore = document.getElementById("questionScore");
var testProgressFill = document.getElementById("testProgressFill");

var questionCategory = document.getElementById("questionCategory");
var questionText = document.getElementById("questionText");
var answerContainer = document.getElementById("answerContainer");

var feedback = document.getElementById("feedback");
var feedbackTitle = document.getElementById("feedbackTitle");
var feedbackText = document.getElementById("feedbackText");

var estimatedLevel = document.getElementById("estimatedLevel");
var finalScore = document.getElementById("finalScore");
var resultDescription = document.getElementById("resultDescription");
var practiceLevelButton = document.getElementById("practiceLevelButton");


/* ==========================================
   VARIABLES
   ========================================== */

var currentQuestion = 0;
var score = 0;
var answered = false;


/* ==========================================
   START TEST
   ========================================== */

startTestButton.onclick = function () {

    currentQuestion = 0;
    score = 0;
    answered = false;

    startScreen.classList.add("hidden-level");
    resultScreen.classList.add("hidden-level");
    questionScreen.classList.remove("hidden-level");

    showQuestion();
};


/* ==========================================
   SHOW QUESTION
   ========================================== */

function showQuestion() {

    var question = questions[currentQuestion];

    answered = false;

    questionCounter.textContent =
        "Question " + (currentQuestion + 1) + " / " + questions.length;

    questionScore.textContent =
        score + " correct";

    var progress =
        (currentQuestion / questions.length) * 100;

    testProgressFill.style.width = progress + "%";

    questionCategory.textContent = question.category;
    questionText.textContent = question.question;

    answerContainer.innerHTML = "";

    feedback.classList.add("hidden-level");
    feedback.classList.remove(
        "correct-feedback",
        "wrong-feedback"
    );

    nextQuestionButton.classList.add("hidden-level");

    for (var i = 0; i < question.answers.length; i++) {

        createAnswerButton(question.answers[i], i);
    }
}


/* ==========================================
   CREATE ANSWER BUTTON
   ========================================== */

function createAnswerButton(answer, index) {

    var button = document.createElement("button");

    button.className = "level-answer";
    button.textContent = answer;

    button.onclick = function () {
        selectAnswer(index, button);
    };

    answerContainer.appendChild(button);
}


/* ==========================================
   SELECT ANSWER
   ========================================== */

function selectAnswer(selectedIndex, selectedButton) {

    if (answered === true) {
        return;
    }

    answered = true;

    var question = questions[currentQuestion];

    var allButtons =
        answerContainer.querySelectorAll(".level-answer");

    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.add("disabled");
    }

    if (selectedIndex === question.correct) {

        score = score + 1;

        selectedButton.classList.add("correct");

        feedbackTitle.textContent = "Correct!";
        feedbackText.textContent = question.explanation;

        feedback.classList.add("correct-feedback");

    } else {

        selectedButton.classList.add("wrong");

        allButtons[question.correct].classList.add("correct");

        feedbackTitle.textContent = "Not quite.";

        feedbackText.textContent =
            "The correct answer is \"" +
            question.answers[question.correct] +
            "\". " +
            question.explanation;

        feedback.classList.add("wrong-feedback");
    }

    feedback.classList.remove("hidden-level");

    questionScore.textContent =
        score + " correct";

    nextQuestionButton.classList.remove("hidden-level");
}


/* ==========================================
   NEXT QUESTION
   ========================================== */

nextQuestionButton.onclick = function () {

    currentQuestion = currentQuestion + 1;

    if (currentQuestion >= questions.length) {

        showResult();

    } else {

        showQuestion();
    }
};


/* ==========================================
   CALCULATE LEVEL
   ========================================== */

function calculateLevel() {

    if (score <= 3) {
        return "A1";
    }

    if (score <= 6) {
        return "A2";
    }

    if (score <= 9) {
        return "B1";
    }

    if (score <= 12) {
        return "B2";
    }

    if (score <= 14) {
        return "C1";
    }

    return "C2";
}


/* ==========================================
   SHOW RESULT
   ========================================== */

function showResult() {

    questionScreen.classList.add("hidden-level");
    resultScreen.classList.remove("hidden-level");

    var level = calculateLevel();

    estimatedLevel.textContent = level;

    finalScore.textContent =
        score + "/" + questions.length;

    var descriptions = {

        A1: "Your result suggests that A1 is a good starting point. Focus on basic grammar, everyday vocabulary and simple sentences.",

        A2: "Your result suggests that A2 is a good starting point. Practise everyday grammar, vocabulary and common expressions.",

        B1: "Your result suggests that B1 is a good starting point. Build confidence with intermediate grammar, vocabulary and communication.",

        B2: "Your result suggests that B2 is a good starting point. Focus on complex grammar, vocabulary, collocations and exam-style English.",

        C1: "Your result suggests that C1 is a good starting point. Challenge yourself with advanced grammar, vocabulary and precise language use.",

        C2: "Your result suggests that you are ready to challenge yourself with highly advanced English."
    };

    resultDescription.textContent =
        descriptions[level];

if (level === "B2") {

    practiceLevelButton.textContent =
        "Practise B2 →";

    practiceLevelButton.href =
        "index.html";

} else {

    practiceLevelButton.textContent =
        "Back to English Practice";

    practiceLevelButton.href =
        "index.html";
}

    testProgressFill.style.width = "100%";
}


/* ==========================================
   RESTART TEST
   ========================================== */

restartTestButton.onclick = function () {

    currentQuestion = 0;
    score = 0;
    answered = false;

    resultScreen.classList.add("hidden-level");
    questionScreen.classList.add("hidden-level");
    startScreen.classList.remove("hidden-level");

    testProgressFill.style.width = "0%";
};


