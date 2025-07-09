document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');
    const themeSelect = document.getElementById('theme-select');
    const body = document.body;

    // Cargar tareas guardadas
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    renderTodos();

    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    themeSelect.value = savedTheme;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (text) {
            todos.push(text);
            input.value = '';
            saveTodos();
            renderTodos();
        }
    });

    themeSelect.addEventListener('change', (e) => {
        setTheme(e.target.value);
    });

    function setTheme(theme) {
        body.classList.remove('theme-dark', 'theme-invert', 'theme-daltonic');
        switch (theme) {
            case 'dark':
                body.classList.add('theme-dark');
                break;
            case 'invert':
                body.classList.add('theme-invert');
                break;
            case 'daltonic':
                body.classList.add('theme-daltonic');
                break;
            default:
                // Claro (sin clase especial)
                break;
        }
        localStorage.setItem('theme', theme);
    }

    function renderTodos() {
        list.innerHTML = '';
        todos.forEach((todo, idx) => {
            const li = document.createElement('li');
            li.textContent = todo;
            const btn = document.createElement('button');
            btn.textContent = 'Eliminar';
            btn.className = 'delete-btn';
            btn.onclick = () => {
                todos.splice(idx, 1);
                saveTodos();
                renderTodos();
            };
            li.appendChild(btn);
            list.appendChild(li);
        });
    }

    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
});