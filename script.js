/* Nice To Have Features 😏

1. Add a filter which allows to display either "all todos", 
  "open todos" or "done todos"
2. Add a button which will delete all done todos

1. Step
- click-event for each
*/

// array of added todos
const allTodos = [];

// create todoItem
function createTodoItem() {
  // get input-text of currentTodo
  const currentTodo = document.querySelector("#input-text").value;
  document.querySelector("#input-text").value = "";

  // select todoList for adding new todo
  const todoList = document.querySelector("#todoList");

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

function showOpenTodos() {
  for (currentTodo of allTodos) {
    if (currentTodo.checked == true) {
      currentTodo.parentElement.style.display = "none";
    } else {
      currentTodo.parentElement.style.display = "block";
    }
  }
}

function showDoneTodos() {
  for (currentTodo of allTodos) {
    if (currentTodo.checked == false) {
      currentTodo.parentElement.style.display = "none";
    } else {
      currentTodo.parentElement.style.display = "block";
    }
  }
}

function showAllTodos() {
  for (currentTodo of allTodos) {
    currentTodo.parentElement.style.display = "block";
  }
}

// global variables
function init() {
  // click-event add todo
  const addBtn = document.querySelector("#addBtn");
  addBtn.addEventListener("click", createTodoItem);

  // click-event select todos
  const allTodosBtn = document.querySelector("#allTodos");
  allTodosBtn.addEventListener("click", showAllTodos);

  const openTodosBtn = document.querySelector("#openTodos");
  openTodosBtn.addEventListener("click", showOpenTodos);

  const doneTodosBtn = document.querySelector("#doneTodos");
  doneTodosBtn.addEventListener("click", showDoneTodos);
}

init();

/*
// click-event delete all done todos
const deleteDoneTodos = document.querySelector("#deleteDoneTodos");
deleteDoneTodos.addEventListener("click", deleteDoneTodos);

function deleteDoneTodos() {
for (currentTodo of allTodosBtn) {

}
}
*/
