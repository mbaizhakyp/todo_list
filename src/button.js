import { getData } from "./getTodo";

export function handleClick(manager) {
  const button = document.querySelector("#addProject");
  button.addEventListener("click", () => {
    const name = prompt("Enter a name for the new project:");
    if (name) {
      manager.addProject(name);
    }
  });
}

export function handleAdd(manager) {
  const button = document.querySelector("#addTodo");
  button.addEventListener("click", () => {
    const todoPage = document.getElementById("getTodo");
    todoPage.classList.add("show");
    getData(manager);
  });
}
