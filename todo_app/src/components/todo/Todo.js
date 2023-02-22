// @ts-nocheck
import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import style from "./Todo.module.scss";
import Button from "../btn/Button";
import TodoItem from "../item/TodoItem";

function Todo({handleClick}) {
    const [tasks, setTasks] = useState('');
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem('todos'))
    );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    

    const handleChange = e => {
        setTasks(e.target.value);
    };

    const addTodo = (tasks) => {
        if (tasks) {
            const newItem = {
                id: nanoid(),
                value: tasks,
                completed: true
            }
            setTodos([...todos, newItem])
            setTasks("");
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const keyDownHandler = event => {
        if (event.key === "Enter" && tasks.length > 1) {
            addTodo(tasks)
        } else if (event.key === "Enter" && tasks.length < 1) {
            alert("Поле ввода не содержит символы!");
        }
    };

    const delTodo = text => {
        const newTodos = todos.filter(t => {
            return t !== text;
        });
        setTodos(newTodos);
    };

    return (
        <div className={style.block__todo__input}>
            <div className={style.input__block}>
                <form className={style.form} onSubmit={handleSubmit}>
                    <input
                        className={style.input}
                        onChange={handleChange}
                        value={tasks}
                        onKeyDown={keyDownHandler}
                    />
                </form>
                <Button addTodo={()=>addTodo(tasks)}/>
            </div>
            <div className={style.block__list}>
                <TodoItem
                    todos={todos}
                    delTodo={delTodo}
                    handleClick={handleClick}
                />
            </div>
        </div>
    );
}

export default Todo;