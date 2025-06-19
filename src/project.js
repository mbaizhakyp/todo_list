import { createTodo } from "./todo";

export function createProject(name) {
  return {
    name,
    todos: [],
    addTodo(title, description, dueDate, priority) {
      const newTodo = createTodo(title, description, dueDate, priority);
      this.todos.push(newTodo);
      console.log(`Added todo ${newTodo}`);
      return newTodo;
    },
    addTodoObject(todo) {
      this.todos.push(todo);
    },
  };
}
