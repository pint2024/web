import { useState } from "react";
import { Botao, TextBox } from "../";
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

function handleChange(e, onChange, item) {
	onChange({
		...item,
		text: e.target.value,
	});
}

function Item({ item, onChange, onDelete }) {
	const [isEditing, setIsEditing] = useState(false);
	let itemContent;
	if (isEditing) {
		itemContent = (
			<>
				<TextBox
					value={item.text}
					onChange={(e) => {
						handleChange(e, onChange, item);
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
		<label className="d-flex align-content-center">
			{item.id++}. {itemContent}
			<Botao onClick={() => onDelete(item.id)}><Icon iconName="TrashFill" type="inverse" /></Botao>
		</label>
	);
}
