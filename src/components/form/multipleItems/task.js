import { useReducer } from "react";
import AddTask from "./addtask.js";
import TaskList from "./tasklist.js";


let nextId = 3;

export default function TaskApp({ options }) {
	const [tasks, dispatch] = useReducer(tasksReducer, options);

	function handleAddTask(text) {
		console.log("oi", text);
		dispatch({
			type: "added",
			id: nextId++,
			text: text,
		});
	}

	function handleChangeTask(task) {
		dispatch({
			type: "changed",
			task: task,
		});
	}

	function handleDeleteTask(taskId) {
		dispatch({
			type: "deleted",
			id: taskId,
		});
	}

	return (
		<>
			<AddTask onAddTask={handleAddTask} />
			<TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
		</>
	);
}

function tasksReducer(tasks, action) {
	switch (action.type) {
		case "added": {
			return [
				...tasks,
				{
					id: action.id,
					text: action.text,
					done: false,
				},
			];
		}
		case "changed": {
			return tasks.map((t) => {
				if (t.id === action.task.id) {
					return action.task;
				} else {
					return t;
				}
			});
		}
		case "deleted": {
			return tasks.filter((t) => t.id !== action.id);
		}
		default: {
			throw Error("Unknown action: " + action.type);
		}
	}
}
