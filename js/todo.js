let toDoForm = document.getElementById("todo-form");
let toDoInput = toDoForm.querySelector("#todo-form input");
let toDoList = document.getElementById("todo-list");

let TODOS_KEY = "todos"

//save ToDo localStorage
let toDos = [];

//save todo
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//delete todo
function deleteToDo(event){
    let li = event.target.parentElement;
    // console.log(typeof li.id);
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
    //
}

//li 만들기
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
  }

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
      text: newTodo,
      id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
  }

toDoForm.addEventListener("submit", handleToDoSubmit);

let savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

