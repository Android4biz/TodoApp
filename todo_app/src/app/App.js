// @ts-nocheck
import React from "react";
import { Todo } from "../components/todo/Todo";
import { store } from "../store/store";
import style from "./App.module.scss";
import { observer } from "mobx-react-lite";
import {
    Route,
    Routes,
    Link,
    BrowserRouter,
    createBrowserRouter
} from "react-router-dom";
import { useState } from "react";
import { Filter } from "../components/filter/Filter";

export const App = observer(({ store }) => {

    return (
        <div className={style.App}>
            <div className={style.title__block}>
                <div className={style.title}>Todo App</div>
            </div>
            <div className={style.todo__input}>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Todo store={store} />} />
                    </Routes>
                </BrowserRouter>
                </div>
            </div>
            <div />
        </div>
    );
});