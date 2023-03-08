// @ts-nocheck
import { makeAutoObservable } from "mobx";

class TodoStore {
    todos = [];
    constructor() {
        makeAutoObservable(this);
    }

    delTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        localStorage.setItem('todos', JSON.stringify(this.todos))
    }

    addingTodo = todo => {
        this.todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(this.todos))
    };

    toggle(id) {
        const tgl = this.todos.map(item => {
            if (id === item.id) {
                item.completed = !item.completed;
                localStorage.setItem('todos', JSON.stringify(this.todos))
            }
            return { ...item, completed: !item.completed };
        });
        return tgl
    }
}

export const store = new TodoStore();