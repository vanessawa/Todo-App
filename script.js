/* Nice To Have Features 😏

*/

// array of added todos
const allTodos = new Array();

class Todo {
  constructor(description, status) {
    this.description = description;
    this.done = status;
    allTodos.push(description, status);
  }
}

// console sagt todoInput is not defined. Ist aber in function init() angelegt
const newTodo = new Todo(todoInput, false);

// create todoItem
function createTodoItem() {
  const newTodoText = todoInput.value;
  console.log(newTodoText);
  const newTodo = {
    todo: newTodoText,
    done: false,
  };

  todoInput.value = "";

  // create new listItem
  const listItem = document.createElement("li");

  listItem.todo = newTodo;

  //listItem.innerText = newTodoText;

  // add text to listItem
  listItem.appendChild(document.createTextNode(newTodoText));

  // add checkbox to listItem
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  listItem.appendChild(checkbox);

  todoList.appendChild(listItem);
}

// noch nicht an Class angepasst
function showOpenTodos() {
  for (todoInput of allTodos) {
    if (todoInput.checked == true) {
      todoInput.parentElement.style.display = "none";
    } else {
      todoInput.parentElement.style.display = "block";
    }
  }
}

// versucht an Class anzupassen
function showDoneTodos() {
  for (let li of todoList.children) {
    const checkbox = li.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;
    if (isChecked === true) {
      todoInput.parentElement.style.display = "none";
    } else {
      todoInput.parentElement.style.display = "block";
    }
  }
}

// noch nicht an Class angepasst
function showAllTodos() {
  for (todoInput of allTodos) {
    todoInput.parentElement.style.display = "block";
  }
}

function deleteDoneTodos() {
  for (todoInput of allTodos) {
    if (todoInput.checked == true) {
      let doneElements = allTodos.indexOf(todoInput.parentElement);
      allTodos.splice(doneElements, 2);
      todoInput.parentElement.remove();
    }
  }
}

todoList.addEventListener("change", changeTodoStyle);
function changeTodoStyle(e) {
  if (e.target.checked === true) {
    e.target.parentElement.style.textDecoration = "line-through";
  } else {
    e.target.parentElement.style.textDecoration = "none";
  }
}

// global variables
function init() {
  // click-event add todo
  const addBtn = document.querySelector("#addBtn");
  addBtn.addEventListener("click", createTodoItem);

  // click-event select todos
  const allTodosBtn = document.querySelector("#allTodos");
  allTodosBtn.addEventListener("change", showAllTodos);

  const openTodosBtn = document.querySelector("#openTodos");
  openTodosBtn.addEventListener("change", showOpenTodos);

  const doneTodosBtn = document.querySelector("#doneTodos");
  doneTodosBtn.addEventListener("change", showDoneTodos);

  // click-event delete all done todos
  const deleteDoneTodosBtn = document.querySelector("#deleteDoneTodos");
  deleteDoneTodosBtn.addEventListener("click", deleteDoneTodos);

  // get input-text of todoInput
  const todoInput = document.querySelector("#todo-input");
  document.querySelector("#todo-input").value = "";

  // select todoList for adding new todo
  const todoList = document.querySelector("#todoList");
}

init();
