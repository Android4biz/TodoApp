// @ts-nocheck
import  React from "react";
import style from './Button.module.scss'

export default function Button({addTodo, handleSubmit}) {
    console.log(handleSubmit)
    return (
        <button
            className={style.btn__click}
            onClick={addTodo}
        >
            Add Task
        </button>
    );
}