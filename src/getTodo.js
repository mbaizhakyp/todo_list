import { createTodo } from "./todo";

function createTodoElement(todo) {
  const item = document.createElement("div");
  item.classList.add("todo-item");
  item.innerHTML = `
    <h4>${todo.title}</h4>
    <p>${todo.description}</p>
    <p>Due: ${todo.dueDate}</p>
    <p>Priority: ${todo.priority}</p>
  `;
  return item;
}

export function getData(manager) {
  const submitButton = document.querySelector("#formSubmit");

  const handler = () => {
    const nameField = document.querySelector("#name");
    const descriptionField = document.querySelector("#description");
    const dueDateField = document.querySelector("#due");
    const priorityChoice = document.querySelector(
      'input[name="priority"]:checked'
    );

    if (
      !nameField.value ||
      !descriptionField.value ||
      !dueDateField.value ||
      !priorityChoice
    ) {
      alert("Please fill out all fields.");
      return;
    }

    const newTodo = createTodo(
      nameField.value,
      descriptionField.value,
      dueDateField.value,
      priorityChoice.value
    );

    const projectName = document.querySelector("#nameArea").textContent;
    const project = manager.projects.find((p) => p.name === projectName);

    if (project) {
      project.addTodoObject(newTodo);
      manager.save(); // <-- Save changes to localStorage
      displayAllTodos(project);
      closeForm();
    }
  };

  submitButton.removeEventListener("click", submitButton._handler);
  submitButton._handler = handler;
  submitButton.addEventListener("click", handler);
}

export function displayTodo(todo) {
  const container = document.querySelector("#ProjectItems");
  const item = createTodoElement(todo);
  container.appendChild(item);
}

export function closeForm() {
  const todoPage = document.getElementById("getTodo");
  todoPage.classList.remove("show");

  document.querySelector("#name").value = "";
  document.querySelector("#description").value = "";
  document.querySelector("#due").value = "";
  document
    .querySelectorAll('input[name="priority"]')
    .forEach((input) => (input.checked = false));
}

export function displayAllTodos(project) {
  const container = document.querySelector("#ProjectItems");
  container.innerHTML = "";
  project.todos.forEach((todo) => {
    const item = createTodoElement(todo);
    container.appendChild(item);
  });
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeForm();
});

document.getElementById("getTodo").addEventListener("click", (e) => {
  if (e.target.id === "getTodo") closeForm();
});
