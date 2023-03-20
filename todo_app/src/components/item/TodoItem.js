// @ts-nocheck
import React from "react";
import style from "./TodoItem.module.scss";
import { observer } from "mobx-react-lite";
import { store } from "../../store/store";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
// import Edit from "../edit/Edit";

export const TodoItem = observer(
    ({ store }) => {
        const [newInputValue, setNemInputValue] = useState("")
        const [edit, setEdit] = useState(false)

        const handleSubmit = e => {
            e.preventDefault();
            setNemInputValue("");
            setEdit(false)
        };

        useEffect(() => {
            if (localStorage.getItem("todos")) {
                store.todos = JSON.parse(localStorage.getItem("todos"));
            }
        }, []);

        return (
            <ul className={style.todo__list}>
                {store.todos.map((item, ind) =>
                    <div className={style.todo}>
                        <div className={style.index}>
                            {ind + 1}
                        </div>
                        <li
                            className={
                                item.completed
                                    ? style.todo__li
                                    : style.strike + " " + style.todo__li
                            }
                        >
                            {item.value}
                        </li>
                        {item.edit
                            ? true
                            : <form onSubmit={handleSubmit} edit={edit}>
                                <input
                                    className={style.textInput}
                                    value={newInputValue}
                                    onChange={(e) =>setNemInputValue(e.target.value, item.id)}
                                />
                                <button
                                    onClick={() => store.updateItem(newInputValue, item.id)}
                                    handleSubmit={handleSubmit}
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => store.toggleItemEdit(item.id)}
                                    key={item.id}
                                >
                                    Cancel
                                </button>
                            </form>}
                        <div className={style.block__btn}>
                            <button
                                className={style.btn + " " + style.btn__add}
                                key={item.id}
                                onClick={() => store.toggle(item.id)}
                            >
                                ✔
                            </button>
                            <button
                                onClick={() => store.delTodo(item.id)}
                                className={style.btn + " " + style.btn__remove}
                            >
                                ✘
                            </button>
                            <button
                                className={style.edit__item}
                                onClick={() => store.toggleItemEdit(item.id)}
                            />
                        </div>
                    </div>
                )}
            </ul>
        );
    }
);
