// @ts-nocheck
import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import style from "./Todo.module.scss";
import Button from "../btn/Button";
import { TodoItem } from "../item/TodoItem";
import { observer } from "mobx-react-lite";
import { store } from "../../store/store";
// import Edit from "../edit/Edit";
// import { UserContext } from "../../context";

export const Todo = observer(({ store }) => {
    const [tasks, setTasks] = useState("");

    const handleChange = e => {
        setTasks(e.target.value);
    };

    const addTodo = tasks => {
        if (tasks) {
            const newItem = {
                id: nanoid(),
                value: tasks,
                completed: true,
                edit: false
            };
            store.addingTodo(newItem);
            setTasks("");
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
    };

    const keyDownHandler = event => {
        if (event.key === "Enter" && tasks.length > 1) {
            addTodo(tasks);
        } else if (event.key === "Enter" && tasks.length < 1) {
            alert("Поле ввода не содержит символы!");
        }
    };

    return (
        <div className={style.block__todo__input}>
            <div className={style.input__block}>
                <form className={style.form} onSubmit={handleSubmit}>
                    <input
                        className={style.input}
                        onChange={handleChange}
                        value={tasks}
                        onKeyDown={keyDownHandler}
                    />
                </form>
                <Button addTodo={() => addTodo(tasks)} />
            </div>
            <div className={style.block__list}>
                <TodoItem
                    store={store}
                />
            </div>
        </div>
    );
});