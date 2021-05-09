/* Nice To Have Features 😏

1. Add a filter which allows to display either "all todos", 
  "open todos" or "done todos"
2. Add a button which will delete all done todos

1. Step
- div with "all todos", 
  "open todos" or "done todos"
- checkbox to all 
- click-event for each
*/

// array of added todos
const listContent = [];

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

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  listItem.appendChild(checkbox);
}
