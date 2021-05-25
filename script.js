class Todo {
  constructor(description, status) {
    this.description = description;
    this.done = status;
  }
}

class TodoApp {
  //allTodos = new Array();

  constructor() {
    // Click Event für add button
    const addBtn = document.querySelector("#addBtn");
    addBtn.addEventListener("click", this.createTodoElement);

    // Click event für add by Enter
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
    todoList.addEventListener("change", this.addCheckboxState);

    this.loadFromLocalStorage();
  }

  createTodoElement = () => {
    const todoInputElem = document.querySelector("#todo-input");
    const newTodoText = todoInputElem.value;
    // Text wird zurück gesetzt
    todoInputElem.value = "";

    if (newTodoText.length < 5) {
      alert("you have to enter at least 5 chars!");
    } else {
      const todoObj = this.renderTodo(newTodoText, false);
      this.allTodos.push(todoObj);

      this.storeInLocalStorage();
    }
  };

  // Todo: refactor accept a todo as parameter
  // render methode die alles löscht und neu darstellt
  renderTodo = (todoText, status) => {
    const todoObj = new Todo(todoText, status);
    // select todoList for adding new todo
    const todoList = document.querySelector("#todoList");

    // Listen element wird creiert
    const listItem = document.createElement("li");
    listItem.todo = todoObj;

    // add text to listItem
    listItem.appendChild(document.createTextNode(todoText));

    // add checkbox to listItem
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    listItem.appendChild(checkbox);

    todoList.appendChild(listItem);
    return todoObj;
  };

  // Arrow-Function nötig um andere Methode hier aufzurufen, da "this" sonst nicht greift.
  addTodoByEnter = (e) => {
    if (e.key === "Enter") {
      this.createTodoElement();
    }
  };

  addCheckboxState = (e) => {
    const todoState = e.target.checked;

    const currentTodo = e.target.parentElement.todo;

    currentTodo.done = todoState;

    if (todoState === true) {
      e.target.parentElement.style.textDecoration = "line-through";
    } else {
      e.target.parentElement.style.textDecoration = "none";
    }

    this.storeInLocalStorage();
  };

  showOpenTodos = () => {
    const todoObj = new Todo();
    const allCheckboxes = document.querySelectorAll("#todoList input");
    for (let todoCheckbox of allCheckboxes) {
      if (todoCheckbox.checked == true) {
        todoCheckbox.parentElement.style.display = "none";
      } else {
        todoCheckbox.parentElement.style.display = "block";
      }
    }

    this.allTodos.push(todoObj);
    this.storeInLocalStorage();
  };

  showDoneTodos = () => {
    const todoObj = new Todo();
    const allCheckboxes = document.querySelectorAll("#todoList input");
    for (let todoCheckbox of allCheckboxes) {
      if (todoCheckbox.checked === true) {
        todoCheckbox.value("true");
        todoCheckbox.parentElement.style.display = "block";
      } else {
        todoCheckbox.parentElement.style.display = "none";
      }
    }

    this.storeInLocalStorage();
  };

  showAllTodos = () => {
    const todoObj = new Todo();
    const allCheckboxes = document.querySelectorAll("#todoList input");
    for (let todoCheckbox of allCheckboxes) {
      todoCheckbox.parentElement.style.display = "block";
    }
    this.storeInLocalStorage();
  };

  deleteDoneTodos = () => {
    const todoObj = new Todo();
    const allCheckboxes = document.querySelectorAll("#todoList input");
    for (let todoCheckbox of allCheckboxes) {
      if (todoCheckbox.checked === true) {
        todoCheckbox.parentElement.remove();
      }
      this.storeInLocalStorage();
    }

    removeDoneTodosFromArray = () => {
      const todoObj = new Todo();
      const allCheckboxes = document.querySelectorAll("#todoList input");
      for (let i = 0; i != true; i++) {
        if (this.allTodos[i] === true) {
          this.allTodos.splice(i, 1);
        }
      }

      this.storeInLocalStorage();
    };
  };

  storeInLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(this.allTodos));
  };

  loadFromLocalStorage = () => {
    this.allTodos = JSON.parse(localStorage.getItem("todos"));
    this.allTodos.forEach((todoObj) =>
      this.renderTodo(todoObj.description, todoObj.done)
    );
  };
}

const myFirstTodoApp = new TodoApp();
