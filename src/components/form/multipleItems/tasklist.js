import { useState } from "react";
import { Botao, CaixaTexto, CheckBox } from "../__init__";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
	return (
		<ul>
			{tasks.map((task) => (
				<li key={task.id}>
					<Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
				</li>
			))}
		</ul>
	);
}

function Task({ task, onChange, onDelete }) {
	const [isEditing, setIsEditing] = useState(false);
	let taskContent;
	if (isEditing) {
		taskContent = (
			<>
				<CaixaTexto
					value={task.text}
					handleChange={(e) => {
						onChange({
							...task,
							text: e,
						});
					}}
				/>

				<Botao handleClick={() => setIsEditing(false)}>Guardar</Botao>
			</>
		);
	} else {
		taskContent = (
			<>
				{task.text}
				<Botao handleClick={() => setIsEditing(true)}>Editar</Botao>
			</>
		);
	}
	return (
		<label className="d-flex">
			
			<CheckBox
				checked={task.done}
				handleChange={(e) => {
					onChange({
						...task,
						done: e.target.checked,
					});
				}}
			/>
			{taskContent}
			<Botao handleClick={() => onDelete(task.id)}>Apagar</Botao>
		</label>
	);
}
