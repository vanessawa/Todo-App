/* Must Have Features 😊

1. Todos can be added using the add button
2. List all added todos
3. Added todos can be marked as done 

2. Step
- create list
- create listItem by click-event
- create array
- add listItem content to array
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
}
