// @ts-nocheck
import React, { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { App } from "./app/App"
import { store } from "../src/store/store"
import {
    // createBrowserRouter,
    RouterProvider,
    // HashRouter,
    createHashRouter
} from "react-router-dom"
import NotFound from "../src/NOT_FOUND/NotFound"

const router = createHashRouter([
    {
        path: "/",
        element: <App store={store}/>,
    },
    {
        path: "*",
        element: <NotFound/>,
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
