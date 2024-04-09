import { useState } from "react";
import { Botao, CaixaTexto, CheckBox } from "../";
import { Icon } from "components/elementos";

export function ItemControlList({ items, onChangeItem, onDeleteItem }) {
	return (
		<ul className="remove-bullet remove-padding">
			{items.map((item) => (
				<li key={item.id} className="mb-2">
					<Item item={item} onChange={onChangeItem} onDelete={onDeleteItem} />
				</li>
			))}
		</ul>
	);
}

function Item({ item, onChange, onDelete }) {
	const [isEditing, setIsEditing] = useState(false);
	let itemContent;
	if (isEditing) {
		itemContent = (
			<>
				<CaixaTexto
					value={item.text}
					handleChange={(e) => {
						onChange({
							...item,
							text: e,
						});
					}}
				/>

				<Botao onClick={() => setIsEditing(false)}><Icon iconName="CheckCircleFill" type="inverse" /></Botao>
			</>
		);
	} else {
		itemContent = (
			<>
				{item.text}
				<Botao onClick={() => setIsEditing(true)}><Icon iconName="PenFill" type="inverse" /></Botao>
			</>
		);
	}
	return (
		<label className="d-flex">
			
			<CheckBox
				checked={item.done}
				handleChange={(e) => {
					onChange({
						...item,
						done: e.target.checked,
					});
				}}
			/>
			{itemContent}
			<Botao onClick={() => onDelete(item.id)}><Icon iconName="TrashFill" type="inverse" /></Botao>
		</label>
	);
}
