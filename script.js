// ===============================
// ENGLISH PRACTICE
// ===============================

let selectedCategory = "Mixed Practice";
let selectedLength = 10;

// ===============================
// URL PARAMETERS
// ===============================

const urlParams = new URLSearchParams(window.location.search);
const categoryFromURL = urlParams.get("category");
const coachMode = urlParams.get("coach") === "1";

if (categoryFromURL) {
    selectedCategory = categoryFromURL;
}

// ===============================
// QUIZ STATE
// ===============================

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;


// ===============================
// QUESTION BANK
// ===============================

const questions = [

    // =========================
    // GRAMMAR
    // =========================

    {
        category: "Grammar",
        question: "If I _____ more time, I would learn another language.",
        answers: ["have", "had", "will have", "would have"],
        correct: 1,
        explanation: "The second conditional uses 'if + past simple' followed by 'would + infinitive'."
    },

    {
        category: "Grammar",
        question: "She _____ in London for five years before moving to Madrid.",
        answers: ["has lived", "had lived", "lived", "is living"],
        correct: 1,
        explanation: "The past perfect describes an action that happened before another past action."
    },

    {
        category: "Grammar",
        question: "You _____ have told me earlier. I could have helped you.",
        answers: ["should", "must", "can", "may"],
        correct: 0,
        explanation: "'Should have + past participle' is used when something would have been better to do in the past."
    },

    {
        category: "Grammar",
        question: "By the time we arrived, the film _____.",
        answers: ["already started", "had already started", "has already started", "was already starting"],
        correct: 1,
        explanation: "The past perfect shows that the film started before we arrived."
    },

    {
        category: "Grammar",
        question: "I wish I _____ so much time on my phone yesterday.",
        answers: ["didn't spend", "hadn't spent", "haven't spent", "wouldn't spend"],
        correct: 1,
        explanation: "For regrets about the past, we use 'wish + past perfect'."
    },

    // =========================
    // NEW B2 GRAMMAR QUESTIONS
    // =========================

    {
        category: "Grammar",
        question: "I'd rather ___ at home tonight than go to the party.",
        answers: ["stay", "staying", "to stay", "stayed"],
        correct: 0,
        explanation: "'Would rather + infinitive without to' is used to express a preference about what you or someone else should do."
    },

    {
        category: "Grammar",
        question: "She had her laptop ___ after it stopped working properly.",
        answers: ["repair", "repaired", "repairing", "to repair"],
        correct: 1,
        explanation: "'Have + object + past participle' is used when you arrange for someone else to do a service."
    },

    {
        category: "Grammar",
        question: "I can't afford ___ a new phone at the moment.",
        answers: ["buy", "buying", "to buy", "bought"],
        correct: 2,
        explanation: "'Afford' is followed by the to-infinitive: 'afford to do something'."
    },

    {
        category: "Grammar",
        question: "He apologized for ___ so rude during the meeting.",
        answers: ["be", "being", "to be", "been"],
        correct: 1,
        explanation: "After the preposition 'for', we use the -ing form: 'apologize for being'."
    },

    {
        category: "Grammar",
        question: "The students were made ___ their phones during the exam.",
        answers: ["switch off", "switching off", "to switch off", "switched off"],
        correct: 2,
        explanation: "After the passive form of 'make', we use 'to + infinitive': 'were made to switch off'."
    },

    {
        category: "Grammar",
        question: "I don't remember ___ this book before.",
        answers: ["read", "to read", "reading", "have read"],
        correct: 2,
        explanation: "'Remember + -ing' refers to remembering a past action or experience."
    },

    {
        category: "Grammar",
        question: "Don't forget ___ the lights before you leave.",
        answers: ["turning off", "turn off", "to turn off", "turned off"],
        correct: 2,
        explanation: "'Forget + to-infinitive' means that you fail to remember something you need to do."
    },

    {
        category: "Grammar",
        question: "Not only ___ late, but he also forgot to bring the documents.",
        answers: ["he arrived", "did he arrive", "he did arrive", "arrived he"],
        correct: 1,
        explanation: "When 'not only' begins a sentence, we use inversion: 'Not only did he arrive late, but...'."
    },

    {
        category: "Grammar",
        question: "She couldn't help ___ when she heard the joke.",
        answers: ["laugh", "to laugh", "laughing", "laughed"],
        correct: 2,
        explanation: "'Can't/couldn't help + -ing' means that you cannot stop yourself from doing something."
    },

    {
        category: "Grammar",
        question: "It's no use ___ about something you can't change.",
        answers: ["worry", "to worry", "worrying", "worried"],
        correct: 2,
        explanation: "'It's no use + -ing' means that an action will not be useful or effective."
    },

    {
        category: "Grammar",
        question: "The manager insisted that everyone ___ on time.",
        answers: ["arrives", "arrived", "arrive", "to arrive"],
        correct: 2,
        explanation: "After 'insist that', formal English can use the base form of the verb: 'insisted that everyone arrive'."
    },

    {
        category: "Grammar",
        question: "You'd better ___ an umbrella. It looks like rain.",
        answers: ["take", "to take", "taking", "took"],
        correct: 0,
        explanation: "'Had better + infinitive without to' is used to give strong advice about what someone should do."
    },

    {
        category: "Grammar",
        question: "There is ___ milk left in the fridge, so we need to buy some.",
        answers: ["few", "a few", "little", "a little"],
        correct: 2,
        explanation: "'Little' is used with uncountable nouns and means not much. Here, there is not enough milk."
    },

    {
        category: "Grammar",
        question: "Only ___ students managed to answer the most difficult question.",
        answers: ["little", "a little", "few", "a few"],
        correct: 2,
        explanation: "'Few' is used with plural countable nouns and means not many."
    },

    {
        category: "Grammar",
        question: "Neither of the answers ___ correct.",
        answers: ["are", "were", "is", "have been"],
        correct: 2,
        explanation: "'Neither of' is normally followed by a singular verb in standard English: 'Neither of the answers is correct.'"
    },

    {
        category: "Grammar",
        question: "The woman ___ I spoke to yesterday is my new teacher.",
        answers: ["which", "whose", "who", "where"],
        correct: 2,
        explanation: "'Who' can be used as a relative pronoun for people. In this sentence, it refers to 'the woman'."
    },

    {
        category: "Grammar",
        question: "The restaurant ___ we had dinner last night has closed down.",
        answers: ["which", "where", "who", "whose"],
        correct: 1,
        explanation: "'Where' is used to introduce a relative clause referring to a place."
    },

    {
        category: "Grammar",
        question: "I didn't enjoy the film, and ___ did my brother.",
        answers: ["so", "neither", "either", "nor"],
        correct: 1,
        explanation: "'Neither + auxiliary + subject' is used to agree with a negative statement."
    },

    {
        category: "Grammar",
        question: "She works ___ than anyone else in the team.",
        answers: ["hard", "harder", "more hard", "hardest"],
        correct: 1,
        explanation: "The comparative form 'harder' is used when comparing two or more people or things."
    },

    {
        category: "Grammar",
        question: "The sooner we leave, ___ we'll arrive.",
        answers: ["the early", "earlier", "the earlier", "earliest"],
        correct: 2,
        explanation: "The structure 'the + comparative, the + comparative' shows that one change causes another: 'The sooner..., the earlier...'."
    },

    // =========================
    // VOCABULARY
    // =========================

    {
        category: "Vocabulary",
        question: "The company decided to _____ the meeting until next week.",
        answers: ["put off", "put up", "put out", "put away"],
        correct: 0,
        explanation: "'Put off' means to postpone something."
    },

    {
        category: "Vocabulary",
        question: "The instructions were extremely _____, so everyone understood them.",
        answers: ["vague", "clear", "uncertain", "confusing"],
        correct: 1,
        explanation: "'Clear' means easy to understand."
    },

    {
        category: "Vocabulary",
        question: "After several hours of discussion, they finally reached an _____.",
        answers: ["agreement", "argument", "announcement", "attention"],
        correct: 0,
        explanation: "'Reach an agreement' is a common English expression."
    },

    {
        category: "Vocabulary",
        question: "The hotel offers _____ accommodation at very reasonable prices.",
        answers: ["affordable", "available", "acceptable", "agreeable"],
        correct: 0,
        explanation: "'Affordable' means reasonably priced."
    },

    {
        category: "Vocabulary",
        question: "The scientist made an important _____ during the experiment.",
        answers: ["discovery", "invention", "occasion", "event"],
        correct: 0,
        explanation: "A discovery is something found or learned, especially through research."
    },

    // =========================
    // PHRASAL VERBS
    // =========================

    {
        category: "Phrasal Verbs",
        question: "I can't _____ what he said. Could you repeat it?",
        answers: ["make out", "make up", "make for", "make over"],
        correct: 0,
        explanation: "'Make out' can mean to understand or hear something with difficulty."
    },

    {
        category: "Phrasal Verbs",
        question: "We need to _____ a solution before Friday.",
        answers: ["come up with", "come across", "come into", "come over"],
        correct: 0,
        explanation: "'Come up with' means to think of or produce an idea or solution."
    },

    {
        category: "Phrasal Verbs",
        question: "I came _____ an old photograph while cleaning my room.",
        answers: ["across", "after", "into", "over"],
        correct: 0,
        explanation: "'Come across' means to find something by chance."
    },

    {
        category: "Phrasal Verbs",
        question: "She _____ the invitation because she was too busy.",
        answers: ["turned down", "turned up", "turned into", "turned over"],
        correct: 0,
        explanation: "'Turn down' means to reject or refuse something."
    },

    {
        category: "Phrasal Verbs",
        question: "The meeting was _____ because the manager was ill.",
        answers: ["called off", "called up", "called in", "called on"],
        correct: 0,
        explanation: "'Call off' means to cancel something."
    },

    // =========================
    // COLLOCATIONS
    // =========================

    {
        category: "Collocations",
        question: "He takes great _____ in his work.",
        answers: ["pride", "honour", "respect", "confidence"],
        correct: 0,
        explanation: "The correct collocation is 'take pride in something'."
    },

    {
        category: "Collocations",
        question: "The new policy had a significant _____ on the company.",
        answers: ["effect", "result", "change", "reason"],
        correct: 0,
        explanation: "The common expression is 'have an effect on something'."
    },

    {
        category: "Collocations",
        question: "We need to _____ a decision before Friday.",
        answers: ["do", "make", "take", "create"],
        correct: 1,
        explanation: "The standard collocation is 'make a decision'."
    },

    {
        category: "Collocations",
        question: "She has _____ experience of working with young children.",
        answers: ["strong", "heavy", "wide", "hard"],
        correct: 2,
        explanation: "'Wide experience' is a common collocation meaning experience in many areas."
    },

    {
        category: "Collocations",
        question: "The two companies have a close _____ with each other.",
        answers: ["relationship", "relation", "connection", "contact"],
        correct: 0,
        explanation: "'Have a close relationship with' is the natural collocation."
    },

    // =========================
    // WORD FORMATION
    // =========================

    {
        category: "Word Formation",
        question: "The film was extremely _____. (ENTERTAIN)",
        answers: ["entertain", "entertaining", "entertainment", "entertained"],
        correct: 1,
        explanation: "We need an adjective describing the film: 'entertaining'."
    },

    {
        category: "Word Formation",
        question: "There has been a significant _____ in technology. (IMPROVE)",
        answers: ["improve", "improved", "improvement", "improving"],
        correct: 2,
        explanation: "We need a noun after 'a significant': 'improvement'."
    },

    {
        category: "Word Formation",
        question: "The instructions were rather _____. (CONFUSE)",
        answers: ["confuse", "confusing", "confused", "confusion"],
        correct: 1,
        explanation: "'Confusing' describes something that causes confusion."
    },

    {
        category: "Word Formation",
        question: "His explanation was completely _____. (LOGIC)",
        answers: ["logical", "logically", "logic", "illogicality"],
        correct: 0,
        explanation: "We need an adjective describing the explanation: 'logical'."
    },

    {
        category: "Word Formation",
        question: "The government is trying to reduce _____. (EMPLOY)",
        answers: ["employ", "employee", "employment", "unemployment"],
        correct: 3,
        explanation: "The context requires the noun 'unemployment'."
    },

    // =========================
    // OPEN CLOZE
    // =========================

    {
        category: "Open Cloze",
        question: "I've lived here _____ 2020.",
        answers: ["for", "since", "during", "from"],
        correct: 1,
        explanation: "'Since' is used with a specific point in time."
    },

    {
        category: "Open Cloze",
        question: "I'm looking forward _____ meeting you.",
        answers: ["to", "for", "at", "with"],
        correct: 0,
        explanation: "The expression is 'look forward to + -ing'."
    },

    {
        category: "Open Cloze",
        question: "She is very good _____ solving difficult problems.",
        answers: ["at", "in", "on", "for"],
        correct: 0,
        explanation: "The correct expression is 'be good at + -ing'."
    },

    {
        category: "Open Cloze",
        question: "We arrived _____ the airport just before midnight.",
        answers: ["at", "in", "to", "on"],
        correct: 0,
        explanation: "We normally say 'arrive at' when referring to a specific place such as an airport."
    },

    {
        category: "Open Cloze",
        question: "He apologized _____ being late.",
        answers: ["for", "about", "of", "with"],
        correct: 0,
        explanation: "The correct expression is 'apologize for + -ing'."
    },

    // =========================
    // KEY WORD TRANSFORMATIONS
    // =========================

    {
        category: "Key Word Transformations",
        question: "I last saw James three years ago.\n\nI _____ James for three years.",
        answers: ["haven't seen", "didn't see", "don't see", "wasn't seeing"],
        correct: 0,
        explanation: "The present perfect is used with 'for' to describe a situation continuing until now."
    },

    {
        category: "Key Word Transformations",
        question: "It wasn't necessary for Sarah to come early.\n\nSarah _____ come early.",
        answers: ["needn't have", "mustn't have", "couldn't have", "shouldn't have"],
        correct: 0,
        explanation: "'Needn't have + past participle' means that something happened even though it wasn't necessary."
    },

    {
        category: "Key Word Transformations",
        question: "This is the first time I've eaten sushi.\n\nI _____ sushi before.",
        answers: ["have never eaten", "never ate", "had never eaten", "don't eat"],
        correct: 0,
        explanation: "'This is the first time' is normally followed by the present perfect."
    },

    {
        category: "Key Word Transformations",
        question: "The weather was so bad that we stayed at home.\n\nIt was _____ that we stayed at home.",
        answers: ["such bad weather", "such a bad weather", "so a bad weather", "too bad weather"],
        correct: 0,
        explanation: "The correct structure is 'such + adjective + uncountable noun'."
    },

    {
        category: "Key Word Transformations",
        question: "I regret not studying harder.\n\nI wish I _____ harder.",
        answers: ["studied", "had studied", "would study", "have studied"],
        correct: 1,
        explanation: "For regrets about the past, we use 'wish + past perfect'."
    },

    // =========================
    // MIXED PRACTICE
    // =========================

    {
        category: "Mixed Practice",
        question: "If I had known about the problem, I _____ you.",
        answers: ["would tell", "would have told", "will tell", "told"],
        correct: 1,
        explanation: "This is the third conditional: 'if + past perfect' and 'would have + past participle'."
    },

    {
        category: "Mixed Practice",
        question: "The teacher suggested _____ the exercise again.",
        answers: ["to do", "doing", "do", "that doing"],
        correct: 1,
        explanation: "'Suggest' is normally followed by a gerund (-ing)."
    },

    {
        category: "Mixed Practice",
        question: "The new system has had a positive _____ on productivity.",
        answers: ["effect", "affect", "resulting", "influence to"],
        correct: 0,
        explanation: "The correct expression is 'have an effect on something'."
    },

    {
        category: "Mixed Practice",
        question: "By the time we got there, everyone _____.",
        answers: ["left", "had left", "has left", "was leave"],
        correct: 1,
        explanation: "The past perfect shows that everyone left before we arrived."
    },

    {
        category: "Mixed Practice",
        question: "She decided to _____ the offer because the salary was too low.",
        answers: ["turn down", "turn up", "turn into", "turn over"],
        correct: 0,
        explanation: "'Turn down' means to reject an offer."
    },

    // =========================
    // ADDITIONAL GRAMMAR
    // =========================

    {
        category: "Grammar",
        question: "By the time we arrived, the film ___ already started.",
        answers: ["has", "had", "was", "would"],
        correct: 1,
        explanation: "The past perfect 'had started' is used for an action that happened before another past action."
    },

    {
        category: "Grammar",
        question: "I wish I ___ more time to finish the project yesterday.",
        answers: ["have", "had", "would have", "had had"],
        correct: 3,
        explanation: "For a regret about a past situation, we use 'wish + past perfect': 'I wish I had had more time.'"
    },

    {
        category: "Grammar",
        question: "She ___ to work by bus every day, but now she cycles.",
        answers: ["used to go", "was used to go", "would going", "use to going"],
        correct: 0,
        explanation: "'Used to + infinitive' describes a past habit or situation that is no longer true."
    },

    {
        category: "Grammar",
        question: "If I ___ about the meeting, I would have attended it.",
        answers: ["knew", "had known", "would know", "have known"],
        correct: 1,
        explanation: "This is a third conditional: 'if + past perfect' followed by 'would have + past participle'."
    },

    {
        category: "Grammar",
        question: "The new bridge ___ by the end of next year.",
        answers: ["will complete", "will have completed", "will have been completed", "is completing"],
        correct: 2,
        explanation: "The future perfect passive 'will have been completed' describes something that will be finished by a future time."
    },

    {
        category: "Grammar",
        question: "You ___ have told me earlier. I could have helped you.",
        answers: ["should", "must", "can", "would"],
        correct: 0,
        explanation: "'Should have + past participle' is used to say that something was the better or expected thing to do in the past."
    },

    {
        category: "Grammar",
        question: "Despite ___ very tired, he continued working.",
        answers: ["he was", "being", "to be", "was"],
        correct: 1,
        explanation: "'Despite' is followed by a noun, pronoun or gerund (-ing form), not an infinitive."
    },

    {
        category: "Grammar",
        question: "I haven't seen Maria ___ she moved to London.",
        answers: ["for", "during", "since", "while"],
        correct: 2,
        explanation: "'Since' introduces the point in time when an action or situation began."
    },

    {
        category: "Grammar",
        question: "The teacher suggested ___ the exercise again.",
        answers: ["to do", "doing", "do", "that doing"],
        correct: 1,
        explanation: "'Suggest' is normally followed by a gerund when referring to an activity: 'suggest doing something'."
    },

    {
        category: "Grammar",
        question: "He denied ___ the window.",
        answers: ["break", "to break", "breaking", "broken"],
        correct: 2,
        explanation: "'Deny' is followed by a gerund: 'deny doing something'."
    },

    {
        category: "Grammar",
        question: "We ___ dinner when the lights suddenly went out.",
        answers: ["had", "have", "were having", "have had"],
        correct: 2,
        explanation: "The past continuous describes an action that was in progress when another past event occurred."
    },

    {
        category: "Grammar",
        question: "I'd rather you ___ me before making that decision.",
        answers: ["tell", "told", "have told", "would tell"],
        correct: 1,
        explanation: "'Would rather + subject + past simple' is used to express a preference about another person's action."
    },

    {
        category: "Grammar",
        question: "It's high time we ___ home.",
        answers: ["go", "went", "have gone", "will go"],
        correct: 1,
        explanation: "'It's high time + past simple' is used to say that something should happen now or very soon."
    },

    {
        category: "Grammar",
        question: "The book, ___ was published last year, has become a bestseller.",
        answers: ["who", "where", "which", "whose"],
        correct: 2,
        explanation: "'Which' is used as a relative pronoun to refer to things."
    },

    {
        category: "Grammar",
        question: "The woman ___ car was stolen reported it to the police.",
        answers: ["who", "whose", "which", "whom"],
        correct: 1,
        explanation: "'Whose' expresses possession in a relative clause."
    },

    {
        category: "Grammar",
        question: "You won't pass the exam unless you ___ harder.",
        answers: ["will study", "studied", "study", "would study"],
        correct: 2,
        explanation: "In a first conditional, the 'unless' clause uses the present simple to refer to a future condition."
    },

    {
        category: "Grammar",
        question: "She asked me where ___ the previous evening.",
        answers: ["I had been", "had I been", "I have been", "was I"],
        correct: 0,
        explanation: "In reported questions, we use normal statement word order. The past perfect fits the earlier past event."
    },

    {
        category: "Grammar",
        question: "He is believed ___ one of the best players in the country.",
        answers: ["being", "to be", "be", "to being"],
        correct: 1,
        explanation: "After 'is believed', we use the infinitive: 'He is believed to be...'"
    },

    {
        category: "Grammar",
        question: "I regret ___ you that your application was unsuccessful.",
        answers: ["inform", "to inform", "informing", "informed"],
        correct: 1,
        explanation: "'Regret to + infinitive' is commonly used when giving bad news."
    },

    {
        category: "Grammar",
        question: "I regret ___ so much money on something I didn't need.",
        answers: ["to spend", "spend", "spending", "spent"],
        correct: 2,
        explanation: "'Regret + -ing' refers to being sorry about something that happened in the past."
    },

    {
        category: "Grammar",
        question: "You needn't ___ all the food. There will be plenty for everyone.",
        answers: ["to buy", "buying", "buy", "bought"],
        correct: 2,
        explanation: "After the modal 'needn't', we use the base form of the verb: 'needn't buy'."
    },

    {
        category: "Grammar",
        question: "The house needs ___ before we can move in.",
        answers: ["paint", "to painting", "painting", "painted"],
        correct: 2,
        explanation: "'Need + -ing' can have a passive meaning: 'The house needs painting' means it needs to be painted."
    },

    {
        category: "Grammar",
        question: "No sooner ___ the train than it started to rain.",
        answers: ["we had left", "had we left", "we left", "did we leave"],
        correct: 1,
        explanation: "After 'no sooner' at the beginning of a sentence, we use inversion: 'No sooner had we left...'"
    },

    {
        category: "Grammar",
        question: "Had I known about the problem, I ___ you.",
        answers: ["would tell", "would have told", "will tell", "told"],
        correct: 1,
        explanation: "'Had I known' is an inverted third conditional meaning 'If I had known'."
    },

    {
        category: "Grammar",
        question: "By this time tomorrow, we ___ on the beach.",
        answers: ["will lie", "will be lying", "are lying", "have lain"],
        correct: 1,
        explanation: "The future continuous describes an action that will be in progress at a particular time in the future."
    },

    // =========================
    // ADDITIONAL VOCABULARY
    // =========================

    {
        category: "Vocabulary",
        question: "The company decided to ___ a new product next month.",
        answers: ["launch", "throw", "set", "raise"],
        correct: 0,
        explanation: "\"Launch a product\" means to officially introduce it to the market."
    },

    {
        category: "Vocabulary",
        question: "I was completely ___ by the amount of homework we were given.",
        answers: ["overwhelmed", "overturned", "overlooked", "overcharged"],
        correct: 0,
        explanation: "\"Overwhelmed\" means feeling that something is too much to deal with."
    },

    {
        category: "Vocabulary",
        question: "The teacher asked us to ___ attention to the instructions.",
        answers: ["make", "give", "pay", "take"],
        correct: 2,
        explanation: "The correct expression is \"pay attention\"."
    },

    {
        category: "Vocabulary",
        question: "The hotel is within walking ___ of the city centre.",
        answers: ["distance", "length", "space", "range"],
        correct: 0,
        explanation: "\"Within walking distance\" means close enough to walk to."
    },

    {
        category: "Vocabulary",
        question: "The company is trying to ___ its costs without reducing the quality of its products.",
        answers: ["reduce", "decline", "remove", "decrease"],
        correct: 0,
        explanation: "\"Reduce costs\" means to make the costs lower."
    },

    {
        category: "Vocabulary",
        question: "She has always been very ___ of her younger brother.",
        answers: ["supportive", "dependent", "reliable", "responsible"],
        correct: 0,
        explanation: "\"Supportive of someone\" means giving them encouragement and help."
    },

    {
        category: "Vocabulary",
        question: "The police are still trying to ___ what happened that night.",
        answers: ["find out", "find up", "find over", "find through"],
        correct: 0,
        explanation: "\"Find out\" means to discover information or learn something."
    },

    {
        category: "Vocabulary",
        question: "We need to find a more ___ solution to this problem.",
        answers: ["practical", "actual", "temporary", "traditional"],
        correct: 0,
        explanation: "\"Practical\" means suitable and effective for a particular situation."
    },

    {
        category: "Vocabulary",
        question: "The new law is expected to have a significant ___ on the environment.",
        answers: ["affect", "effect", "result", "cause"],
        correct: 1,
        explanation: "\"Effect\" is a noun meaning the result or influence of something."
    },

    {
        category: "Vocabulary",
        question: "He refused to ___ responsibility for the mistake.",
        answers: ["take", "do", "make", "hold"],
        correct: 0,
        explanation: "The correct expression is \"take responsibility\"."
    },

    {
        category: "Vocabulary",
        question: "The instructions were so ___ that nobody knew what to do.",
        answers: ["confusing", "confused", "unclear", "uncertain"],
        correct: 0,
        explanation: "\"Confusing\" describes something that causes people to feel confused."
    },

    {
        category: "Vocabulary",
        question: "The athlete managed to ___ the record despite being injured.",
        answers: ["break", "damage", "destroy", "crack"],
        correct: 0,
        explanation: "\"Break a record\" is the standard expression."
    },

    {
        category: "Vocabulary",
        question: "It took me several weeks to ___ to my new school.",
        answers: ["adapt", "adopt", "accept", "approve"],
        correct: 0,
        explanation: "\"Adapt to\" means to change your behaviour or habits to suit a new situation."
    },

    {
        category: "Vocabulary",
        question: "The manager gave us some useful ___ on how to improve our presentation.",
        answers: ["advice", "advices", "advise", "suggestion"],
        correct: 0,
        explanation: "\"Advice\" is an uncountable noun meaning suggestions about what someone should do."
    },

    {
        category: "Vocabulary",
        question: "The government is taking measures to ___ unemployment.",
        answers: ["combat", "compete", "complete", "combine"],
        correct: 0,
        explanation: "\"Combat unemployment\" means to take action to reduce or deal with unemployment."
    },

    {
        category: "Vocabulary",
        question: "She was ___ disappointed when she found out that the concert had been cancelled.",
        answers: ["deeply", "strongly", "heavily", "greatlyly"],
        correct: 0,
        explanation: "\"Deeply disappointed\" is a natural collocation meaning very disappointed."
    },

    {
        category: "Vocabulary",
        question: "The museum contains a ___ collection of ancient artefacts.",
        answers: ["vast", "wide", "long", "tall"],
        correct: 0,
        explanation: "\"Vast\" means extremely large in size or amount."
    },

    {
        category: "Vocabulary",
        question: "You should ___ advantage of this opportunity while you can.",
        answers: ["make", "take", "do", "get"],
        correct: 1,
        explanation: "The correct expression is \"take advantage of\", meaning to make good use of an opportunity."
    },

    {
        category: "Vocabulary",
        question: "The students were asked to ___ a decision before the end of the lesson.",
        answers: ["make", "do", "take", "create"],
        correct: 0,
        explanation: "\"Make a decision\" is the standard expression."
    },

    {
        category: "Vocabulary",
        question: "The restaurant has a good ___ for providing excellent service.",
        answers: ["reputation", "fame", "rumour", "recognition"],
        correct: 0,
        explanation: "\"Reputation\" means the general opinion people have about someone or something."
    },

    {
        category: "Vocabulary",
        question: "The instructions were ___ difficult to understand.",
        answers: ["fairly", "fair", "fairness", "fairest"],
        correct: 0,
        explanation: "\"Fairly difficult\" means moderately or quite difficult."
    },

    {
        category: "Vocabulary",
        question: "The company needs to ___ its employees with the necessary equipment.",
        answers: ["provide", "offer", "give", "send"],
        correct: 0,
        explanation: "\"Provide someone with something\" is the correct structure."
    },

    {
        category: "Vocabulary",
        question: "After years of research, scientists finally made a major ___ in the field.",
        answers: ["breakthrough", "breakdown", "breakout", "breakaway"],
        correct: 0,
        explanation: "A \"breakthrough\" is an important discovery or development."
    },

    {
        category: "Vocabulary",
        question: "The journey was delayed due to ___ weather conditions.",
        answers: ["severe", "hard", "powerful", "heavy"],
        correct: 0,
        explanation: "\"Severe weather conditions\" is a natural expression for very bad or dangerous weather."
    },

    {
        category: "Vocabulary",
        question: "His explanation was so ___ that everyone understood the problem immediately.",
        answers: ["convincing", "convinced", "persuasive", "persuaded"],
        correct: 0,
        explanation: "\"Convincing\" describes something that makes people believe that something is true or correct."
    }

];


