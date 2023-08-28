// @ts-nocheck
import React from "react";
import style from "./TodoItem.module.scss";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Filter } from "../filter/Filter";

const FILTER_MAP = {
    All: () => true,
    Active: task => task.completed,
    Completed: task => !task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

export const TodoItem = observer(({ store }) => {
    const [newInputValue, setNemInputValue] = useState("");
    const [filter, setFilter] = useState("All");

    const filterList = FILTER_NAMES.map(name =>
        <Filter
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    );

    const handleSubmit = e => {
        e.preventDefault();
        setNemInputValue("");
    };

    useEffect(() => {
        if (localStorage.getItem("todos")) {
            store.todos = JSON.parse(localStorage.getItem("todos"));
        }
    }, []);

    return (
        <ul className={style.todo__list}>
            <div className={style.filterlist}>
                { filterList }
            </div>
            {store.todos.filter(FILTER_MAP[filter]).map((item, ind) =>
                <div className={style.todo}>
                    <div className={style.index}>
                        {ind + 1}
                    </div>
                    <li
                        className={
                            item.completed
                                ? style.todo__li
                                : style.strike + " " + style.todo__li
                        }
                    >
                        {item.value}
                    </li>
                    {item.edit
                        ? true
                        : <form onSubmit={handleSubmit}>
                              <input
                                  className={style.textInput}
                                  value={newInputValue}
                                  onChange={e =>
                                      setNemInputValue(e.target.value, item.id)}
                              />
                              <button
                                  onClick={() =>
                                      store.updateItem(newInputValue, item.id)}
                                  handleSubmit={handleSubmit}
                              >
                                  Update
                              </button>
                              <button
                                  onClick={() => store.toggleItemEdit(item.id)}
                                  key={item.id}
                              >
                                  Cancel
                              </button>
                          </form>}
                    <div className={style.block__btn}>
                        <button
                            className={style.btn + " " + style.btn__add}
                            key={item.id}
                            onClick={() => store.toggle(item.id)}
                        >
                            ✔
                        </button>
                        <button
                            onClick={() => store.delTodo(item.id)}
                            className={style.btn + " " + style.btn__remove}
                        >
                            ✘
                        </button>
                        <button
                            className={style.edit__item}
                            onClick={() => store.toggleItemEdit(item.id)}
                        />
                    </div>
                </div>
            )}
        </ul>
    );
});