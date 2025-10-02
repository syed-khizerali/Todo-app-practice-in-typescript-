 //'const todoForm = document.getElementById("todoForm") as HTMLFormElement;
// const todoList = document.getElementById("todoList") as HTMLUListElement;



//let todos: Todo[] = loadTodos();
// todos.forEach(addTodo);

// todoForm.addEventListener("submit", (e) => {
 //  e.preventDefault();

//  if (!todoForm.todoInput.value) return;

//  const todo: Todo = {
  //  id: Math.random().toString(36).substring(2, 9),
 //   title: todoForm.todoInput.value,
//    completed: false,
//    createdAt: new Date(),
//  };
// addTodo(todo);
//  todos.push(todo);

//  saveTodos();
//  todoForm.todoInput.value = "";
});

//function addTodo(todo: Todo) {
//  const item = document.createElement("li");
//  const label = document.createElement("label") as HTMLLabelElement;
//  const input = document.createElement("input");

//  label.setAttribute("todoId", todo.id)

//  input.type = "checkbox";
//  input.checked = todo.completed;

//  input.addEventListener("change", () => {
 //   todo.completed = input.checked;
 //   saveTodos();
  });

//  const delIcon = document.createElement("button");
//  delIcon.textContent = "del";

//  delIcon.addEventListener("click", (e) => {
  //  const targetElement = e.target as HTMLElement;
 //   const todoId =  targetElement.previousElementSibling?.getAttribute('todoid')

 //   console.log(todos)
//  todos = todos.filter((todo) => todo.id !== todoId)
 //   console.log(todos)
  //  saveTodos()
 //   targetElement.parentElement?.remove()

    // console.log(targetElement.parentElement);
  });

 // label.append(input, todo.title);
//  item.append(label, delIcon);

 // todoList.append(item);
}

// function saveTodos() {
//  localStorage.setItem("todos", JSON.stringify(todos));
}

//function loadTodos() {
//  const todoJSON = localStorage.getItem("todos");

//  if (todoJSON === null) return [];

//  return JSON.parse(todoJSON);
}

//console.log(loadTodos());
