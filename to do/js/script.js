window.onload = (event) => {
    const mainInput = document.querySelector('.header__input');
    const addButton = document.querySelector('.header__battoon');
    const todoList = document.querySelector('#todo-list');

    const addTodo = () => {
        const item = document.createElement('div');
        item.innerHTML = `
            <input class="checkbox__task checkbox" type="checkbox" />
            <span id="span" class="task__text">${ mainInput.value }</span>
            <button id="button__remove" class="button__task button_todo button__exercise">remowe</button>
        `;
        item.classList.add('exercise__unfinished__task');
        todoList.appendChild(item);
        mainInput.value = '';
        updateTodo();
    }

    const updateTodo = () => {
        const unfinishedTasks = document.querySelectorAll('.exercise__unfinished__task');

        unfinishedTasks.forEach(item => {
            console.log(item)
            const removeButton = item.querySelector('.button__exercise');
            console.log(removeButton)
            removeButton.addEventListener('click', () => {
                item.remove();
                console.log(item)
            })
        })
    }


    addButton.addEventListener('click', addTodo)
};