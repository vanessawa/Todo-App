/* Nice To Have Features 😏

*/

// array of added todos
const allTodos = new Array();

class Todo {
  constructor(description, status) {
    this.description = description;
    this.done = status;
    //allTodos.push(description, status);
  }
}

// get input-text of currentTodo
const currentTodo = document.querySelector("#input-text");
document.querySelector("#input-text").value = "";

const newtodo = new Todo(currentTodo, false);

// create todoItem
function createTodoItem() {
  const newTodoText = currentTodo.value;
  console.log(newTodoText);
  const newTodo = {
    todo: newTodoText,
    done: false,
  };

  currentTodo.value = "";

  // select todoList for adding new todo
  const todoList = document.querySelector("#todoList");

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

/*
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
  listItem.appendChild(checkbox);*/

// add items to array
//   allTodos.push({
//     content: currentTodo,
//     status: "open",
//   });

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

function deleteDoneTodos() {
  for (currentTodo of allTodos) {
    if (currentTodo.checked == true) {
      let doneElements = allTodos.indexOf(currentTodo.parentElement);
      allTodos.splice(doneElements, 2);
      currentTodo.parentElement.remove();
    }
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

  // click-event delete all done todos
  const deleteDoneTodosBtn = document.querySelector("#deleteDoneTodos");
  deleteDoneTodosBtn.addEventListener("click", deleteDoneTodos);
}

init();
