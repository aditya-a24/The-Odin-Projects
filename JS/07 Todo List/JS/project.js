class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addToDo(todo) {
        this.todos.push(todo);
    }

    removeToDo(todoTitle) {
        this.todos = this.todos.filter(todo => todo.title !== todoTitle);
    }
}

export { Project };