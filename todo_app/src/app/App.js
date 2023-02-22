// @ts-nocheck
import React from "react";
import Todo from "../components/todo/Todo";
import style from './App.module.scss'

function App({tasks, delTodo, onKeyClickEnter, addTodo}) {
    return (
        <div className={style.App}>
            <div className={style.title}>Todo App</div>
            <div className={style.todo__input}>
                <Todo
                    value={tasks}
                    remove={delTodo}
                    onKeyDown={onKeyClickEnter}
                    addTodo={addTodo}
                />
            </div>
        </div>
    );
}

export default App;