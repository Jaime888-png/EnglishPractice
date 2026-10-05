
// ======================================================
// ENGLISH PRACTICE - GUÍAS A1, A2, B1, B2, C1 Y C2
// ======================================================

// Leer el nivel desde la URL
const params = new URLSearchParams(window.location.search);
const requestedLevel = (params.get("nivel") || "B1").toUpperCase();

const validLevels = ["A1", "A2", "B1", "B2", "C1", "C2"];

const level = validLevels.includes(requestedLevel)
    ? requestedLevel
    : "B1";


// ======================================================
// DATOS DE LAS GUÍAS
// ======================================================

const guides = {

    // ==================================================
    // A1
    // ==================================================
    A1: {
        name: "A1",
        description: "Tu primera guía para empezar a comunicarte en inglés con seguridad.",
        overview: "En A1 tu objetivo principal es construir una base sólida: entender frases sencillas, presentarte, hablar de tu vida cotidiana y desenvolverte en situaciones muy básicas.",

        writing: {
            title: "Writing A1",
            intro: "Aprende a escribir frases sencillas y pequeños textos sobre temas cotidianos.",
            topics: [
                "Presentarte y hablar de ti",
                "Tu familia",
                "Tu casa y tu habitación",
                "Tus hobbies",
                "Tu rutina diaria",
                "Describir personas y lugares"
            ],
            phrases: [
                "My name is...",
                "I am from...",
                "I live in...",
                "I like...",
                "I don't like...",
                "I usually...",
                "My favourite ... is..."
            ],
            tips: [
                "Empieza con frases cortas y correctas.",
                "Usa siempre sujeto + verbo cuando sea necesario.",
                "Revisa especialmente am/is/are y have/has.",
                "No intentes traducir frases españolas demasiado complejas."
            ]
        },

        speaking: {
            title: "Speaking A1",
            intro: "En A1 lo importante es poder comunicar información básica aunque cometas algunos errores.",
            topics: [
                "Presentarte",
                "Hablar de tu familia",
                "Hablar de tu rutina",
                "Pedir información sencilla",
                "Hablar de gustos",
                "Hablar de planes básicos"
            ],
            phrases: [
                "Hello, my name is...",
                "Nice to meet you.",
                "Where are you from?",
                "Can you help me, please?",
                "Where is the bathroom?",
                "How much is it?",
                "I would like...",
                "Can I have...?"
            ],
            strategy: "No busques frases perfectas. Intenta comunicar la idea con las palabras que ya conoces."
        },

        listening: {
            title: "Listening A1",
            points: [
                "Números y precios",
                "Horas y fechas",
                "Saludos y presentaciones",
                "Preguntas sencillas",
                "Instrucciones básicas",
                "Palabras frecuentes del día a día"
            ],
            strategy: "Escucha audios cortos varias veces. Primero intenta entender la idea general y después palabras concretas."
        },

        reading: {
            title: "Reading A1",
            points: [
                "Carteles y señales",
                "Mensajes cortos",
                "Horarios",
                "Menús",
                "Perfiles personales",
                "Textos sencillos sobre la vida cotidiana"
            ],
            strategy: "No traduzcas cada palabra. Busca primero nombres, números, verbos y palabras que puedas reconocer."
        },

        grammar: [
            ["Verb to be", "Para hablar de identidad, características y ubicación.", "I am Spanish. She is my sister."],
            ["Have got", "Para hablar de posesión y relaciones.", "I have got two brothers."],
            ["Present simple", "Para rutinas y hechos habituales.", "I play football every Saturday."],
            ["There is / There are", "Para decir que algo existe o está en un lugar.", "There is a table in my room."],
            ["Can / Can't", "Para habilidades y posibilidades básicas.", "I can swim."],
            ["Imperatives", "Para instrucciones y órdenes sencillas.", "Open the door."],
            ["Present continuous", "Para acciones que están ocurriendo ahora.", "I am studying English."],
            ["Past simple: be", "Para hablar de situaciones pasadas con was/were.", "I was at home yesterday."],
            ["Question words", "Para formar preguntas básicas.", "Where do you live?"],
            ["Possessives", "Para indicar posesión.", "This is my book."],
            ["Prepositions", "Para hablar de lugar y tiempo.", "The keys are on the table."],
            ["Articles", "Uso básico de a, an y the.", "I have a dog."]
        ],

        vocabulary: {
            title: "Vocabulary A1",
            points: [
                "Familia",
                "Casa",
                "Comida",
                "Ropa",
                "Colores",
                "Números",
                "Profesiones",
                "Lugares de la ciudad",
                "Rutinas",
                "Tiempo y clima"
            ],
            strategy: "Aprende las palabras dentro de frases, no únicamente como listas."
        },

        study: [
            "Aprende 5-10 palabras nuevas y utilízalas en frases.",
            "Escucha inglés un poco todos los días.",
            "Habla en voz alta aunque estés solo.",
            "Repasa los errores que cometes con frecuencia.",
            "Practica primero lo básico hasta que salga automáticamente."
        ]
    },


    // ==================================================
    // A2
    // ==================================================
    A2: {
        name: "A2",
        description: "Consolida tu inglés y aprende a desenvolverte en situaciones cotidianas.",
        overview: "En A2 debes ser capaz de mantener conversaciones sencillas, hablar de experiencias y describir situaciones habituales.",

        writing: {
            title: "Writing A2",
            intro: "Empieza a construir textos más largos y conectados.",
            topics: [
                "Emails informales",
                "Descripciones personales",
                "Experiencias pasadas",
                "Viajes",
                "Rutinas",
                "Planes futuros"
            ],
            phrases: [
                "I usually...",
                "Last weekend, I...",
                "I'm going to...",
                "I'd like to...",
                "In my opinion...",
                "I think that...",
                "It was a great experience because..."
            ],
            tips: [
                "Conecta las frases con and, but, because, so y then.",
                "Utiliza párrafos cortos.",
                "Comprueba los tiempos verbales.",
                "Evita repetir constantemente las mismas palabras."
            ]
        },

        speaking: {
            title: "Speaking A2",
            intro: "Busca mantener conversaciones sencillas y responder con frases completas.",
            topics: [
                "Viajes",
                "Estudios",
                "Trabajo",
                "Familia",
                "Tiempo libre",
                "Planes"
            ],
            phrases: [
                "Could you help me, please?",
                "How can I get to...?",
                "I'd like to book a room.",
                "What do you recommend?",
                "Could you say that again?",
                "I'm looking for...",
                "What time does it start?",
                "I'd rather..."
            ],
            strategy: "Si no conoces una palabra, intenta explicarla con otras palabras en lugar de quedarte bloqueado."
        },

        listening: {
            title: "Listening A2",
            points: [
                "Conversaciones cotidianas",
                "Indicaciones",
                "Anuncios sencillos",
                "Conversaciones sobre planes",
                "Descripciones de personas y lugares",
                "Historias cortas"
            ],
            strategy: "Escucha primero sin subtítulos. Después utiliza subtítulos en inglés para comprobar qué palabras no habías entendido."
        },

        reading: {
            title: "Reading A2",
            points: [
                "Emails",
                "Mensajes",
                "Historias cortas",
                "Noticias sencillas",
                "Anuncios",
                "Información turística"
            ],
            strategy: "Identifica primero quién, qué, cuándo, dónde y por qué."
        },

        grammar: [
            ["Present simple vs present continuous", "Diferencia entre hábitos y acciones actuales.", "I work every day. I am working now."],
            ["Past simple", "Acciones terminadas en el pasado.", "I visited London last year."],
            ["Past continuous", "Acciones que estaban ocurriendo en un momento pasado.", "I was watching TV at eight."],
            ["Present perfect básico", "Experiencias y situaciones relacionadas con el presente.", "I have visited Paris."],
            ["Future: going to", "Planes e intenciones.", "I'm going to study tonight."],
            ["Will", "Decisiones, predicciones y promesas.", "I'll help you."],
            ["Comparatives", "Comparar personas y cosas.", "This book is more interesting."],
            ["Superlatives", "Indicar el grado máximo.", "It is the best option."],
            ["Modal verbs", "Obligación, permiso y posibilidad.", "You must wear a seatbelt."],
            ["First conditional", "Situaciones posibles en el futuro.", "If it rains, I'll stay home."],
            ["Countable / uncountable", "Distinguir sustantivos contables y no contables.", "Some water / two bottles."],
            ["Adverbs of frequency", "Hablar de frecuencia.", "I usually get up at seven."]
        ],

        vocabulary: {
            title: "Vocabulary A2",
            points: [
                "Viajes",
                "Trabajo y estudios",
                "Salud",
                "Compras",
                "Tecnología básica",
                "Tiempo libre",
                "Transporte",
                "Comida y restaurantes",
                "Ciudad",
                "Emociones"
            ],
            strategy: "Agrupa palabras por temas y aprende también sus combinaciones habituales."
        },

        study: [
            "Repasa vocabulario antiguo antes de añadir mucho nuevo.",
            "Practica conversaciones de situaciones reales.",
            "Haz ejercicios cortos pero frecuentes.",
            "Empieza a pensar algunas frases directamente en inglés.",
            "Guarda una lista de tus errores habituales."
        ]
    },


    // ==================================================
    // B1
    // ==================================================
    B1: {
        name: "B1",
        description: "Da el salto hacia un inglés más natural y capaz de expresar ideas completas.",
        overview: "En B1 debes poder desenvolverte en viajes, estudios y conversaciones cotidianas, explicar opiniones y contar experiencias.",

        writing: {
            title: "Writing B1",
            intro: "Aprende a escribir textos claros, organizados y con diferentes tipos de estructuras.",
            topics: [
                "Emails formales e informales",
                "Opiniones",
                "Historias",
                "Reviews",
                "Artículos sencillos",
                "Descripciones y experiencias"
            ],
            phrases: [
                "In my opinion...",
                "I believe that...",
                "On the one hand...",
                "For example...",
                "However...",
                "As a result...",
                "To sum up..."
            ],
            tips: [
                "Organiza el texto en párrafos.",
                "Usa conectores variados.",
                "No repitas siempre las mismas palabras.",
                "Comprueba tiempos verbales y preposiciones.",
                "Responde exactamente a todos los puntos de la tarea."
            ]
        },

        speaking: {
            title: "Speaking B1",
            intro: "Tu objetivo es mantener una conversación sin depender constantemente de frases memorizadas.",
            topics: [
                "Viajes y situaciones en el extranjero",
                "Estudios y trabajo",
                "Tecnología",
                "Películas y música",
                "Planes futuros",
                "Opiniones y preferencias"
            ],
            phrases: [
                "Could you give me a hand?",
                "I'm looking for...",
                "Would you mind...?",
                "As far as I know...",
                "Personally, I think...",
                "I'm not sure, but...",
                "What do you mean?",
                "Let me think about it."
            ],
            strategy: "Cuando no conozcas una palabra, describe el concepto. La comunicación es más importante que encontrar la palabra perfecta."
        },

        listening: {
            title: "Listening B1",
            points: [
                "Conversaciones naturales",
                "Entrevistas",
                "Vídeos cortos",
                "Podcasts sencillos",
                "Historias",
                "Opiniones y conversaciones informales"
            ],
            strategy: "Entrena tres veces: idea general, información concreta y detalles."
        },

        reading: {
            title: "Reading B1",
            points: [
                "Artículos",
                "Emails",
                "Reviews",
                "Historias",
                "Noticias sencillas",
                "Textos de opinión"
            ],
            strategy: "Busca primero la idea principal de cada párrafo y después los detalles."
        },

        grammar: [
            ["Present perfect", "Experiencias y acciones relacionadas con el presente.", "I've never been to Scotland."],
            ["Past perfect", "Una acción anterior a otra acción pasada.", "She had already left when I arrived."],
            ["First conditional", "Situaciones reales o posibles.", "If I have time, I'll call you."],
            ["Second conditional", "Situaciones hipotéticas.", "If I had more money, I'd travel more."],
            ["Reported speech", "Contar lo que otra persona dijo.", "He said he was tired."],
            ["Passive voice", "Centrarse en la acción o resultado.", "The house was built in 1990."],
            ["Relative clauses", "Añadir información sobre personas o cosas.", "The woman who lives next door is a doctor."],
            ["Gerunds and infinitives", "Uso de verbos seguidos de -ing o infinitivo.", "I enjoy reading. I want to travel."],
            ["Modal verbs", "Posibilidad, obligación, consejo y deducción.", "You should see a doctor."],
            ["Used to", "Hábitos o situaciones del pasado.", "I used to play tennis."],
            ["Linking words", "Conectar ideas de manera clara.", "Although it was raining, we went out."],
            ["Question forms", "Formar preguntas correctamente.", "How long have you lived here?"]
        ],

        vocabulary: {
            title: "Vocabulary B1",
            points: [
                "Collocations",
                "Phrasal verbs frecuentes",
                "Word families",
                "Expresiones para dar opiniones",
                "Trabajo y estudios",
                "Viajes",
                "Tecnología",
                "Medio ambiente",
                "Sociedad",
                "Emociones"
            ],
            strategy: "No estudies únicamente palabras. Aprende combinaciones como make a decision, take a break o do homework."
        },

        study: [
            "Practica las cuatro destrezas: Reading, Listening, Writing y Speaking.",
            "Haz ejercicios específicos de B1 con frecuencia.",
            "Apunta los errores que se repiten.",
            "Aprende vocabulario dentro de frases.",
            "Intenta hablar sin traducir mentalmente cada palabra."
        ]
    },


    // ==================================================
    // B2
    // ==================================================
    B2: {
        name: "B2",
        description: "Mejora tu precisión, fluidez y capacidad para expresar ideas complejas.",
        overview: "En B2 debes poder participar en conversaciones con bastante naturalidad, comprender textos complejos y defender opiniones con argumentos.",

        writing: {
            title: "Writing B2",
            intro: "Aprende a construir textos bien organizados, precisos y adecuados al tipo de tarea.",
            topics: [
                "Essays",
                "Reports",
                "Reviews",
                "Formal emails",
                "Articles",
                "Proposals"
            ],
            phrases: [
                "It could be argued that...",
                "There is no doubt that...",
                "One of the main advantages is...",
                "On the other hand...",
                "This suggests that...",
                "As a consequence...",
                "Taking everything into account..."
            ],
            tips: [
                "Planifica antes de escribir.",
                "Varía estructuras y vocabulario.",
                "Usa conectores con precisión.",
                "Evita frases demasiado largas si perjudican la claridad.",
                "Comprueba la tarea antes de entregar."
            ]
        },

        speaking: {
            title: "Speaking B2",
            intro: "El objetivo es hablar con fluidez, justificar opiniones y reaccionar de forma natural.",
            topics: [
                "Debates",
                "Educación",
                "Tecnología",
                "Medio ambiente",
                "Trabajo",
                "Viajes",
                "Sociedad",
                "Cultura"
            ],
            phrases: [
                "I see your point, but...",
                "I completely agree with you.",
                "I'm not entirely convinced that...",
                "That's a good point.",
                "What I mean is...",
                "From my point of view...",
                "Having said that...",
                "It depends on..."
            ],
            strategy: "No memorices respuestas completas. Memoriza estructuras y expresiones que puedas adaptar."
        },

        listening: {
            title: "Listening B2",
            points: [
                "Podcasts",
                "Entrevistas",
                "Debates",
                "Vídeos de hablantes nativos",
                "Noticias",
                "Conversaciones rápidas"
            ],
            strategy: "Acostúmbrate a diferentes acentos y velocidades. No necesitas entender absolutamente cada palabra."
        },

        reading: {
            title: "Reading B2",
            points: [
                "Artículos de opinión",
                "Noticias",
                "Reviews",
                "Ensayos",
                "Textos académicos sencillos",
                "Textos con vocabulario avanzado"
            ],
            strategy: "Busca significado por contexto. Muchas veces puedes entender una palabra sin conocer su traducción exacta."
        },

        grammar: [
            ["Advanced conditionals", "Combina diferentes tiempos para expresar hipótesis complejas.", "If I had studied harder, I would have passed."],
            ["Mixed conditionals", "Relaciona situaciones pasadas y consecuencias presentes.", "If I had taken that job, I would be living abroad now."],
            ["Advanced passive", "Usos más complejos de la voz pasiva.", "He is believed to be one of the best players."],
            ["Causative have", "Indicar que otra persona realiza un servicio.", "I had my car repaired."],
            ["Inversion", "Estructuras enfáticas y formales.", "Never have I seen such a beautiful place."],
            ["Wish / If only", "Expresar deseos o arrepentimientos.", "I wish I had more time."],
            ["Modal perfects", "Deducciones y posibilidades sobre el pasado.", "He must have forgotten."],
            ["Participle clauses", "Reducir y conectar estructuras.", "Having finished the work, she went home."],
            ["Advanced relative clauses", "Estructuras relativas más complejas.", "The company, which was founded in 1995, has expanded."],
            ["Reported speech", "Transformar información y preguntas.", "She asked me where I had been."],
            ["Phrasal verbs", "Verbos compuestos frecuentes y sus distintos significados.", "The meeting was called off."],
            ["Linking devices", "Conectar argumentos con precisión.", "Nevertheless, therefore, whereas, despite."]
        ],

        vocabulary: {
            title: "Vocabulary B2",
            points: [
                "Collocations avanzadas",
                "Phrasal verbs",
                "Idioms frecuentes",
                "Word formation",
                "Sinónimos y matices",
                "Lenguaje formal e informal",
                "Academic vocabulary",
                "Expresiones para argumentar"
            ],
            strategy: "Aprende familias de palabras y diferencias de registro. En B2 importa tanto la precisión como conocer muchas palabras."
        },

        study: [
            "Haz ejercicios de Open Cloze, Word Formation y Use of English.",
            "Practica Writing con límite de tiempo.",
            "Escucha contenido real en inglés.",
            "Habla sobre temas que no hayas preparado.",
            "Revisa tus errores y crea ejemplos propios.",
            "Aprende expresiones completas, no palabras aisladas."
        ]
    },


    // ==================================================
    // C1
    // ==================================================
    C1: {
        name: "C1",
        description: "Perfecciona un inglés avanzado, preciso, flexible y natural.",
        overview: "En C1 debes poder comprender textos exigentes, expresarte con fluidez y adaptar tu lenguaje a diferentes situaciones.",

        writing: {
            title: "Writing C1",
            intro: "Trabaja la precisión, el registro, la argumentación y la riqueza lingüística.",
            topics: [
                "Essays avanzados",
                "Reports",
                "Proposals",
                "Reviews",
                "Artículos",
                "Textos argumentativos"
            ],
            phrases: [
                "It is worth considering that...",
                "A particularly relevant factor is...",
                "This raises the question of whether...",
                "From a broader perspective...",
                "Despite the fact that...",
                "It can therefore be concluded that..."
            ],
            tips: [
                "Adapta el registro al lector.",
                "Evita repetir estructuras.",
                "Prioriza precisión sobre palabras excesivamente complicadas.",
                "Utiliza ejemplos concretos para apoyar tus argumentos.",
                "Revisa cohesión y coherencia."
            ]
        },

        speaking: {
            title: "Speaking C1",
            intro: "Busca expresarte de forma espontánea, precisa y flexible incluso al hablar de temas complejos.",
            topics: [
                "Debates complejos",
                "Sociedad",
                "Ciencia y tecnología",
                "Economía",
                "Cultura",
                "Educación",
                "Medios de comunicación"
            ],
            phrases: [
                "To put it another way...",
                "That's an interesting point, although...",
                "I would argue that...",
                "There is some truth in that, but...",
                "What concerns me most is...",
                "It largely depends on...",
                "Broadly speaking..."
            ],
            strategy: "Trabaja la capacidad de reformular una idea cuando no encuentres inmediatamente la palabra exacta."
        },

        listening: {
            title: "Listening C1",
            points: [
                "Debates rápidos",
                "Podcasts especializados",
                "Conferencias",
                "Noticias",
                "Entrevistas extensas",
                "Diferentes acentos"
            ],
            strategy: "Practica entender significado implícito, actitud del hablante, ironía y cambios de tono."
        },

        reading: {
            title: "Reading C1",
            points: [
                "Artículos complejos",
                "Ensayos",
                "Prensa",
                "Textos académicos",
                "Textos literarios",
                "Opiniones y argumentos"
            ],
            strategy: "Analiza no solo qué dice el autor, sino también cómo construye y apoya su argumento."
        },

        grammar: [
            ["Advanced inversion", "Da énfasis y crea estructuras formales.", "Rarely do we see such rapid change."],
            ["Cleft sentences", "Enfatiza una parte concreta de la oración.", "What I find most interesting is the way it works."],
            ["Advanced modal verbs", "Expresan distintos grados de certeza.", "He may have been trying to help."],
            ["Reduced clauses", "Permiten construir frases más compactas.", "The people living here are very friendly."],
            ["Nominalisation", "Transforma acciones en sustantivos, frecuente en lenguaje formal.", "The introduction of the new system caused problems."],
            ["Advanced conditionals", "Hipótesis y relaciones complejas.", "Had I known, I would have acted differently."],
            ["Subjunctive", "Estructuras formales y recomendaciones.", "It is essential that he be informed."],
            ["Ellipsis", "Evita repeticiones innecesarias.", "I can play the guitar, and my brother can too."],
            ["Discourse markers", "Organiza ideas y argumentos.", "Nevertheless, in contrast, consequently."],
            ["Advanced relative structures", "Permiten añadir información con precisión.", "The proposal, the details of which were discussed yesterday, was approved."],
            ["Register", "Adaptar estructuras al contexto.", "Formal, neutral e informal English."],
            ["Collocation and nuance", "Elegir la combinación y palabra más natural.", "Highly unlikely / deeply concerned."]
        ],

        vocabulary: {
            title: "Vocabulary C1",
            points: [
                "Academic vocabulary",
                "Idioms",
                "Collocations avanzadas",
                "Phrasal verbs complejos",
                "Sinónimos y matices",
                "Formal English",
                "Language of argument",
                "Word formation"
            ],
            strategy: "En C1 importa especialmente elegir la palabra correcta para el contexto, no simplemente una palabra más difícil."
        },

        study: [
            "Lee contenido real de diferentes fuentes.",
            "Escucha contenido sin depender de subtítulos.",
            "Escribe textos con diferentes registros.",
            "Practica reformulación y paráfrasis.",
            "Amplía vocabulario mediante collocations.",
            "Analiza tus errores de precisión."
        ]
    },


    // ==================================================
    // C2
    // ==================================================
    C2: {
        name: "C2",
        description: "Lleva tu inglés al máximo nivel de precisión, naturalidad y flexibilidad.",
        overview: "C2 implica comprender prácticamente cualquier tipo de contenido y expresarte con gran precisión, incluso en situaciones complejas.",

        writing: {
            title: "Writing C2",
            intro: "Trabaja la precisión absoluta, el estilo, la argumentación y los matices.",
            topics: [
                "Ensayos complejos",
                "Textos académicos",
                "Artículos",
                "Informes",
                "Propuestas",
                "Textos especializados"
            ],
            phrases: [
                "It would be misleading to suggest that...",
                "A closer examination reveals that...",
                "This distinction is particularly significant because...",
                "The extent to which...",
                "It is by no means clear that...",
                "Ultimately, the issue comes down to..."
            ],
            tips: [
                "Prioriza naturalidad y precisión.",
                "Controla el registro de principio a fin.",
                "Utiliza estructuras complejas solo cuando aporten claridad.",
                "Evita palabras rebuscadas que no usarías naturalmente.",
                "Revisa cada elección léxica importante."
            ]
        },

        speaking: {
            title: "Speaking C2",
            intro: "El objetivo es expresarte con espontaneidad, precisión y control incluso en conversaciones exigentes.",
            topics: [
                "Debates especializados",
                "Política y sociedad",
                "Ciencia",
                "Cultura",
                "Economía",
                "Filosofía",
                "Temas abstractos"
            ],
            phrases: [
                "I would draw a distinction between...",
                "That's not necessarily the case.",
                "To a certain extent, I agree.",
                "The underlying issue is...",
                "I wouldn't go so far as to say...",
                "What we're essentially dealing with is..."
            ],
            strategy: "Trabaja matices: no solo decir qué piensas, sino indicar hasta qué punto, por qué y bajo qué condiciones."
        },

        listening: {
            title: "Listening C2",
            points: [
                "Contenido especializado",
                "Debates rápidos",
                "Humor e ironía",
                "Diferentes acentos",
                "Lenguaje informal",
                "Conferencias y entrevistas complejas"
            ],
            strategy: "Entrena la comprensión de significado implícito, intención, tono y referencias culturales."
        },

        reading: {
            title: "Reading C2",
            points: [
                "Literatura",
                "Ensayos académicos",
                "Prensa especializada",
                "Artículos complejos",
                "Textos técnicos",
                "Opinión avanzada"
            ],
            strategy: "Analiza argumentos, tono, implicaciones y elecciones lingüísticas."
        },

        grammar: [
            ["Advanced syntax", "Control preciso de estructuras complejas.", "Only after the meeting did we realise what had happened."],
            ["Inversion", "Uso avanzado para énfasis y estilo.", "Under no circumstances should this be ignored."],
            ["Cleft structures", "Permiten controlar el foco de información.", "What matters most is how we respond."],
            ["Advanced conditionals", "Hipótesis complejas y matizadas.", "Were it not for his support, the project would have failed."],
            ["Ellipsis", "Elimina información repetida manteniendo el significado.", "Some agreed; others did not."],
            ["Nominalisation", "Construcción de lenguaje formal y académico.", "The implementation of the policy resulted in..."],
            ["Subjunctive structures", "Estructuras formales y expresiones establecidas.", "It is vital that the issue be addressed."],
            ["Discourse structure", "Organización avanzada del discurso.", "That said, nevertheless, accordingly."],
            ["Register and style", "Adaptación precisa del lenguaje al contexto.", "Academic, formal, neutral, informal."],
            ["Nuanced modality", "Expresar distintos grados de certeza y posibilidad.", "He might well have been aware of it."],
            ["Advanced collocation", "Elección de combinaciones naturales.", "A deeply rooted problem."],
            ["Paraphrasing", "Expresar la misma idea de diferentes maneras.", "This could be interpreted as..."]
        ],

        vocabulary: {
            title: "Vocabulary C2",
            points: [
                "Collocations de alto nivel",
                "Idioms",
                "Metáforas",
                "Lenguaje académico",
                "Lenguaje especializado",
                "Matices semánticos",
                "Registro",
                "Phrasal verbs avanzados"
            ],
            strategy: "El objetivo no es conocer palabras raras, sino dominar las palabras adecuadas, sus matices y sus combinaciones."
        },

        study: [
            "Consume contenido real y exigente.",
            "Lee diferentes estilos y registros.",
            "Practica reformulación constantemente.",
            "Analiza cómo escriben y hablan hablantes expertos.",
            "Trabaja especialmente los matices.",
            "Revisa errores pequeños que afecten a la naturalidad."
        ]
    }
};


