// @ts-nocheck
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import { store } from "../src/store/store";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { TodoItem } from "./components/item/TodoItem";
import { Route, Routes, Link } from "react-router-dom";
// import { Context } from "react";
import { UserContext } from "../src/context";
// import { SomeContext } from "./context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <UserContext.Provider value={store}>
        <React.StrictMode>
            <App store={store} />
        </React.StrictMode>
    </UserContext.Provider>
);
