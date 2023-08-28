// @ts-nocheck
import React from "react";
import { Todo } from "../components/todo/Todo";
import style from "./App.module.scss";
import { observer } from "mobx-react-lite";

export const App = observer(({ store }) => {
	return (
		<div className={style.App}>
			<div className={style.title__block}>
				<div className={style.title}>Todo App</div>
			</div>
			<div className={style.todo__input}>
				<div>
					<Todo store={store} />
				</div>
			</div>
			<div />
		</div>
	);
});
