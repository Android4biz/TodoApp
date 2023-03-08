// @ts-nocheck
import React from "react";
import {Todo} from "../components/todo/Todo";
import { store } from "../store/store";
import style from './App.module.scss'
import { observer } from "mobx-react-lite";

export const App = observer(({ store, tasks }) => {
    
    return (
        <div className={style.App}>
            <div className={style.title}>Todo App</div>
            <div className={style.todo__input}>
                <Todo
                    value={tasks}
                    store={store}
                />
            </div>
        </div>
    );
})