// ======================================================
// FUNCIONES AUXILIARES
// ======================================================

function escapeHTML(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function createList(items) {
    return `
        <ul>
            ${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}
        </ul>
    `;
}


function createPhrases(items) {
    return `
        <div class="phrase-box">
            ${items.map(item => `
                <div class="phrase">
                    <span>“</span>
                    ${escapeHTML(item)}
                </div>
            `).join("")}
        </div>
    `;
}


function createGrammar(items) {
    return `
        <div class="grammar-list">
            ${items.map(item => `
                <article class="grammar-item">
                    <h3>${escapeHTML(item[0])}</h3>
                    <p>${escapeHTML(item[1])}</p>
                    <div class="grammar-example">
                        <strong>Ejemplo:</strong> ${escapeHTML(item[2])}
                    </div>
                </article>
            `).join("")}
        </div>
    `;
}


// ======================================================
// RENDERIZAR GUÍA
// ======================================================

function renderGuide(data) {

    document.title = `Guía ${data.name} | English Practice`;
        // SEO dinámico
    const seoDescriptions = {
        A1: "Guía de inglés A1 con Writing, Speaking, Listening, Reading, Grammar y Vocabulary. Consejos y trucos para empezar a aprender inglés.",
        A2: "Guía de inglés A2 con Writing, Speaking, Listening, Reading, Grammar y Vocabulary. Mejora tu inglés con consejos y práctica.",
        B1: "Guía de inglés B1 con Writing, Speaking, Listening, Reading, Grammar y Vocabulary. Aprende a comunicarte con más fluidez.",
        B2: "Guía de inglés B2 con Writing, Speaking, Listening, Reading, Grammar y Vocabulary. Mejora tu inglés y prepara tus exámenes.",
        C1: "Guía de inglés C1 con Writing, Speaking, Listening, Reading, Grammar y Vocabulary. Perfecciona tu inglés avanzado.",
        C2: "Guía de inglés C2 con Writing, Speaking, Listening, Reading, Grammar y Vocabulary. Lleva tu inglés al máximo nivel."
    };

    let descriptionTag = document.querySelector('meta[name="description"]');

    if (!descriptionTag) {
        descriptionTag = document.createElement("meta");
        descriptionTag.name = "description";
        document.head.appendChild(descriptionTag);
    }

    descriptionTag.content = seoDescriptions[data.name];

    let canonicalTag = document.querySelector('link[rel="canonical"]');

    if (!canonicalTag) {
        canonicalTag = document.createElement("link");
        canonicalTag.rel = "canonical";
        document.head.appendChild(canonicalTag);
    }

    canonicalTag.href =
        `https://jaime888-png.github.io/EnglishPractice/guia.html?nivel=${data.name}`;

    document.getElementById("levelBadge").textContent = data.name;
    document.getElementById("guideTitle").textContent = `Guía ${data.name}`;
    document.getElementById("guideDescription").textContent = data.description;

    const content = document.getElementById("guideContent");

    content.innerHTML = `

        <!-- NIVEL -->
        <section id="overview" class="guide-section">
            <div class="section-heading">
                <span class="section-number">01</span>
                <div>
                    <p class="eyebrow">TU NIVEL</p>
                    <h2>¿Qué debes conseguir en ${data.name}?</h2>
                </div>
            </div>

            <div class="special-section">
                <p>${escapeHTML(data.overview)}</p>
            </div>
        </section>


        <!-- WRITING -->
        <section id="writing" class="guide-section">
            <div class="section-heading">
                <span class="section-number">02</span>
                <div>
                    <p class="eyebrow">WRITING</p>
                    <h2>${escapeHTML(data.writing.title)}</h2>
                </div>
            </div>

            <p class="section-intro">
                ${escapeHTML(data.writing.intro)}
            </p>

            <div class="content-grid">
                <div class="topic-card">
                    <h3>Qué practicar</h3>
                    ${createList(data.writing.topics)}
                </div>

                <div class="topic-card">
                    <h3>Expresiones útiles</h3>
                    ${createPhrases(data.writing.phrases)}
                </div>
            </div>

            <div class="tips">
                <h3>Consejos</h3>
                ${createList(data.writing.tips)}
            </div>
        </section>


        <!-- SPEAKING -->
        <section id="speaking" class="guide-section">
            <div class="section-heading">
                <span class="section-number">03</span>
                <div>
                    <p class="eyebrow">SPEAKING</p>
                    <h2>${escapeHTML(data.speaking.title)}</h2>
                </div>
            </div>

            <p class="section-intro">
                ${escapeHTML(data.speaking.intro)}
            </p>

            <div class="content-grid">
                <div class="topic-card">
                    <h3>Temas</h3>
                    ${createList(data.speaking.topics)}
                </div>

                <div class="topic-card">
                    <h3>Frases que debes dominar</h3>
                    ${createPhrases(data.speaking.phrases)}
                </div>
            </div>

            <div class="special-section">
                <h3>🎯 Estrategia</h3>
                <p>${escapeHTML(data.speaking.strategy)}</p>
            </div>
        </section>


        <!-- LISTENING -->
        <section id="listening" class="guide-section">
            <div class="section-heading">
                <span class="section-number">04</span>
                <div>
                    <p class="eyebrow">LISTENING</p>
                    <h2>${escapeHTML(data.listening.title)}</h2>
                </div>
            </div>

            <div class="topic-card">
                ${createList(data.listening.points)}
            </div>

            <div class="special-section">
                <h3>🎧 Cómo practicar</h3>
                <p>${escapeHTML(data.listening.strategy)}</p>
            </div>
        </section>


        <!-- READING -->
        <section id="reading" class="guide-section">
            <div class="section-heading">
                <span class="section-number">05</span>
                <div>
                    <p class="eyebrow">READING</p>
                    <h2>${escapeHTML(data.reading.title)}</h2>
                </div>
            </div>

            <div class="topic-card">
                ${createList(data.reading.points)}
            </div>

            <div class="special-section">
                <h3>📖 Cómo practicar</h3>
                <p>${escapeHTML(data.reading.strategy)}</p>
            </div>
        </section>


        <!-- GRAMMAR -->
        <section id="grammar" class="guide-section">
            <div class="section-heading">
                <span class="section-number">06</span>
                <div>
                    <p class="eyebrow">GRAMMAR</p>
                    <h2>Gramática de ${data.name}</h2>
                </div>
            </div>

            ${createGrammar(data.grammar)}
        </section>


        <!-- VOCABULARY -->
        <section id="vocabulary" class="guide-section">
            <div class="section-heading">
                <span class="section-number">07</span>
                <div>
                    <p class="eyebrow">VOCABULARY</p>
                    <h2>${escapeHTML(data.vocabulary.title)}</h2>
                </div>
            </div>

            <div class="topic-card">
                ${createList(data.vocabulary.points)}
            </div>

            <div class="special-section">
                <h3>🧠 Consejo</h3>
                <p>${escapeHTML(data.vocabulary.strategy)}</p>
            </div>
        </section>


        <!-- TRUCOS -->
        <section id="trucos" class="guide-section">
            <div class="section-heading">
                <span class="section-number">08</span>
                <div>
                    <p class="eyebrow">ESTUDIO</p>
                    <h2>Trucos para avanzar</h2>
                </div>
            </div>

            <div class="tips">
                ${createList(data.study)}
            </div>
        </section>


        <!-- ATAJOS -->
        <section id="atajos" class="guide-section">
            <div class="section-heading">
                <span class="section-number">09</span>
                <div>
                    <p class="eyebrow">ENGLISH PRACTICE</p>
                    <h2>Atajos</h2>
                </div>
            </div>

            <div class="shortcut-grid">
                <a href="open-cloze.html" class="shortcut-card">
                    <strong>Open Cloze</strong>
                    <span>Practica Use of English</span>
                </a>

                <a href="word-formation.html" class="shortcut-card">
                    <strong>Word Formation</strong>
                    <span>Practica formación de palabras</span>
                </a>

                <a href="collocations.html" class="shortcut-card">
                    <strong>Collocations</strong>
                    <span>Aprende combinaciones naturales</span>
                </a>

                <a href="index.html" class="shortcut-card">
                    <strong>Más ejercicios</strong>
                    <span>Volver a English Practice</span>
                </a>
            </div>
        </section>

    `;
}


// ======================================================
// INICIAR
// ======================================================

renderGuide(guides[level]);

