// @ts-nocheck
import React from "react";
import style from "./TodoItem.module.scss";
import { useState } from "react";

export default function TodoItem(props) {
    const [strike, setStrike] = useState([])

    const toggleCompleted = (id) => {
        const updateTasks = props.todos.map((task) => {
            if (id === task.id) {
                task.completed = !task.completed
            }
            return {...task, completed: !task.completed}
        })
        setStrike(updateTasks)
    }

    return (
        <ul className={style.todo__list} >
            {props.todos.map((item, ind) =>
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
                            onClick={()=> toggleCompleted(item.id)}
                        >
                            ✔
                        </button>
                        <button
                            onClick={() => props.delTodo(item)}
                            className={style.btn + " " + style.btn__remove}
                        >
                            ✘
                        </button>
                    </div>
                </div>
            )}
        </ul>
    );
}