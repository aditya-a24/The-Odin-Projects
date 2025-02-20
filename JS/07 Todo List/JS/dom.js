// import { Todo } from "./todo.js";
// import { Project } from "./project.js";

class DOM {
    static renderProjects(projects) {
        const projectContainer = document.getElementById('project-list');
        projectContainer.innerHTML = '';
        projects.forEach((project, index) => {
            const projectElement = document.createElement('div');
            projectElement.textContent = project.name;
            projectElement.dataset.index = index;
            projectElement.addEventListener('click', () => DOM.renderTodos(project));
            projectContainer.appendChild(projectElement);
        });
    }

    static renderTodos(project) {
        const todoContainer = document.getElementById('todo-list');
        todoContainer.innerHTML = '';
        project.todos.forEach(todo => {
            const todoElement = document.createElement('div');
            todoElement.innerHTML = `
            <h3>${todo.title}</h3>
            <p>${todo.description}</p>
            <p>Due: ${todo.dueDate}</p>
            <p>Priority: ${todo.priority}</p>
            <button class="delete-todo">Delete</button>
            `;

            todoElement.querySelector('.delete-todo').addEventListener('click', () => {
                project.removeToDo(todo.title);
                DOM.renderTodos(project);
            });

            todoContainer.appendChild(todoElement);
        })
    }
}

export { DOM };