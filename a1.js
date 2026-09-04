var questions = [

    {
        category: "Grammar",
        question: "I ___ a student.",
        answers: ["am", "is", "are", "be"],
        correct: 0,
        explanation: "With 'I', we use 'am'."
    },

    {
        category: "Grammar",
        question: "She ___ from Spain.",
        answers: ["am", "are", "is", "be"],
        correct: 2,
        explanation: "With 'she', we use 'is'."
    },

    {
        category: "Grammar",
        question: "They ___ my friends.",
        answers: ["is", "am", "are", "be"],
        correct: 2,
        explanation: "With 'they', we use 'are'."
    },

    {
        category: "Grammar",
        question: "He ___ a car.",
        answers: ["have", "has", "having", "haves"],
        correct: 1,
        explanation: "With 'he', we use 'has'."
    },

    {
        category: "Grammar",
        question: "We ___ English every day.",
        answers: ["study", "studies", "studying", "studied"],
        correct: 0,
        explanation: "With 'we', we use the base form 'study'."
    },

    {
        category: "Grammar",
        question: "My brother ___ football on Sundays.",
        answers: ["play", "plays", "playing", "played"],
        correct: 1,
        explanation: "With 'he', we normally add -s in the present simple."
    },

    {
        category: "Grammar",
        question: "There ___ a book on the table.",
        answers: ["are", "am", "is", "be"],
        correct: 2,
        explanation: "We use 'there is' with one singular thing."
    },

    {
        category: "Grammar",
        question: "I ___ like coffee.",
        answers: ["don't", "doesn't", "not", "amn't"],
        correct: 0,
        explanation: "With 'I', the negative is 'don't'."
    },


    {
        category: "Vocabulary",
        question: "You use a ___ to write.",
        answers: ["pen", "chair", "door", "shoe"],
        correct: 0,
        explanation: "A pen is used for writing."
    },

    {
        category: "Vocabulary",
        question: "The opposite of 'big' is ___.",
        answers: ["long", "small", "fast", "high"],
        correct: 1,
        explanation: "The opposite of 'big' is 'small'."
    },

    {
        category: "Vocabulary",
        question: "You sleep in a ___.",
        answers: ["kitchen", "bathroom", "bedroom", "garden"],
        correct: 2,
        explanation: "You normally sleep in a bedroom."
    },

    {
        category: "Vocabulary",
        question: "A doctor works in a ___.",
        answers: ["hospital", "school", "bank", "restaurant"],
        correct: 0,
        explanation: "Doctors commonly work in hospitals."
    },

    {
        category: "Vocabulary",
        question: "You wear these on your feet.",
        answers: ["gloves", "hat", "shoes", "shirt"],
        correct: 2,
        explanation: "Shoes are worn on your feet."
    },

    {
        category: "Vocabulary",
        question: "The opposite of 'hot' is ___.",
        answers: ["warm", "cold", "easy", "dark"],
        correct: 1,
        explanation: "The opposite of 'hot' is 'cold'."
    },

    {
        category: "Vocabulary",
        question: "You can buy food at a ___.",
        answers: ["supermarket", "library", "station", "hospital"],
        correct: 0,
        explanation: "A supermarket sells food."
    },

    {
        category: "Vocabulary",
        question: "A person who teaches students is a ___.",
        answers: ["doctor", "teacher", "driver", "farmer"],
        correct: 1,
        explanation: "A teacher teaches students."
    },


    {
        category: "Phrasal Verbs",
        question: "Please ___ the light. It's dark.",
        answers: ["turn on", "turn off", "look after", "get up"],
        correct: 0,
        explanation: "'Turn on' means to switch something on."
    },

    {
        category: "Phrasal Verbs",
        question: "Please ___ the TV. I'm going to bed.",
        answers: ["turn on", "turn off", "get up", "sit down"],
        correct: 1,
        explanation: "'Turn off' means to switch something off."
    },

    {
        category: "Phrasal Verbs",
        question: "I ___ at 7 o'clock every morning.",
        answers: ["get up", "turn off", "look for", "sit down"],
        correct: 0,
        explanation: "'Get up' means to leave your bed."
    },

    {
        category: "Phrasal Verbs",
        question: "I'm ___ my keys. I can't find them.",
        answers: ["getting up", "looking for", "turning on", "sitting down"],
        correct: 1,
        explanation: "'Look for' means to try to find something."
    },

    {
        category: "Phrasal Verbs",
        question: "Please ___ and have a seat.",
        answers: ["sit down", "get up", "turn off", "look for"],
        correct: 0,
        explanation: "'Sit down' means to take a seat."
    },

    {
        category: "Phrasal Verbs",
        question: "Can you ___ the music? I can't hear it.",
        answers: ["turn up", "turn off", "get up", "look for"],
        correct: 0,
        explanation: "'Turn up' means to increase the volume."
    },


    {
        category: "Collocations",
        question: "___ breakfast",
        answers: ["do", "have", "make", "take"],
        correct: 1,
        explanation: "We say 'have breakfast'."
    },

    {
        category: "Collocations",
        question: "___ a shower",
        answers: ["have", "do", "make", "go"],
        correct: 0,
        explanation: "We say 'have a shower'."
    },

    {
        category: "Collocations",
        question: "___ football",
        answers: ["do", "play", "make", "have"],
        correct: 1,
        explanation: "We say 'play football'."
    },

    {
        category: "Collocations",
        question: "___ homework",
        answers: ["make", "do", "play", "have"],
        correct: 1,
        explanation: "We say 'do homework'."
    },

    {
        category: "Collocations",
        question: "___ a photo",
        answers: ["take", "do", "play", "go"],
        correct: 0,
        explanation: "We say 'take a photo'."
    },

    {
        category: "Collocations",
        question: "___ to school",
        answers: ["go", "make", "do", "take"],
        correct: 0,
        explanation: "We say 'go to school'."
    },


    {
        category: "Word Formation",
        question: "I am from Spain. I am ___.",
        answers: ["Spain", "Spanish", "Spainer", "Spainish"],
        correct: 1,
        explanation: "The adjective for Spain is 'Spanish'."
    },

    {
        category: "Word Formation",
        question: "She is from France. She is ___.",
        answers: ["France", "French", "Franch", "Frenchish"],
        correct: 1,
        explanation: "The adjective for France is 'French'."
    },

    {
        category: "Word Formation",
        question: "He comes from Italy. He is ___.",
        answers: ["Italy", "Italian", "Italish", "Italier"],
        correct: 1,
        explanation: "The adjective for Italy is 'Italian'."
    },

    {
        category: "Word Formation",
        question: "They come from Germany. They are ___.",
        answers: ["German", "Germany", "Germish", "Germans"],
        correct: 0,
        explanation: "The nationality adjective is 'German'."
    },

    {
        category: "Word Formation",
        question: "She is from Brazil. She is ___.",
        answers: ["Brazilian", "Brazilish", "Brazil", "Braziler"],
        correct: 0,
        explanation: "The nationality adjective is 'Brazilian'."
    },


    {
        category: "Open Cloze",
        question: "My name ___ Jack.",
        answers: ["is", "are", "am", "be"],
        correct: 0,
        explanation: "With 'my name', we use 'is'."
    },

    {
        category: "Open Cloze",
        question: "I live ___ Spain.",
        answers: ["at", "on", "in", "to"],
        correct: 2,
        explanation: "We use 'in' with countries."
    },

    {
        category: "Open Cloze",
        question: "She goes ___ school every morning.",
        answers: ["to", "at", "in", "on"],
        correct: 0,
        explanation: "We say 'go to school'."
    },

    {
        category: "Open Cloze",
        question: "There are two books ___ the table.",
        answers: ["on", "at", "to", "in"],
        correct: 0,
        explanation: "We use 'on' when something is on a surface."
    },

    {
        category: "Open Cloze",
        question: "I get up ___ seven o'clock.",
        answers: ["in", "on", "at", "to"],
        correct: 2,
        explanation: "We use 'at' with specific times."
    },


    {
        category: "Mixed Practice",
        question: "Choose the correct sentence.",
        answers: [
            "He are happy.",
            "He is happy.",
            "He am happy.",
            "He be happy."
        ],
        correct: 1,
        explanation: "'He is happy' is correct."
    },

    {
        category: "Mixed Practice",
        question: "I ___ two brothers.",
        answers: ["has", "have", "having", "am have"],
        correct: 1,
        explanation: "With 'I', we use 'have'."
    },

    {
        category: "Mixed Practice",
        question: "What do you use to cut paper?",
        answers: ["Scissors", "Shoes", "Pillows", "Glasses"],
        correct: 0,
        explanation: "We use scissors to cut paper."
    },

    {
        category: "Mixed Practice",
        question: "We ___ dinner at 8 o'clock.",
        answers: ["have", "has", "having", "haves"],
        correct: 0,
        explanation: "With 'we', we use 'have'."
    },

    {
        category: "Mixed Practice",
        question: "The opposite of 'old' is ___.",
        answers: ["young", "long", "slow", "small"],
        correct: 0,
        explanation: "The opposite of 'old' is 'young'."
    },

    {
        category: "Mixed Practice",
        question: "Can you ___ the door, please?",
        answers: ["open", "opens", "opening", "opened"],
        correct: 0,
        explanation: "After 'can', we use the base form 'open'."
    },

    {
        category: "Mixed Practice",
        question: "My mother ___ coffee every morning.",
        answers: ["drink", "drinks", "drinking", "drank"],
        correct: 1,
        explanation: "With 'my mother', we use 'drinks'."
    },

    {
        category: "Mixed Practice",
        question: "Where do you ___?",
        answers: ["live", "lives", "living", "lived"],
        correct: 0,
        explanation: "After 'do', we use the base form 'live'."
    },

    {
        category: "Mixed Practice",
        question: "I am tired. I want to ___.",
        answers: ["sleep", "sleeping", "sleeps", "slept"],
        correct: 0,
        explanation: "After 'want to', we use the base form 'sleep'."
    },

    {
        category: "Mixed Practice",
        question: "What is the opposite of 'easy'?",
        answers: ["small", "difficult", "young", "short"],
        correct: 1,
        explanation: "The opposite of 'easy' is 'difficult'."
    }

];


