// array of added todos
const allTodos = [];

// click-event add todo
const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", createTodoItem);

// create todoItem
function createTodoItem() {
  // get input-text of currentTodo
  const currentTodo = document.getElementById("input-text").value;

  // select todoList for adding new todo
  const todoList = document.getElementById("todoList");

  // create new listItem
  const listItem = document.createElement("li");

  // add text to listItem
  listItem.appendChild(document.createTextNode(currentTodo));

  // add listElement to list
  todoList.appendChild(listItem);

  // add checkbox to listItem
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  listItem.appendChild(checkbox);

  // add items to array
  allTodos.push(listItem);
  allTodos.push(checkbox);
}

// click-event select todos
const allTodosBtn = document.querySelector("#allTodos");
allTodosBtn.addEventListener("click", showAllTodos);

const openTodosBtn = document.querySelector("#openTodos");
openTodosBtn.addEventListener("click", showOpenTodos);

const doneTodosBtn = document.querySelector("#doneTodos");
doneTodosBtn.addEventListener("click", showDoneTodos);

function showOpenTodos() {
  for (currentTodo of allTodos) {
    if (currentTodo.checked == true) {
      currentTodo.parentElement.style.display = "none";
      document.getElementById("allTodos").checked = false;
      document.getElementById("doneTodos").checked = false;
    } else {
      currentTodo.parentElement.style.display = "block";
    }
  }
}
function showDoneTodos() {
  for (currentTodo of allTodos) {
    if (currentTodo.checked == false) {
      currentTodo.parentElement.style.display = "none";
      document.getElementById("allTodos").checked = false;
      document.getElementById("openTodos").checked = false;
    } else {
      currentTodo.parentElement.style.display = "block";
    }
  }
}

function showAllTodos() {
  for (currentTodo of allTodos) {
    currentTodo.parentElement.style.display = "block";
    document.getElementById("openTodos").checked = false;
    document.getElementById("doneTodos").checked = false;
  }
}