// ============================================================
// B1 COACH DATA
// ============================================================

const COACH_STORAGE_KEY = "b1CoachData";


// ===============================
// GET COACH DATA
// ===============================

function getCoachData() {

    const savedData = localStorage.getItem(COACH_STORAGE_KEY);

    if (!savedData) {

        return {
            examDate: null,
            planStartDate: null,
            planDays: 90,
            diagnostic: null,
            progress: {
                questionsAnswered: 0,
                correctAnswers: 0,
                accuracy: 0,
                daysCompleted: 0,
                lastStudyDate: null,
                categoryStats: {}
            },
            dailyResults: []
        };

    }

    try {

        const data = JSON.parse(savedData);

        if (!data.progress) {
            data.progress = {};
        }

        if (!data.progress.categoryStats) {
            data.progress.categoryStats = {};
        }

        if (!data.dailyResults) {
            data.dailyResults = [];
        }

        return data;

    } catch (error) {

        console.error("Could not read B1 Coach data:", error);

        return {
            examDate: null,
            planStartDate: null,
            planDays: 90,
            diagnostic: null,
            progress: {
                questionsAnswered: 0,
                correctAnswers: 0,
                accuracy: 0,
                daysCompleted: 0,
                lastStudyDate: null,
                categoryStats: {}
            },
            dailyResults: []
        };

    }

}