var selectedCategory = "Mixed Practice";
var selectedLength = 10;

var currentQuestions = [];
var currentQuestion = 0;
var score = 0;
var answered = false;


var practiceCards =
    document.querySelectorAll(".practice-card");

var lengthButtons =
    document.querySelectorAll(".length-button");

var startPracticeButton =
    document.getElementById("startPracticeButton");

var quizScreen =
    document.getElementById("quizScreen");

var resultsScreen =
    document.getElementById("resultsScreen");

var questionElement =
    document.getElementById("question");

var answersElement =
    document.getElementById("answers");

var feedbackElement =
    document.getElementById("feedback");

var nextButton =
    document.getElementById("nextButton");

var questionNumber =
    document.getElementById("questionNumber");

var progressText =
    document.getElementById("progressText");

var progressBar =
    document.getElementById("progressBar");

var scoreElement =
    document.getElementById("score");

var accuracyElement =
    document.getElementById("accuracy");

var correctAnswersElement =
    document.getElementById("correctAnswers");

var totalQuestionsElement =
    document.getElementById("totalQuestions");

var retryButton =
    document.getElementById("retryButton");

var choosePracticeButton =
    document.getElementById("choosePracticeButton");


practiceCards.forEach(function(card) {

    card.addEventListener("click", function() {

        practiceCards.forEach(function(item) {
            item.classList.remove("selected");
        });

        card.classList.add("selected");

        selectedCategory =
            card.getAttribute("data-category");

    });

});


lengthButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        lengthButtons.forEach(function(item) {
            item.classList.remove("selected");
        });

        button.classList.add("selected");

        selectedLength =
            parseInt(button.getAttribute("data-length"));

    });

});


function shuffle(array) {

    var shuffled = array.slice();

    for (var i = shuffled.length - 1; i > 0; i--) {

        var j =
            Math.floor(Math.random() * (i + 1));

        var temp = shuffled[i];

        shuffled[i] = shuffled[j];

        shuffled[j] = temp;

    }

    return shuffled;

}


startPracticeButton.addEventListener("click", function() {

    var filteredQuestions;

    if (selectedCategory === "Mixed Practice") {

        filteredQuestions = questions.slice();

    } else {

        filteredQuestions =
            questions.filter(function(question) {
                return question.category === selectedCategory;
            });

    }


    currentQuestions =
        shuffle(filteredQuestions).slice(0, selectedLength);


    if (currentQuestions.length === 0) {

        alert("No questions available for this category.");

        return;

    }


    currentQuestion = 0;
    score = 0;
    answered = false;


    document.querySelector(".practice-section").style.display = "none";

    document.querySelector(".quiz-length-section").style.display = "none";

    document.querySelector(".start-section").style.display = "none";


    resultsScreen.style.display = "none";

    quizScreen.style.display = "block";


    showQuestion();

});


