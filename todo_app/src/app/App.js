// @ts-nocheck
import React from "react";
import { Todo } from "../components/todo/Todo";
import { store } from "../store/store";
import style from "./App.module.scss";
import { observer } from "mobx-react-lite";
// import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import { useState } from "react";
// import Edit from "../components/edit/Edit";
import { UserContext } from "../context";

export const App = observer(({ store, tasks }) => {
    return (
        // <UserContext.Provider value={store}>
            <div className={style.App}>
                <div className={style.title}>Todo App</div>
                <div className={style.todo__input}>
                    <Todo store={store} />
                </div>
                <div />
            </div>
        // </UserContext.Provider>
    );
});