// ===============================
// SAVE COACH DATA
// ===============================

function saveCoachData(data) {

    localStorage.setItem(
        COACH_STORAGE_KEY,
        JSON.stringify(data)
    );

}


// ===============================
// GET TODAY
// ===============================

function getTodayString() {

    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;

}


// ===============================
// RECORD QUIZ RESULT
// ===============================

function recordCoachResult() {

    const data = getCoachData();

    const total = currentQuestions.length;

    if (total === 0) {
        return;
    }

    const percentage = Math.round(
        (score / total) * 100
    );

    // -------------------------------
    // Overall progress
    // -------------------------------

    data.progress.questionsAnswered =
        Number(data.progress.questionsAnswered || 0) + total;

    data.progress.correctAnswers =
        Number(data.progress.correctAnswers || 0) + score;

    data.progress.accuracy =
        Math.round(
            (
                data.progress.correctAnswers /
                data.progress.questionsAnswered
            ) * 100
        );

    data.progress.lastStudyDate =
        getTodayString();


    // -------------------------------
    // Category statistics
    // -------------------------------

    const categoryTotals = {};

    currentQuestions.forEach(function(question) {

        if (!categoryTotals[question.category]) {

            categoryTotals[question.category] = {
                questions: 0,
                correct: 0
            };

        }

        categoryTotals[question.category].questions++;

    });


    // Count correct answers by category.

    // We cannot reconstruct individual answers after the quiz
    // from the old system, so the result is distributed only
    // at the quiz/category level here.

    if (currentQuestions.length > 0) {

        if (selectedCategory !== "Mixed Practice") {

            if (!data.progress.categoryStats[selectedCategory]) {

                data.progress.categoryStats[selectedCategory] = {
                    questions: 0,
                    correct: 0,
                    accuracy: 0
                };

            }

            data.progress.categoryStats[selectedCategory].questions += total;

            data.progress.categoryStats[selectedCategory].correct += score;

            data.progress.categoryStats[selectedCategory].accuracy =
                Math.round(
                    (
                        data.progress.categoryStats[selectedCategory].correct /
                        data.progress.categoryStats[selectedCategory].questions
                    ) * 100
                );

        }

    }


    // -------------------------------
    // Daily result
    // -------------------------------

    const today = getTodayString();

    const dailyResult = {
        date: today,
        category: selectedCategory,
        questions: total,
        correct: score,
        percentage: percentage
    };


    data.dailyResults.push(dailyResult);


    // Keep only the latest 100 results.
    if (data.dailyResults.length > 100) {

        data.dailyResults =
            data.dailyResults.slice(-100);

    }


    // -------------------------------
    // Completed study day
    // -------------------------------

    const alreadyCompletedToday =
        data.dailyResults.filter(function(result) {

            return result.date === today;

        }).length > 1;


    if (!alreadyCompletedToday) {

        data.progress.daysCompleted =
            Number(data.progress.daysCompleted || 0) + 1;

    }


    saveCoachData(data);

}


