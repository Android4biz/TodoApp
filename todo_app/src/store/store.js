// @ts-nocheck
import { makeAutoObservable } from "mobx";

class TodoStore {
    todos = []
    constructor() {
        makeAutoObservable(this);
    }

    delTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }

    addingTodo = todo => {
        this.todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(this.todos));
    };

    toggle(id) {
        const tgl = this.todos.map(item => {
            if (id === item.id) {
                item.completed = !item.completed;
                localStorage.setItem("todos", JSON.stringify(this.todos));
            }
            return { ...item, completed: !item.completed };
        });
        return tgl;
    }

    toggleItemEdit(id) {
        const tglItemEdit = this.todos.map(item => {
            if (id === item.id) {
                item.edit = !item.edit;
                localStorage.setItem("todos", JSON.stringify(this.todos));
            }
            return { ...item, edit: !item.edit };
        });
        return tglItemEdit;
    }

    editItem(id, newName) {
        this.todos = this.todos.map(elem => {
            if (id === id.elem) {
                return { ...elem, name: newName };
            }
            return elem;
        });
    }

    updateItem = (newInputValue, id) => {
        this.todos.map((todo) => {
            if (todo.id === id) {
                todo.value = newInputValue
            }
            return todo
        })
    }
}

export const store = new TodoStore();
