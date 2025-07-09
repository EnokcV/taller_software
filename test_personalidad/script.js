const questions = [
    {
        text: "¿Qué prefieres en un auto?",
        options: [
            { text: "Potencia y velocidad máxima", value: "skyline" },
            { text: "Equilibrio y confiabilidad", value: "supra" },
            { text: "Diversión en curvas y ligereza", value: "miata" },
            { text: "Personalización y creatividad", value: "tsuru" }
        ]
    },
    {
        text: "¿Cómo te comportas en el tráfico pesado?",
        options: [
            { text: "Busco rutas rápidas y adelanto cuando puedo", value: "evo" },
            { text: "Me lo tomo con calma, disfruto la música", value: "miata" },
            { text: "Aprovecho para ajustar detalles del auto", value: "tsuru" },
            { text: "Me mantengo paciente y seguro", value: "supra" }
        ]
    },
    {
        text: "¿Qué tipo de carretera prefieres?",
        options: [
            { text: "Autopistas largas para ir rápido", value: "skyline" },
            { text: "Curvas de montaña para sentir el manejo", value: "miata" },
            { text: "Calles urbanas para lucir el estilo", value: "tsuru" },
            { text: "Cualquier camino, me adapto fácil", value: "supra" }
        ]
    },
    {
        text: "¿Cómo cuidas tu auto?",
        options: [
            { text: "Mantenimiento estricto y piezas originales", value: "supra" },
            { text: "Modifico y tuneo a mi gusto", value: "tsuru" },
            { text: "Me enfoco en el rendimiento y upgrades", value: "evo" },
            { text: "Lo mantengo limpio y ligero", value: "miata" }
        ]
    },
    {
        text: "¿Qué te emociona más de conducir?",
        options: [
            { text: "La aceleración y la velocidad", value: "skyline" },
            { text: "El control en las curvas", value: "miata" },
            { text: "El sonido del motor y escapes", value: "evo" },
            { text: "La atención que recibo en la calle", value: "tsuru" }
        ]
    },
    {
        text: "¿Cómo reaccionas ante un reto de manejo?",
        options: [
            { text: "Acepto y busco ganar", value: "evo" },
            { text: "Solo si es seguro y legal", value: "supra" },
            { text: "Prefiero disfrutar el momento", value: "miata" },
            { text: "Me gusta impresionar con mi estilo", value: "tsuru" }
        ]
    },
    {
        text: "¿Qué accesorio no puede faltar en tu auto?",
        options: [
            { text: "Turbo o supercargador", value: "skyline" },
            { text: "Suspensión deportiva", value: "miata" },
            { text: "Estéreo potente y luces LED", value: "tsuru" },
            { text: "Alerón funcional", value: "evo" }
        ]
    },
    {
        text: "¿Cómo prefieres viajar con amigos?",
        options: [
            { text: "En caravana, todos juntos", value: "supra" },
            { text: "En carreras amistosas", value: "evo" },
            { text: "Paseo relajado y con paradas", value: "miata" },
            { text: "Mostrando el auto en reuniones", value: "tsuru" }
        ]
    },
    {
        text: "¿Qué opinas de los autos clásicos?",
        options: [
            { text: "Me encanta restaurarlos y tunearlos", value: "tsuru" },
            { text: "Prefiero tecnología moderna", value: "evo" },
            { text: "Me gustan ambos, depende del auto", value: "supra" },
            { text: "Clásicos ligeros y divertidos son lo mío", value: "miata" }
        ]
    },
    {
        text: "¿Cuál es tu meta al volante?",
        options: [
            { text: "Ser el más rápido", value: "skyline" },
            { text: "Disfrutar cada trayecto", value: "miata" },
            { text: "Tener el auto más original", value: "tsuru" },
            { text: "Ser respetado por mi manejo", value: "evo" }
        ]
    }
];

