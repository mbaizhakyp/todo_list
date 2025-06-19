import "./styles.css";
import { projectManager } from "./projectManager";
import { handleClick, handleAdd } from "./button";
import { closeForm } from "./getTodo";

const manager = projectManager();
handleClick(manager);
manager.displayProject();
handleAdd(manager);
closeForm();
