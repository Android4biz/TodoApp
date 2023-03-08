// @ts-nocheck
import {observer} from "mobx-react-lite";
import  React from "react";
import style from './Button.module.scss'

function Button({addTodo, tasks}) {
    return (
        <button
            className={style.btn__click}
            onClick={() => addTodo(tasks)}
        >
            Add Task
        </button>
    );
}

export default observer(Button)