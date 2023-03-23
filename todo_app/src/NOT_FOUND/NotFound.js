import style from '../NOT_FOUND/NotFound.module.scss'
import React from "react";

export default function ErrorPage() {
    return (
        <div className={style.errorpage}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </div>
    );
}