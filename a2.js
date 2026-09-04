var questions = [

    {
        category: "Grammar",
        question: "I _____ to school by bus every day.",
        answers: ["go", "goes", "am going", "going"],
        correct: 0,
        explanation: "We use the present simple for regular activities and routines."
    },

    {
        category: "Grammar",
        question: "She _____ TV when I called her.",
        answers: ["watched", "was watching", "watches", "has watched"],
        correct: 1,
        explanation: "We use the past continuous for an action that was happening at a particular moment in the past."
    },

    {
        category: "Grammar",
        question: "There _____ some milk in the fridge.",
        answers: ["are", "is", "be", "were"],
        correct: 1,
        explanation: "'Milk' is uncountable, so we use 'there is'."
    },

    {
        category: "Grammar",
        question: "I _____ my homework yet.",
        answers: ["haven't finished", "didn't finish", "don't finish", "wasn't finishing"],
        correct: 0,
        explanation: "We use the present perfect with 'yet' for something that has not happened up to now."
    },

    {
        category: "Grammar",
        question: "You _____ smoke in this building.",
        answers: ["don't have", "mustn't", "shouldn't to", "can't to"],
        correct: 1,
        explanation: "'Mustn't' means that something is prohibited."
    },

    {
        category: "Grammar",
        question: "My brother is _____ than me.",
        answers: ["tall", "taller", "more tall", "the taller"],
        correct: 1,
        explanation: "We use the comparative form 'taller' when comparing two people or things."
    },

    {
        category: "Vocabulary",
        question: "I'm very _____ because I have an exam tomorrow.",
        answers: ["nervous", "boring", "hungry", "cheap"],
        correct: 0,
        explanation: "'Nervous' means worried or anxious about something."
    },

    {
        category: "Vocabulary",
        question: "Can you _____ me your pen, please?",
        answers: ["borrow", "lend", "take", "bring"],
        correct: 1,
        explanation: "'Lend' means to give something to someone temporarily."
    },

    {
        category: "Vocabulary",
        question: "I usually _____ breakfast at 8 o'clock.",
        answers: ["have", "make", "do", "take"],
        correct: 0,
        explanation: "The common expression is 'have breakfast'."
    },

    {
        category: "Vocabulary",
        question: "The opposite of 'cheap' is _____",
        answers: ["expensive", "easy", "small", "slow"],
        correct: 0,
        explanation: "'Expensive' is the opposite of 'cheap'."
    },

    {
        category: "Vocabulary",
        question: "We need to _____ a hotel room for our holiday.",
        answers: ["book", "borrow", "lend", "miss"],
        correct: 0,
        explanation: "We 'book' a hotel room when we reserve it."
    },

    {
        category: "Vocabulary",
        question: "I forgot my umbrella and got _____ in the rain.",
        answers: ["wet", "dry", "coldly", "soft"],
        correct: 0,
        explanation: "'Wet' means covered or soaked with water."
    },

    {
        category: "Phrasal Verbs",
        question: "Please _____ the lights before you leave.",
        answers: ["turn off", "turn up", "turn into", "turn over"],
        correct: 0,
        explanation: "'Turn off' means to stop a light or machine."
    },

    {
        category: "Phrasal Verbs",
        question: "I usually _____ at 7 o'clock on weekdays.",
        answers: ["get up", "get on", "get over", "get into"],
        correct: 0,
        explanation: "'Get up' means to leave your bed."
    },

    {
        category: "Phrasal Verbs",
        question: "Can you _____ the meaning of this word?",
        answers: ["look up", "look after", "look for", "look out"],
        correct: 0,
        explanation: "'Look up' means to search for information, often in a dictionary."
    },

    {
        category: "Phrasal Verbs",
        question: "We need to _____ the meeting until next week.",
        answers: ["put off", "put on", "put up", "put out"],
        correct: 0,
        explanation: "'Put off' means to delay something."
    },

    {
        category: "Phrasal Verbs",
        question: "Please _____ your jacket. It's cold outside.",
        answers: ["put on", "put off", "put away", "put out"],
        correct: 0,
        explanation: "'Put on' means to place clothes on your body."
    },

    {
        category: "Collocations",
        question: "I usually _____ my homework after school.",
        answers: ["do", "make", "take", "pay"],
        correct: 0,
        explanation: "The correct collocation is 'do homework'."
    },

    {
        category: "Collocations",
        question: "Let's _____ a photo together.",
        answers: ["make", "do", "take", "pay"],
        correct: 2,
        explanation: "The correct collocation is 'take a photo'."
    },

    {
        category: "Collocations",
        question: "I need to _____ an appointment with the doctor.",
        answers: ["make", "do", "take", "give"],
        correct: 0,
        explanation: "The common expression is 'make an appointment'."
    },

    {
        category: "Collocations",
        question: "He _____ a shower every morning.",
        answers: ["does", "takes", "makes", "gets"],
        correct: 1,
        explanation: "The correct expression is 'take a shower'."
    },

    {
        category: "Collocations",
        question: "We had a _____ time at the party.",
        answers: ["great", "strong", "heavy", "hardly"],
        correct: 0,
        explanation: "'Have a great time' is a common English expression."
    },

    {
        category: "Word Formation",
        question: "The film was very _____ . (INTEREST)",
        answers: ["interesting", "interested", "interest", "interestingly"],
        correct: 0,
        explanation: "'Interesting' describes something that creates interest."
    },

    {
        category: "Word Formation",
        question: "I'm really _____ in photography. (INTEREST)",
        answers: ["interesting", "interested", "interest", "interestingly"],
        correct: 1,
        explanation: "'Interested' describes how a person feels about something."
    },

    {
        category: "Word Formation",
        question: "She speaks English very _____. (GOOD)",
        answers: ["good", "well", "better", "best"],
        correct: 1,
        explanation: "We need the adverb 'well' to describe how she speaks."
    },

    {
        category: "Word Formation",
        question: "It was a very _____ day. (BEAUTY)",
        answers: ["beauty", "beautiful", "beautifully", "beautify"],
        correct: 1,
        explanation: "The adjective formed from 'beauty' is 'beautiful'."
    },

    {
        category: "Word Formation",
        question: "He answered the question _____. (CORRECT)",
        answers: ["correct", "correctly", "correction", "correctness"],
        correct: 1,
        explanation: "We need the adverb 'correctly' because it describes how he answered."
    },

    {
        category: "Open Cloze",
        question: "I have lived here _____ three years.",
        answers: ["since", "for", "from", "during"],
        correct: 1,
        explanation: "Use 'for' with a period of time."
    },

    {
        category: "Open Cloze",
        question: "She is good _____ playing tennis.",
        answers: ["at", "in", "on", "for"],
        correct: 0,
        explanation: "The correct expression is 'be good at something'."
    },

    {
        category: "Open Cloze",
        question: "There isn't _____ sugar left.",
        answers: ["many", "much", "a few", "several"],
        correct: 1,
        explanation: "'Sugar' is uncountable, so we use 'much'."
    },

    {
        category: "Open Cloze",
        question: "I went to the shop _____ buy some bread.",
        answers: ["for", "to", "because", "so"],
        correct: 1,
        explanation: "We use 'to + infinitive' to express purpose."
    },

    {
        category: "Open Cloze",
        question: "Have you ever _____ to London?",
        answers: ["be", "been", "being", "was"],
        correct: 1,
        explanation: "The present perfect uses 'have/has + past participle': 'have been'."
    },

    {
        category: "Mixed Practice",
        question: "If it rains tomorrow, we _____ at home.",
        answers: ["stay", "will stay", "stayed", "would stay"],
        correct: 1,
        explanation: "The first conditional uses present simple after 'if' and 'will' in the result."
    },

    {
        category: "Mixed Practice",
        question: "I _____ this book last week.",
        answers: ["buy", "have bought", "bought", "am buying"],
        correct: 2,
        explanation: "We use the past simple with a finished past time such as 'last week'."
    },

    {
        category: "Mixed Practice",
        question: "You look tired. You _____ go to bed earlier.",
        answers: ["should", "mustn't", "can't", "would"],
        correct: 0,
        explanation: "'Should' is used to give advice."
    },

    {
        category: "Mixed Practice",
        question: "My parents have _____ to Italy twice.",
        answers: ["go", "went", "been", "being"],
        correct: 2,
        explanation: "The present perfect uses the past participle 'been' to talk about experiences."
    },

    {
        category: "Mixed Practice",
        question: "This exercise is _____ than the last one.",
        answers: ["easy", "easier", "more easy", "easiest"],
        correct: 1,
        explanation: "The comparative form of 'easy' is 'easier'."
    }

];