// ===============================
// SCREEN NAVIGATION
// ===============================

function showScreen(id) {

    document.querySelectorAll(".screen").forEach(function(screen) {

        screen.classList.remove("active");

    });


    const screen =
        document.getElementById(id);


    if (screen) {

        screen.classList.add("active");

    }


    window.scrollTo(0, 0);

}


// ===============================
// B2 LEVEL BUTTON
// ===============================

const b2LevelButton =
    document.getElementById("b2LevelButton");

if (b2LevelButton) {

    b2LevelButton.addEventListener("click", function() {

        showScreen("practiceMenu");

    });

}


// ===============================
// OPEN PRACTICE FROM URL
// ===============================

if (categoryFromURL) {

    showScreen("practiceMenu");


    document.querySelectorAll(".practice-card").forEach(function(card) {

        if (card.dataset.category === categoryFromURL) {

            card.classList.add("selected");

        }

    });

}


// ===============================
// PRO LEVELS
// ===============================

const proModal =
    document.getElementById("proModal");

const closeProModal =
    document.getElementById("closeProModal");

const laterProButton =
    document.getElementById("laterProButton");

const unlockProButton =
    document.getElementById("unlockProButton");


document.querySelectorAll(".pro-level").forEach(function(level) {

    level.addEventListener("click", function() {

        if (proModal) {

            proModal.style.display = "flex";

        }

    });

});