function showQuestion() {

    var question =
        currentQuestions[currentQuestion];

    answered = false;

    feedbackElement.innerHTML = "";

    feedbackElement.className = "feedback";

    nextButton.style.display = "none";


    questionNumber.textContent =
        "Question " + (currentQuestion + 1);

    progressText.textContent =
        (currentQuestion + 1) +
        " / " +
        currentQuestions.length;


    progressBar.style.width =
        ((currentQuestion + 1) /
        currentQuestions.length * 100) + "%";


    questionElement.textContent =
        question.question;


    answersElement.innerHTML = "";


    question.answers.forEach(function(answer, index) {

        var button =
            document.createElement("button");

        button.className =
            "answer-button";

        button.textContent =
            answer;

        button.addEventListener("click", function() {

            selectAnswer(index);

        });

        answersElement.appendChild(button);

    });

}


function selectAnswer(index) {

    if (answered) {
        return;
    }

    answered = true;


    var question =
        currentQuestions[currentQuestion];

    var answerButtons =
        answersElement.querySelectorAll(".answer-button");


    answerButtons.forEach(function(button) {

        button.disabled = true;

    });


    if (index === question.correct) {

        score++;

        answerButtons[index].classList.add("correct");

        feedbackElement.className =
            "feedback correct-feedback";

        feedbackElement.innerHTML =
            "<strong>Correct!</strong><br>" +
            question.explanation;

    } else {

        answerButtons[index].classList.add("incorrect");

        answerButtons[question.correct]
            .classList.add("correct");

        feedbackElement.className =
            "feedback incorrect-feedback";

        feedbackElement.innerHTML =
            "<strong>Not quite.</strong><br>" +
            question.explanation;

    }


    nextButton.style.display =
        "inline-flex";

}


nextButton.addEventListener("click", function() {

    currentQuestion++;


    if (currentQuestion >= currentQuestions.length) {

        showResults();

    } else {

        showQuestion();

    }

});


function showResults() {

    quizScreen.style.display = "none";

    resultsScreen.style.display = "block";


    var total =
        currentQuestions.length;

    var accuracy =
        Math.round((score / total) * 100);


    scoreElement.textContent =
        score + " / " + total;

    accuracyElement.textContent =
        "Accuracy: " + accuracy + "%";

    correctAnswersElement.textContent =
        score;

    totalQuestionsElement.textContent =
        total;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


retryButton.addEventListener("click", function() {

    resultsScreen.style.display = "none";

    quizScreen.style.display = "block";

    currentQuestion = 0;

    score = 0;

    answered = false;

    startPracticeButton.click();

});


choosePracticeButton.addEventListener("click", function() {

    resultsScreen.style.display = "none";

    quizScreen.style.display = "none";


    document.querySelector(".practice-section").style.display = "block";

    document.querySelector(".quiz-length-section").style.display = "block";

    document.querySelector(".start-section").style.display = "block";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});