/* ==========================================
   VARIABLES
   ========================================== */

var currentQuestion = 0;
var score = 0;
var answered = false;

var selectedCategory = "Mixed Practice";
var quizLength = 10;

var quizQuestions = [];


/* ==========================================
   ELEMENTS
   ========================================== */

var a2Home =
    document.getElementById("a2Home");

var quizScreen =
    document.getElementById("quiz");

var resultsScreen =
    document.getElementById("results");

var startPracticeButton =
    document.getElementById("startPracticeButton");

var answersContainer =
    document.getElementById("answers");

var questionElement =
    document.getElementById("question");

var questionCategory =
    document.getElementById("questionCategory");

var questionNumber =
    document.getElementById("questionNumber");

var totalQuestions =
    document.getElementById("totalQuestions");

var progress =
    document.getElementById("progress");

var feedback =
    document.getElementById("feedback");

var feedbackTitle =
    document.getElementById("feedbackTitle");

var feedbackText =
    document.getElementById("feedbackText");

var nextButton =
    document.getElementById("nextButton");

var backButton =
    document.getElementById("backButton");

var scoreElement =
    document.getElementById("score");

var resultMessage =
    document.getElementById("resultMessage");

var resultDescription =
    document.getElementById("resultDescription");

var resultPercentage =
    document.getElementById("resultPercentage");

