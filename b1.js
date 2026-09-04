var questions = [

    {
        category: "Grammar",
        question: "If I _____ enough money, I would buy a new laptop.",
        answers: ["have", "had", "will have", "would have"],
        correct: 1,
        explanation: "The second conditional uses past simple after 'if' and 'would' in the result."
    },

    {
        category: "Grammar",
        question: "She _____ to London three times this year.",
        answers: ["has been", "was", "went", "is going"],
        correct: 0,
        explanation: "We use the present perfect for experiences or actions in an unfinished time period."
    },

    {
        category: "Grammar",
        question: "You _____ wear a seat belt when you are in a car.",
        answers: ["should", "might", "could", "would"],
        correct: 0,
        explanation: "'Should' is used to give advice or say what is a good idea."
    },

    {
        category: "Grammar",
        question: "When I arrived, they _____ dinner.",
        answers: ["have", "were having", "are having", "had"],
        correct: 1,
        explanation: "Past continuous describes an action that was in progress when another past action happened."
    },

    {
        category: "Grammar",
        question: "This book _____ by millions of people every year.",
        answers: ["reads", "is read", "is reading", "read"],
        correct: 1,
        explanation: "We use the present simple passive: 'is + past participle'."
    },

    {
        category: "Grammar",
        question: "I haven't seen Tom _____ last summer.",
        answers: ["for", "since", "during", "from"],
        correct: 1,
        explanation: "We use 'since' with a specific point in time."
    },

    {
        category: "Vocabulary",
        question: "I was very _____ when I passed my driving test.",
        answers: ["disappointed", "delighted", "worried", "confused"],
        correct: 1,
        explanation: "'Delighted' means extremely pleased or happy."
    },

    {
        category: "Vocabulary",
        question: "Could you _____ me a favour?",
        answers: ["make", "give", "do", "take"],
        correct: 2,
        explanation: "The correct collocation is 'do someone a favour'."
    },

    {
        category: "Vocabulary",
        question: "The opposite of 'generous' is _____",
        answers: ["selfish", "friendly", "patient", "honest"],
        correct: 0,
        explanation: "A selfish person is unwilling to give or share with others."
    },

    {
        category: "Vocabulary",
        question: "I need to _____ a decision before Friday.",
        answers: ["make", "do", "take", "have"],
        correct: 0,
        explanation: "The correct collocation is 'make a decision'."
    },

    {
        category: "Vocabulary",
        question: "The hotel was _____ located near the city centre.",
        answers: ["conveniently", "carefully", "luckily", "strongly"],
        correct: 0,
        explanation: "'Conveniently located' means situated in a useful or easy-to-reach place."
    },

    {
        category: "Vocabulary",
        question: "I don't _____ with you. I think you're wrong.",
        answers: ["agree", "accept", "allow", "believe"],
        correct: 0,
        explanation: "The correct expression is 'agree with someone'."
    },

    {
        category: "Phrasal Verbs",
        question: "Please _____ your shoes before entering the house.",
        answers: ["take off", "take up", "take after", "take over"],
        correct: 0,
        explanation: "'Take off' means to remove something you are wearing."
    },

    {
        category: "Phrasal Verbs",
        question: "I need to _____ my little brother after school.",
        answers: ["look for", "look after", "look up", "look into"],
        correct: 1,
        explanation: "'Look after' means to take care of someone."
    },

    {
        category: "Phrasal Verbs",
        question: "The plane _____ at 8:30 this morning.",
        answers: ["took off", "took up", "took after", "took in"],
        correct: 0,
        explanation: "'Take off' is used when an aircraft leaves the ground."
    },

    {
        category: "Phrasal Verbs",
        question: "We have _____ milk, so we need to go shopping.",
        answers: ["run out of", "run into", "run over", "run away"],
        correct: 0,
        explanation: "'Run out of' means to have no more of something."
    },

    {
        category: "Phrasal Verbs",
        question: "I _____ an old friend while I was shopping.",
        answers: ["came across", "came up", "came out", "came over"],
        correct: 0,
        explanation: "'Come across' means to find or meet someone or something unexpectedly."
    },

    {
        category: "Collocations",
        question: "You should _____ attention to what the teacher says.",
        answers: ["make", "do", "pay", "give"],
        correct: 2,
        explanation: "The correct collocation is 'pay attention'."
    },

    {
        category: "Collocations",
        question: "I need to _____ a break. I'm exhausted.",
        answers: ["do", "make", "take", "give"],
        correct: 2,
        explanation: "The correct collocation is 'take a break'."
    },

    {
        category: "Collocations",
        question: "We had _____ rain during our holiday.",
        answers: ["heavy", "strong", "big", "hard"],
        correct: 0,
        explanation: "The natural collocation is 'heavy rain'."
    },

    {
        category: "Collocations",
        question: "He has a very _____ memory.",
        answers: ["strong", "heavy", "large", "hard"],
        correct: 0,
        explanation: "'Have a strong memory' is the natural collocation."
    },

    {
        category: "Collocations",
        question: "It was a _____ mistake, but fortunately nobody was hurt.",
        answers: ["serious", "deep", "strong", "heavy"],
        correct: 0,
        explanation: "'Serious mistake' is the correct collocation."
    },

    {
        category: "Word Formation",
        question: "The film was very _____ and I couldn't stop watching it. (INTEREST)",
        answers: ["interesting", "interested", "interest", "interestingly"],
        correct: 0,
        explanation: "'Interesting' describes something that creates interest."
    },

    {
        category: "Word Formation",
        question: "She answered the question very _____. (CONFIDENT)",
        answers: ["confidence", "confident", "confidently", "confidential"],
        correct: 2,
        explanation: "We need an adverb because it describes how she answered."
    },

    {
        category: "Word Formation",
        question: "His _____ surprised everyone. (DECIDE)",
        answers: ["decisive", "decision", "deciding", "decided"],
        correct: 1,
        explanation: "The noun form of 'decide' is 'decision'."
    },

    {
        category: "Word Formation",
        question: "It is _____ to drive without a licence. (LEGAL)",
        answers: ["illegal", "illegally", "illegality", "legal"],
        correct: 0,
        explanation: "The prefix 'il-' creates the opposite of 'legal'."
    },

    {
        category: "Word Formation",
        question: "We were very _____ by the quality of the hotel. (IMPRESS)",
        answers: ["impressive", "impressed", "impression", "impressively"],
        correct: 1,
        explanation: "'Impressed' describes how people feel about something."
    },

    {
        category: "Open Cloze",
        question: "I've lived here _____ 2020.",
        answers: ["since", "for", "during", "from"],
        correct: 0,
        explanation: "Use 'since' with a specific year or point in time."
    },

    {
        category: "Open Cloze",
        question: "I'm looking _____ my keys. Have you seen them?",
        answers: ["for", "at", "after", "on"],
        correct: 0,
        explanation: "The phrasal verb is 'look for', meaning search for something."
    },

    {
        category: "Open Cloze",
        question: "There aren't _____ apples left in the fridge.",
        answers: ["much", "many", "a little", "any of"],
        correct: 1,
        explanation: "'Apples' is countable and plural, so we use 'many'."
    },

    {
        category: "Open Cloze",
        question: "If it rains tomorrow, we _____ stay at home.",
        answers: ["would", "will", "would have", "had"],
        correct: 1,
        explanation: "The first conditional uses present simple in the if-clause and 'will' in the result."
    },

    {
        category: "Open Cloze",
        question: "I've never _____ such a beautiful place before.",
        answers: ["see", "saw", "seen", "seeing"],
        correct: 2,
        explanation: "After 'have never', we use the past participle: 'seen'."
    },

    {
        category: "Key Word Transformations",
        question: "I started learning English five years ago. (FOR)\n\nI _____ English for five years.",
        answers: [
            "have learned",
            "have been learning",
            "learned",
            "am learning"
        ],
        correct: 1,
        explanation: "Present perfect continuous is natural for an activity that started in the past and continues now."
    },

    {
        category: "Key Word Transformations",
        question: "This car is cheaper than that one. (EXPENSIVE)\n\nThat car is _____ this one.",
        answers: [
            "more expensive than",
            "as expensive as",
            "less expensive than",
            "expensive than"
        ],
        correct: 0,
        explanation: "The opposite comparison is 'more expensive than'."
    },

    {
        category: "Key Word Transformations",
        question: "It isn't necessary to bring food. (HAVE)\n\nYou _____ bring food.",
        answers: [
            "don't have to",
            "mustn't",
            "shouldn't",
            "couldn't"
        ],
        correct: 0,
        explanation: "'Don't have to' means that something is not necessary."
    },

    {
        category: "Key Word Transformations",
        question: "I last saw Maria in June. (SINCE)\n\nI haven't seen Maria _____ June.",
        answers: [
            "for",
            "during",
            "since",
            "from"
        ],
        correct: 2,
        explanation: "Use 'since' with the point in time when the situation started."
    },

    {
        category: "Key Word Transformations",
        question: "Maybe John is at home. (MIGHT)\n\nJohn _____ at home.",
        answers: [
            "must be",
            "might be",
            "should be",
            "has to be"
        ],
        correct: 1,
        explanation: "'Might be' expresses possibility."
    },

    {
        category: "Mixed Practice",
        question: "If I _____ you, I would talk to the teacher.",
        answers: ["am", "was", "were", "would be"],
        correct: 2,
        explanation: "The second conditional commonly uses 'were' after 'if I'."
    },

    {
        category: "Mixed Practice",
        question: "She _____ her homework before she went out.",
        answers: ["has finished", "had finished", "finishes", "was finishing"],
        correct: 1,
        explanation: "Past perfect shows that one past action happened before another past action."
    },

    {
        category: "Mixed Practice",
        question: "I'm really looking _____ to the weekend.",
        answers: ["at", "for", "forward", "after"],
        correct: 2,
        explanation: "The expression is 'look forward to', meaning be excited about something in the future."
    },

    {
        category: "Mixed Practice",
        question: "This is the best restaurant I _____ eaten at.",
        answers: ["have ever", "ever have", "did ever", "was ever"],
        correct: 0,
        explanation: "We use the present perfect with 'ever' to talk about experiences up to now."
    },

    {
        category: "Mixed Practice",
        question: "You look tired. You _____ get some rest.",
        answers: ["should", "mustn't", "can't", "would"],
        correct: 0,
        explanation: "'Should' is used to give advice."
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

var b1Home = document.getElementById("b1Home");
var quizScreen = document.getElementById("quiz");
var resultsScreen = document.getElementById("results");

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
   SELECT PRACTICE CATEGORY
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
            parseInt(button.getAttribute("data-length"));

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

        filteredQuestions = questions.slice();

    } else {

        filteredQuestions = questions.filter(function (question) {
            return question.category === selectedCategory;
        });

    }

    filteredQuestions.sort(function () {
        return Math.random() - 0.5;
    });

    quizQuestions =
        filteredQuestions.slice(0, quizLength);

    b1Home.classList.remove("active");
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
        (currentQuestion + 1) + " / " + quizQuestions.length;

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

    progress.style.width = "100%";

    scoreElement.textContent =
        score + "/" + quizQuestions.length;

    resultQuestions.textContent =
        quizQuestions.length;

    resultCorrect.textContent =
        score;

    var percentage =
        Math.round((score / quizQuestions.length) * 100);

    resultPercentage.textContent =
        percentage + "%";

    if (percentage >= 90) {

        resultMessage.textContent =
            "Excellent work!";

        resultDescription.textContent =
            "You have a very strong understanding of this B1 topic.";

    } else if (percentage >= 70) {

        resultMessage.textContent =
            "Great job!";

        resultDescription.textContent =
            "You have a good understanding of this B1 topic. Keep practising!";

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
    b1Home.classList.add("active");

};


/* ==========================================
   EXIT PRACTICE
   ========================================== */

backButton.onclick = function () {

    quizScreen.classList.remove("active");
    resultsScreen.classList.remove("active");
    b1Home.classList.add("active");

};