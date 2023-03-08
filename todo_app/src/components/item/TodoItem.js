// @ts-nocheck
import React from "react";
import style from "./TodoItem.module.scss";
import { observer } from "mobx-react-lite";
import { store } from "../../store/store";
import { useState, useEffect } from "react";

export const TodoItem = observer(({ store }) => {
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
                    </div>
                </div>
            )}
        </ul>
    );
});