var resultCorrect =
    document.getElementById("resultCorrect");

var resultQuestions =
    document.getElementById("resultQuestions");

var retryButton =
    document.getElementById("retryButton");

var practiceAgainButton =
    document.getElementById("practiceAgainButton");

var practiceCards =
    document.querySelectorAll(".practice-card");

var lengthButtons =
    document.querySelectorAll(".length-button");


/* ==========================================
   SELECT CATEGORY
   ========================================== */

practiceCards.forEach(function (card) {

    card.onclick = function () {

        practiceCards.forEach(function (otherCard) {

            otherCard.classList.remove("selected");

        });

        card.classList.add("selected");

        selectedCategory =
            card.getAttribute("data-category");

    };

});


/* ==========================================
   SELECT QUIZ LENGTH
   ========================================== */

lengthButtons.forEach(function (button) {

    button.onclick = function () {

        lengthButtons.forEach(function (otherButton) {

            otherButton.classList.remove("selected");

        });

        button.classList.add("selected");

        quizLength =
            parseInt(
                button.getAttribute("data-length")
            );

    };

});


/* ==========================================
   START PRACTICE
   ========================================== */

startPracticeButton.onclick = function () {

    currentQuestion = 0;
    score = 0;
    answered = false;

    var filteredQuestions;


    if (selectedCategory === "Mixed Practice") {

        filteredQuestions =
            questions.slice();

    } else {

        filteredQuestions =
            questions.filter(function (question) {

                return question.category === selectedCategory;

            });

    }


    filteredQuestions.sort(function () {

        return Math.random() - 0.5;

    });


    quizQuestions =
        filteredQuestions.slice(0, quizLength);


    a2Home.classList.remove("active");

    quizScreen.classList.add("active");

    resultsScreen.classList.remove("active");


    showQuestion();

};


/* ==========================================
   SHOW QUESTION
   ========================================== */

