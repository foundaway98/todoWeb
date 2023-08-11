const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

function deleteToDo() {
    console.log('delete function');
}

function paintToDo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    span.innerText = newTodo;
    button.innerText = 'X';
    button.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    paintToDo(newTodo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);
