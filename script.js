// Add a feature that allows to add todos when pressing enter in the textbox
//

class Todo {
  constructor(description, status) {
    this.description = description;
    this.done = status;
  }
}

class TodoApp {
  //allTodos = new Array();

  constructor() {
    const addBtn = document.querySelector("#addBtn");
    addBtn.addEventListener("click", this.createTodoElement);

    const inputLine = document.querySelector("#todo-input");
    inputLine.addEventListener("keypress", this.addTodoByEnter);

    // ergibt dasselbe wie ~ allTodos = new Array() ~
    this.allTodos = new Array();

    // Click Event für show open Todos
    const openTodosBtn = document.querySelector("#openTodos");
    openTodosBtn.addEventListener("change", this.showOpenTodos);

    // Click Event für show done Todos
    const doneTodosBtn = document.querySelector("#doneTodos");
    doneTodosBtn.addEventListener("change", this.showDoneTodos);

    // Click Event für show All Todos
    const allTodosBtn = document.querySelector("#allTodos");
    allTodosBtn.addEventListener("change", this.showAllTodos);

    // click-event delete all done todos
    const deleteDoneTodosBtn = document.querySelector("#deleteDoneTodos");
    deleteDoneTodosBtn.addEventListener("click", this.deleteDoneTodos);

    // click Event change style of done Todos
    const todoList = document.querySelector("#todoList");
    todoList.addEventListener("change", this.changeTodoStyle);
  }

  createTodoElement() {
    const todoInputElem = document.querySelector("#todo-input");
    const newTodoText = todoInputElem.value;
    const todoObj = new Todo(newTodoText, false);
    // select todoList for adding new todo
    const todoList = document.querySelector("#todoList");

    // Name wird zurück gesetzt
    todoInputElem.value = "";

    // Listen element wird creiert
    const listItem = document.createElement("li");
    listItem.todo = newTodoText;

    // add text to listItem
    listItem.appendChild(document.createTextNode(newTodoText));

    // add checkbox to listItem
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    listItem.appendChild(checkbox);

    todoList.appendChild(listItem);
  }

  addTodoByEnter(e) {
    if (e.key === "Enter") {
      const todoInputElem = document.querySelector("#todo-input");
      const newTodoText = todoInputElem.value;
      const todoObj = new Todo(newTodoText, false);
      // select todoList for adding new todo
      const todoList = document.querySelector("#todoList");

      // Name wird zurück gesetzt
      todoInputElem.value = "";

      // Listen element wird creiert
      const listItem = document.createElement("li");
      listItem.todo = newTodoText;

      // add text to listItem
      listItem.appendChild(document.createTextNode(newTodoText));

      // add checkbox to listItem
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      listItem.appendChild(checkbox);

      todoList.appendChild(listItem);
    }
  }

  showOpenTodos() {
    const allCheckboxes = document.querySelectorAll("#todoList input");
    for (let todoCheckbox of allCheckboxes) {
      if (todoCheckbox.checked == true) {
        todoCheckbox.parentElement.style.display = "none";
      } else {
        todoCheckbox.parentElement.style.display = "block";
      }
    }
  }

  showDoneTodos() {
    const allCheckboxes = document.querySelectorAll("#todoList input");
    for (let todoCheckbox of allCheckboxes) {
      if (todoCheckbox.checked === true) {
        todoCheckbox.parentElement.style.display = "block";
      } else {
        todoCheckbox.parentElement.style.display = "none";
      }
    }
  }

  showAllTodos() {
    const allCheckboxes = document.querySelectorAll("#todoList input");
    for (let todoCheckbox of allCheckboxes) {
      todoCheckbox.parentElement.style.display = "block";
    }
  }

  deleteDoneTodos() {
    const allCheckboxes = document.querySelectorAll("#todoList input");
    for (let todoCheckbox of allCheckboxes) {
      if (todoCheckbox.checked === true) {
        todoCheckbox.parentElement.remove();
      }
    }
  }

  changeTodoStyle(e) {
    if (e.target.checked === true) {
      e.target.parentElement.style.textDecoration = "line-through";
    } else {
      e.target.parentElement.style.textDecoration = "none";
    }
  }
}

const myFirstTodoApp = new TodoApp();