if (closeProModal) {

    closeProModal.addEventListener("click", function() {

        proModal.style.display = "none";

    });

}


if (laterProButton) {

    laterProButton.addEventListener("click", function() {

        proModal.style.display = "none";

    });

}


if (unlockProButton) {

    unlockProButton.addEventListener("click", function() {

        alert("Error Coach Pro will be available soon.");

    });

}


// ===============================
// HOME BUTTONS
// ===============================

const practiceHomeButton =
    document.getElementById("practiceHomeButton");

if (practiceHomeButton) {

    practiceHomeButton.addEventListener("click", function() {

        showScreen("home");

    });

}


const homeButton =
    document.getElementById("homeButton");

if (homeButton) {

    homeButton.addEventListener("click", function() {

        showScreen("home");

    });

}


const statsHomeButton =
    document.getElementById("statsHomeButton");

if (statsHomeButton) {

    statsHomeButton.addEventListener("click", function() {

        showScreen("home");

    });

}


const practiceAgainButton =
    document.getElementById("practiceAgainButton");

if (practiceAgainButton) {

    practiceAgainButton.addEventListener("click", function() {

        showScreen("practiceMenu");

    });

}


// ===============================
// CATEGORY SELECTION
// ===============================

document.querySelectorAll(".practice-card").forEach(function(button) {

    button.addEventListener("click", function() {

        document.querySelectorAll(".practice-card").forEach(function(card) {

            card.classList.remove("selected");

        });


        button.classList.add("selected");


        selectedCategory =
            button.dataset.category;

    });

});


