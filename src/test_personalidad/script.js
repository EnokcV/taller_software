const questions = [
    {
        text: "¿Prefieres pasar tiempo solo o en grupo?",
        options: [
            { text: "Solo", value: "introvertido" },
            { text: "En grupo", value: "extrovertido" },
            { text: "Depende del día", value: "ambivertido" },
            { text: "No me importa", value: "neutral" }
        ]
    },
    {
        text: "¿Cómo reaccionas ante un problema inesperado?",
        options: [
            { text: "Analizo antes de actuar", value: "analitico" },
            { text: "Actúo rápido", value: "impulsivo" },
            { text: "Busco ayuda", value: "colaborativo" },
            { text: "Me estreso", value: "emocional" }
        ]
    },
    {
        text: "¿Qué actividad prefieres en tu tiempo libre?",
        options: [
            { text: "Leer o ver series", value: "introvertido" },
            { text: "Salir con amigos", value: "extrovertido" },
            { text: "Deporte o ejercicio", value: "activo" },
            { text: "Jugar videojuegos", value: "creativo" }
        ]
    },
    {
        text: "¿Cómo tomas decisiones importantes?",
        options: [
            { text: "Con lógica y datos", value: "analitico" },
            { text: "Por intuición", value: "impulsivo" },
            { text: "Consulto a otros", value: "colaborativo" },
            { text: "Me cuesta decidir", value: "emocional" }
        ]
    },
    {
        text: "¿Qué harías si ves a alguien en problemas en la calle?",
        options: [
            { text: "Ayudo de inmediato", value: "colaborativo" },
            { text: "Busco ayuda profesional", value: "analitico" },
            { text: "Observo antes de actuar", value: "introvertido" },
            { text: "Sigo mi camino", value: "neutral" }
        ]
    },
    {
        text: "¿Cómo te organizas para un proyecto?",
        options: [
            { text: "Hago listas y planes", value: "analitico" },
            { text: "Improviso", value: "impulsivo" },
            { text: "Trabajo en equipo", value: "colaborativo" },
            { text: "Me cuesta organizarme", value: "emocional" }
        ]
    },
    {
        text: "¿Qué tipo de películas prefieres?",
        options: [
            { text: "Drama o suspenso", value: "emocional" },
            { text: "Comedia o acción", value: "extrovertido" },
            { text: "Ciencia ficción", value: "analitico" },
            { text: "Documentales", value: "introvertido" }
        ]
    },
    {
        text: "¿Cómo te sientes en una fiesta con desconocidos?",
        options: [
            { text: "Incómodo", value: "introvertido" },
            { text: "Emocionado", value: "extrovertido" },
            { text: "Depende del ambiente", value: "ambivertido" },
            { text: "No suelo ir", value: "neutral" }
        ]
    },
    {
        text: "¿Qué haces si tienes que entregar algo urgente?",
        options: [
            { text: "Me organizo y lo hago", value: "analitico" },
            { text: "Lo hago al último momento", value: "impulsivo" },
            { text: "Pido ayuda si lo necesito", value: "colaborativo" },
            { text: "Me estreso mucho", value: "emocional" }
        ]
    },
    {
        text: "¿Cómo prefieres aprender algo nuevo?",
        options: [
            { text: "Leyendo o viendo videos", value: "introvertido" },
            { text: "Practicando con otros", value: "extrovertido" },
            { text: "Experimentando solo", value: "creativo" },
            { text: "Me cuesta aprender", value: "emocional" }
        ]
    }
];

const resultsMap = {
    introvertido: "Eres una persona reservada, reflexiva y disfrutas de la tranquilidad.",
    extrovertido: "Eres sociable, activo y te recargas con la compañía de otros.",
    analitico: "Eres lógico, organizado y te gusta planear antes de actuar.",
    impulsivo: "Eres espontáneo, te gusta la acción y tomas decisiones rápidas.",
    colaborativo: "Te gusta trabajar en equipo y ayudar a los demás.",
    emocional: "Eres sensible, empático y tus emociones guían tus acciones.",
    ambivertido: "Tienes un balance entre introversión y extroversión.",
    creativo: "Eres innovador, curioso y te gusta experimentar cosas nuevas.",
    activo: "Te gusta el movimiento, el deporte y la actividad física.",
    neutral: "Tienes una personalidad flexible y te adaptas a diferentes situaciones."
};

function renderQuestions() {
    const questionsDiv = document.getElementById('questions');
    questions.forEach((q, idx) => {
        const qDiv = document.createElement('div');
        qDiv.className = 'question';
        const qTitle = document.createElement('p');
        qTitle.textContent = `${idx + 1}. ${q.text}`;
        qDiv.appendChild(qTitle);
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';
        q.options.forEach((opt, oidx) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `q${idx}`;
            input.value = opt.value;
            if (oidx === 0) input.required = true;
            label.appendChild(input);
            label.appendChild(document.createTextNode(opt.text));
            optionsDiv.appendChild(label);
        });
        qDiv.appendChild(optionsDiv);
        questionsDiv.appendChild(qDiv);
    });
}

function getResult(answers) {
    const count = {};
    answers.forEach(ans => {
        count[ans] = (count[ans] || 0) + 1;
    });
    let max = 0;
    let personality = 'neutral';
    for (const key in count) {
        if (count[key] > max) {
            max = count[key];
            personality = key;
        }
    }
    return resultsMap[personality] || resultsMap['neutral'];
}

document.addEventListener('DOMContentLoaded', () => {
    renderQuestions();
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const answers = [];
        for (let i = 0; i < questions.length; i++) {
            const selected = form.querySelector(`input[name="q${i}"]:checked`);
            if (selected) answers.push(selected.value);
        }
        const result = getResult(answers);
        resultDiv.textContent = result;
        resultDiv.classList.remove('hidden');
        window.scrollTo({ top: resultDiv.offsetTop, behavior: 'smooth' });
    });
});