function showQuestion() {

    var question =
        quizQuestions[currentQuestion];

    answered = false;


    questionNumber.textContent =
        "Question " + (currentQuestion + 1);


    totalQuestions.textContent =
        (currentQuestion + 1)
        + " / "
        + quizQuestions.length;


    var progressValue =
        (currentQuestion / quizQuestions.length) * 100;


    progress.style.width =
        progressValue + "%";


    questionCategory.textContent =
        question.category.toUpperCase();


    questionElement.textContent =
        question.question;


    answersContainer.innerHTML = "";


    feedback.classList.add("hidden");

    feedback.classList.remove("correct-feedback");

    feedback.classList.remove("wrong-feedback");


    nextButton.classList.add("hidden");


    question.answers.forEach(function (answer, index) {

        var button =
            document.createElement("button");


        button.className =
            "answer-button";


        button.textContent =
            answer;


        button.onclick = function () {

            checkAnswer(index);

        };


        answersContainer.appendChild(button);

    });

}


/* ==========================================
   CHECK ANSWER
   ========================================== */

function checkAnswer(selectedAnswer) {

    if (answered) {
        return;
    }


    answered = true;


    var question =
        quizQuestions[currentQuestion];


    var answerButtons =
        document.querySelectorAll(".answer-button");


    answerButtons.forEach(function (button, index) {

        button.disabled = true;


        if (index === question.correct) {

            button.classList.add("correct");

        }

    });


    if (selectedAnswer === question.correct) {

        score++;


        feedback.classList.remove("hidden");

        feedback.classList.add("correct-feedback");


        feedbackTitle.textContent =
            "Correct! ✓";


        feedbackText.textContent =
            question.explanation;


    } else {

        answerButtons[selectedAnswer]
            .classList.add("wrong");


        feedback.classList.remove("hidden");

        feedback.classList.add("wrong-feedback");


        feedbackTitle.textContent =
            "Not quite.";


        feedbackText.textContent =
            question.explanation;

    }


    nextButton.classList.remove("hidden");

}


/* ==========================================
   NEXT QUESTION
   ========================================== */

nextButton.onclick = function () {

    currentQuestion++;


    if (currentQuestion >= quizQuestions.length) {

        showResults();

    } else {

        showQuestion();

    }

};


/* ==========================================
   SHOW RESULTS
   ========================================== */

function showResults() {

    quizScreen.classList.remove("active");

    resultsScreen.classList.add("active");


    progress.style.width =
        "100%";


    scoreElement.textContent =
        score + "/" + quizQuestions.length;


    resultQuestions.textContent =
        quizQuestions.length;


    resultCorrect.textContent =
        score;


    var percentage =
        Math.round(
            (score / quizQuestions.length) * 100
        );


    resultPercentage.textContent =
        percentage + "%";


    if (percentage >= 90) {

        resultMessage.textContent =
            "Excellent work!";


        resultDescription.textContent =
            "You have a very strong understanding of this A2 topic.";

    } else if (percentage >= 70) {

        resultMessage.textContent =
            "Great job!";


        resultDescription.textContent =
            "You have a good understanding of this A2 topic. Keep practising!";

    } else if (percentage >= 50) {

        resultMessage.textContent =
            "Good effort!";


        resultDescription.textContent =
            "You are making progress. Practise this area to build more confidence.";

    } else {

        resultMessage.textContent =
            "Keep practising!";


        resultDescription.textContent =
            "Review the explanations and try the practice again.";

    }

}


/* ==========================================
   RETRY
   ========================================== */

retryButton.onclick = function () {

    currentQuestion = 0;
    score = 0;
    answered = false;


    resultsScreen.classList.remove("active");

    quizScreen.classList.add("active");


    startPracticeButton.click();

};


/* ==========================================
   CHOOSE PRACTICE AGAIN
   ========================================== */

practiceAgainButton.onclick = function () {

    resultsScreen.classList.remove("active");

    quizScreen.classList.remove("active");

    a2Home.classList.add("active");

};


/* ==========================================
   EXIT PRACTICE
   ========================================== */

backButton.onclick = function () {

    quizScreen.classList.remove("active");

    resultsScreen.classList.remove("active");

    a2Home.classList.add("active");

};