// ===============================
// SELECT CATEGORY FROM URL
// ===============================

if (categoryFromURL) {

    const categoryButton =
        document.querySelector(
            `.practice-card[data-category="${categoryFromURL}"]`
        );


    if (categoryButton) {

        document.querySelectorAll(".practice-card").forEach(function(card) {

            card.classList.remove("selected");

        });


        categoryButton.classList.add("selected");


        selectedCategory =
            categoryFromURL;

    }

}


// ===============================
// QUIZ LENGTH
// ===============================

document.querySelectorAll(".length-button").forEach(function(button) {

    button.addEventListener("click", function() {

        document.querySelectorAll(".length-button").forEach(function(btn) {

            btn.classList.remove("selected");

        });


        button.classList.add("selected");


        selectedLength =
            Number(button.dataset.length);

    });

});


// ===============================
// START PRACTICE
// ===============================

const startPracticeButton =
    document.getElementById("startPracticeButton");

if (startPracticeButton) {

    startPracticeButton.addEventListener("click", function() {

        startQuiz();

    });

}


// ===============================
// START QUIZ
// ===============================

function startQuiz() {

    let availableQuestions;


    if (selectedCategory === "Mixed Practice") {

        availableQuestions =
            questions.slice();

    } else {

        availableQuestions =
            questions.filter(function(question) {

                return question.category === selectedCategory;

            });

    }


    if (availableQuestions.length === 0) {

        alert(
            "There are no questions available in this category yet."
        );

        return;

    }


    availableQuestions =
        shuffle(availableQuestions);


    currentQuestions = [];


    for (let i = 0; i < selectedLength; i++) {

        currentQuestions.push(
            availableQuestions[
                i % availableQuestions.length
            ]
        );

    }


    currentQuestionIndex = 0;

    score = 0;


    showScreen("quiz");

    loadQuestion();

}


