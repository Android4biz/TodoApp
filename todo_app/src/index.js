// @ts-nocheck
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import { store } from "../src/store/store";
// import {
//     BrowserRouter,
//     createBrowserRouter,
//     RouterProvider
// } from "react-router-dom";
// import { TodoItem } from "./components/item/TodoItem";
// import { Route, Routes, Link } from "react-router-dom";
// import ErrorPage from "./router/error-page";

// import { UserContext } from "../src/context";

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <App />,
//         errorElement: <ErrorPage/>
//     },
// ])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App store={store} />
    </React.StrictMode>
);
{
    /* </UserContext.Provider> */
}
{
    /* <UserContext.Provider value={'UserContext'} > */
}
// <UserContext.Provider value={FILTER_MAP}>
{
    /* </UserContext.Provider> */
}
{
    /* <BrowserRouter>
    <Routes>
        <Route path="/" element={<App store={store} />} />
    </Routes>
</BrowserRouter> */
}
