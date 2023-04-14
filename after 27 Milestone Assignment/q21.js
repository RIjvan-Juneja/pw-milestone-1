<!DOCTYPE html>
<html>
<head>
  <title>TODO App</title>
  <style>
    #todoList {
      list-style-type: none;
      padding: 0;
    }

    .todoItem {
      margin-bottom: 5px;
    }

    .todoItem input[type="checkbox"] {
      margin-right: 10px;
    }
  </style>
</head>
<body>
  <h1>TODO App</h1>
  <input type="text" id="todoInput" placeholder="Enter a TODO item">
  <button id="addTodoBtn">Add TODO</button>
  <ul id="todoList"></ul>

  <script>
    // Get DOM elements
    const todoInput = document.getElementById("todoInput");
    const addTodoBtn = document.getElementById("addTodoBtn");
    const todoList = document.getElementById("todoList");

    // Function to add a TODO item to the list
    const addTodo = () => {
      const todoText = todoInput.value.trim();
      if (todoText !== "") {
        const todoItem = document.createElement("li");
        todoItem.className = "todoItem";
        todoItem.innerHTML = `<input type="checkbox">${todoText}`;
        todoList.appendChild(todoItem);
        todoInput.value = "";
        todoInput.focus();
      }
    };

    // Event listener for addTodoBtn click event
    addTodoBtn.addEventListener("click", addTodo);

    // Event listener for todoInput keypress event
    todoInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        addTodo();
      }
    });
  </script>
</body>
</html>