// ===============================
// LOAD QUESTION
// ===============================

function loadQuestion() {

    const question =
        currentQuestions[currentQuestionIndex];


    const questionElement =
        document.getElementById("question");

    if (questionElement) {

        questionElement.innerText =
            question.question;

    }


    const categoryElement =
        document.getElementById("questionCategory");

    if (categoryElement) {

        categoryElement.innerText =
            question.category.toUpperCase();

    }


    const questionNumberElement =
        document.getElementById("questionNumber");

    if (questionNumberElement) {

        questionNumberElement.innerText =
            "Question " +
            (currentQuestionIndex + 1);

    }


    const totalQuestionsElement =
        document.getElementById("totalQuestions");

    if (totalQuestionsElement) {

        totalQuestionsElement.innerText =
            (currentQuestionIndex + 1) +
            " / " +
            currentQuestions.length;

    }


    const progressElement =
        document.getElementById("progress");

    if (progressElement) {

        progressElement.style.width =
            (
                (
                    (currentQuestionIndex + 1) /
                    currentQuestions.length
                ) * 100
            ) + "%";

    }


    const answersContainer =
        document.getElementById("answers");


    if (!answersContainer) {
        return;
    }


    answersContainer.innerHTML = "";


    question.answers.forEach(function(answer, index) {

        const button =
            document.createElement("button");


        button.className =
            "answer-button";


        button.innerText =
            answer;


        button.addEventListener("click", function() {

            selectAnswer(index);

        });


        answersContainer.appendChild(button);

    });


    const feedback =
        document.getElementById("feedback");

    if (feedback) {

        feedback.classList.add("hidden");

    }


    const nextButton =
        document.getElementById("nextButton");

    if (nextButton) {

        nextButton.classList.add("hidden");

    }

}


