window.onload = async function (todo) {
    const completedCountElement = document.getElementById("completed-todo");
    const uncompletedCountElement = document.getElementById("uncompleted-todo");


    let list = [];
    let completedList = [];
    let uncompletedList = [];

    // let uncompletedCountElement = document.getElementById("uncompleted-todo");

    await fetch('https://jsonplaceholder.typicode.com/todos')
		.then(response => list = response.json())
		.then(json => list = json.slice(0, 20))
    
    console.log(list);

    for (let i = 0; i < list.length; i++) {
        const currentTodo = list[i]
            if (currentTodo.completed === true) {
                completedList.push(currentTodo)
            } else {
                uncompletedList.push(currentTodo)
            }
    }

    completedCountElement.textContent = completedList.length;
    uncompletedCountElement.textContent = uncompletedList.length;
}
