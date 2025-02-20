import { Project } from "./project.js";
import { Todo } from "./todo.js";
import { DOM } from "./dom.js";

document.addEventListener('DOMContentLoaded', () => {
    let projects = [];
    projects.push(new Project('Default Project'));
    DOM.renderProjects(projects)


    // Handle adding a new project
    document.getElementById("add-project-btn").addEventListener("click", () => {
        const projectName = document.getElementById("new-project-name").value.trim();
        if (projectName === '') {
            return;
        }

        const newProject = new Project(projectName);
        projects.push(newProject);

        document.getElementById('new-project-name').value = "";
        DOM.renderProjects(projects);
    });


    // Handle adding a new todo
    document.getElementById('todo-form').addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById('todo-title').value.trim();
        const description = document.getElementById('todo-description').value.trim();
        const dueDate = document.getElementById('todo-dueDate').value;
        const priority = document.getElementById('todo-priority').value;
        const notes = document.getElementById('todo-notes').value.trim();

        if (title === "" || dueDate === "") return;

        const newTodo = new Todo(title, description, dueDate, priority, notes);

        projects[0].addToDo(newTodo);

        document.getElementById('todo-form').reset();
        DOM.renderTodos(projects[0])
    })

})