import { useReducer } from "react";
import { ItemControlAdd } from "./1ItemControlAdd";
import { ItemControlList } from "./1ItemControlList";


export function ItemControl({ options }) {
	const [items, dispatch] = useReducer(itemsReducer, options);

	function getLastId() {
		let lastId = 0;
		for (const item of items) {
			if (item.id > lastId) {
				lastId = item.id;
			}
		}
		return lastId;
	}

	function handleAddItem(text) {
		dispatch({
			type: "added",
			id: getLastId() + 1,
			text: text,
		});
	}

	function handleChangeItem(item) {
		dispatch({
			type: "changed",
			item: item,
		});
	}

	function handleDeleteItem(itemId) {
		dispatch({
			type: "deleted",
			id: itemId,
		});
	}

	return (
		<>
			<ItemControlAdd onAddItem={handleAddItem} />
			<ItemControlList items={items} onChangeItem={handleChangeItem} onDeleteItem={handleDeleteItem} />
		</>
	);
}

function itemsReducer(items, action) {
	switch (action.type) {
		case "added": {
			return [
				...items,
				{
					id: action.id,
					text: action.text,
					done: false,
				},
			];
		}
		case "changed": {
			return items.map((t) => {
				if (t.id === action.item.id) {
					return action.item;
				} else {
					return t;
				}
			});
		}
		case "deleted": {
			return items.filter((t) => t.id !== action.id);
		}
		default: {
			throw Error("Unknown action: " + action.type);
		}
	}
}
