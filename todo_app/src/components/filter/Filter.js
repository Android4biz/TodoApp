import {observer} from "mobx-react-lite";
import React from "react";
import style from '../filter/Filter.module.scss'

export const Filter = observer((props) => {
    return (
        <div className={style.show__block}>
            <button
                className={style.btn__item}
                onClick={() => props.setFilter(props.name)}
                >
                    { props.name }
                </button>
        </div>
    )
})