// ===============================
// SELECT ANSWER
// ===============================

function selectAnswer(selectedIndex) {

    const question =
        currentQuestions[currentQuestionIndex];


    const answerButtons =
        document.querySelectorAll(".answer-button");


    answerButtons.forEach(function(button) {

        button.disabled = true;

    });


    if (selectedIndex === question.correct) {

        score++;


        if (answerButtons[selectedIndex]) {

            answerButtons[selectedIndex]
                .classList.add("correct");

        }


        showFeedback(
            "Correct! ✓",
            question.explanation
        );


    } else {

        if (answerButtons[selectedIndex]) {

            answerButtons[selectedIndex]
                .classList.add("incorrect");

        }


        if (answerButtons[question.correct]) {

            answerButtons[question.correct]
                .classList.add("correct");

        }


        showFeedback(
            "Not quite.",
            question.explanation
        );

    }


    const nextButton =
        document.getElementById("nextButton");


    if (nextButton) {

        nextButton.classList.remove("hidden");

    }

}


// ===============================
// FEEDBACK
// ===============================

function showFeedback(title, text) {

    const feedbackTitle =
        document.getElementById("feedbackTitle");

    const feedbackText =
        document.getElementById("feedbackText");

    const feedback =
        document.getElementById("feedback");


    if (feedbackTitle) {

        feedbackTitle.innerText =
            title;

    }


    if (feedbackText) {

        feedbackText.innerText =
            text;

    }


    if (feedback) {

        feedback.classList.remove("hidden");

    }

}


// ===============================
// NEXT QUESTION
// ===============================

const nextButton =
    document.getElementById("nextButton");

if (nextButton) {

    nextButton.addEventListener("click", function() {

        currentQuestionIndex++;


        if (
            currentQuestionIndex >=
            currentQuestions.length
        ) {

            finishQuiz();

        } else {

            loadQuestion();

        }

    });

}


// ===============================
// FINISH QUIZ
// ===============================

function finishQuiz() {

    const total =
        currentQuestions.length;


    const percentage =
        Math.round(
            (score / total) * 100
        );


    const scoreElement =
        document.getElementById("score");

    if (scoreElement) {

        scoreElement.innerText =
            `${score}/${total}`;

    }


    const resultPercentage =
        document.getElementById("resultPercentage");

    if (resultPercentage) {

        resultPercentage.innerText =
            `${percentage}%`;

    }


    const resultCorrect =
        document.getElementById("resultCorrect");

    if (resultCorrect) {

        resultCorrect.innerText =
            score;

    }


    const resultQuestions =
        document.getElementById("resultQuestions");

    if (resultQuestions) {

        resultQuestions.innerText =
            total;

    }


    const resultMessage =
        document.getElementById("resultMessage");

    const resultDescription =
        document.getElementById("resultDescription");


    if (percentage === 100) {

        if (resultMessage) {

            resultMessage.innerText =
                "Perfect score! 🏆";

        }

        if (resultDescription) {

            resultDescription.innerText =
                "Excellent work. You've mastered this practice.";

        }

    } else if (percentage >= 80) {

        if (resultMessage) {

            resultMessage.innerText =
                "Great job! 🎯";

        }

        if (resultDescription) {

            resultDescription.innerText =
                "Your English is looking strong. Keep practising.";

        }

    } else if (percentage >= 60) {

        if (resultMessage) {

            resultMessage.innerText =
                "Good work! 👍";

        }

        if (resultDescription) {

            resultDescription.innerText =
                "You're making progress. Keep working on your weak areas.";

        }

    } else {

        if (resultMessage) {

            resultMessage.innerText =
                "Keep practising! 💪";

        }

        if (resultDescription) {

            resultDescription.innerText =
                "Every mistake is a chance to learn something new.";

        }

    }


    // ===============================
    // SAVE RESULT TO B1 COACH
    // ===============================

    recordCoachResult();


    showScreen("results");

}


// ===============================
// RETRY
// ===============================

const retryButton =
    document.getElementById("retryButton");

if (retryButton) {

    retryButton.addEventListener("click", function() {

        startQuiz();

    });

}


// ===============================
// RETURN TO B1 COACH
// ===============================

function returnToCoach() {

    window.location.href =
        "b1-coach.html";

}


// ===============================
// CREATE COACH RETURN BUTTON
// ===============================
//
// When practice is opened with:
// ?category=Grammar&coach=1
//
// the results screen receives a button
// allowing the user to return to the Coach.
//

function setupCoachMode() {

    if (!coachMode) {
        return;
    }


    const resultsScreen =
        document.getElementById("results");


    if (!resultsScreen) {
        return;
    }


    if (
        document.getElementById("returnToCoachButton")
    ) {
        return;
    }


    const button =
        document.createElement("button");


    button.id =
        "returnToCoachButton";


    button.className =
        "primary-button";


    button.innerText =
        "Back to B1 Coach";


    button.addEventListener(
        "click",
        returnToCoach
    );


    resultsScreen.appendChild(button);

}


setupCoachMode();


// ===============================
// SHUFFLE
// ===============================

function shuffle(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];

    }


    return array;

}