const resultsMap = {
    skyline: {
        text: "¡Eres un Nissan GT-R R34 Skyline! Potente, legendario y siempre llamando la atención. Te gusta destacar y eres el alma de la fiesta JDM.",
        img: "Nissan Skyline.jpg",
        name: "Nissan GT-R R34 Skyline"
    },
    supra: {
        text: "¡Eres un Toyota Supra! Equilibrado, versátil y con mucho potencial. Te adaptas a cualquier situación y siempre tienes un as bajo la manga.",
        img: "Supra.jpg",
        name: "Toyota Supra"
    },
    miata: {
        text: "¡Eres un Mazda Miata! Divertido, ágil y siempre listo para nuevas aventuras. Te gusta disfrutar el camino y la libertad.",
        img: "Mazda Miata.jpg",
        name: "Mazda Miata"
    },
    tsuru: {
        text: "¡Eres un Tsuru tuneado! Práctico, ingenioso y con mucho estilo propio. Siempre encuentras la manera de sobresalir con lo que tienes.",
        img: "Tsuru tuneado.jpg",
        name: "Tsuru Tuneado"
    },
    evo: {
        text: "¡Eres un Mitsubishi Lancer Evolution! Competitivo, decidido y con mucha energía. No te rindes fácilmente y siempre buscas mejorar.",
        img: "Mitsubishi Evo.jpg",
        name: "Mitsubishi Lancer Evolution"
    },
    neutral: {
        text: "¡Eres una mezcla única de todos los JDM! Tienes un poco de cada estilo y te adaptas a cualquier pista.",
        img: "Nissan Skyline.jpg",
        name: "JDM Mix"
    }
};

const carPersonalityMap = {
    introvertido: 'miata',
    extrovertido: 'skyline',
    analitico: 'evo',
    impulsivo: 'tsuru',
    colaborativo: 'miata',
    emocional: 'supra',
    ambivertido: 'neutral',
    creativo: 'tsuru',
    activo: 'evo',
    neutral: 'neutral'
};

let currentQuestion = 0;
const answers = new Array(questions.length);

function renderQuestion(idx) {
    const q = questions[idx];
    const container = document.getElementById('question-container');
    container.innerHTML = '';
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
        if (answers[idx] === opt.value) input.checked = true;
        label.appendChild(input);
        label.appendChild(document.createTextNode(opt.text));
        optionsDiv.appendChild(label);
    });
    qDiv.appendChild(optionsDiv);
    container.appendChild(qDiv);
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
    const carKey = carPersonalityMap[personality] || 'neutral';
    return resultsMap[carKey];
}

document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');
    const startBtn = document.getElementById('start-btn');
    const quizForm = document.getElementById('quiz-form');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    const themeBtn = document.getElementById('theme-btn');
    const body = document.body;
    const carImageDiv = document.getElementById('car-image');
    const themes = [
        '', // Normal (morado/negro)
        'theme-light',
        'theme-dark',
        'theme-invert',
        'theme-daltonic',
        'theme-highlight'
    ];
    let themeIdx = 0;
    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme-personalidad') || '';
    if (savedTheme && themes.includes(savedTheme)) {
        body.className = savedTheme;
        themeIdx = themes.indexOf(savedTheme);
    }
    themeBtn.addEventListener('click', () => {
        themeIdx = (themeIdx + 1) % themes.length;
        body.className = themes[themeIdx];
        localStorage.setItem('theme-personalidad', themes[themeIdx]);
    });

    renderQuestion(currentQuestion);
    updateControls();

    startBtn.addEventListener('click', () => {
        intro.classList.add('hidden');
        quizForm.classList.remove('hidden');
    });

    form.addEventListener('change', (e) => {
        if (e.target.name === `q${currentQuestion}`) {
            answers[currentQuestion] = e.target.value;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            renderQuestion(currentQuestion);
            updateControls();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (typeof answers[currentQuestion] !== 'undefined') {
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                renderQuestion(currentQuestion);
                updateControls();
            }
        } else {
            alert('Por favor selecciona una respuesta.');
        }
    });

    function updateControls() {
        prevBtn.disabled = currentQuestion === 0;
        nextBtn.style.display = currentQuestion === questions.length - 1 ? 'none' : '';
        submitBtn.classList.toggle('hidden', currentQuestion !== questions.length - 1);
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (typeof answers[currentQuestion] === 'undefined') {
            alert('Por favor selecciona una respuesta.');
            return;
        }
        if (answers.includes(undefined)) {
            alert('Por favor responde todas las preguntas.');
            return;
        }
        const result = getResult(answers);
        resultDiv.textContent = result.text;
        resultDiv.classList.remove('hidden');
        carImageDiv.innerHTML = `<img src="${result.img}" alt="${result.name}"><span>${result.name}</span>`;
        carImageDiv.classList.remove('hidden');
        form.classList.add('hidden');
        window.scrollTo({ top: resultDiv.offsetTop, behavior: 'smooth' });
    });
});
