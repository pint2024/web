import { Texto } from "components";
import { COMMON_SIZES } from "data/data";
import React, { useEffect, useRef, useState } from "react";

export function ComboBoxSections({ items, placeholder = "Escolha uma opção" }) {
	const [selectedItem, setSelectedItem] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const comboBoxRef = useRef(null);

	/*
	const items = [
		{
			id: 1,
			section: "Fruits",
			options: [
				{
					id: 1,
					label: "Apple",
				},
				{
					id: 2,
					label: "Banana",
				},
				{
					id: 3,
					label: "Orange",
				},
			],
		},
		{
			id: 2,
			section: "Vegetables",
			options: [
				{
					id: 1,
					label: "Carrot",
				},
				{
					id: 2,
					label: "Lettuce",
				},
				{
					id: 3,
					label: "Tomato",
				},
			],
		},
		{
			id: 3,
			section: "Vegetables",
			options: [
				{
					id: 1,
					label: "Carrot",
				},
				{
					id: 2,
					label: "Lettuce",
				},
				{
					id: 3,
					label: "Tomato",
				},
			],
		},
		{
			id: 4,
			section: "Vegetables",
			options: [
				{
					id: 1,
					label: "Carrot",
				},
				{
					id: 2,
					label: "Lettuce",
				},
				{
					id: 3,
					label: "Tomato",
				},
			],
		},
	];
	*/

	const handleSelect = (item) => {
		setSelectedItem(item.label);
		setIsOpen(false);
	};

	const handleClickOutside = (event) => {
		if (comboBoxRef.current && !comboBoxRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const styles = {
		combobox: {
			width: "250px",
			position: "relative",
			fontFamily: "Arial, sans-serif",
		},
		selectedItem: {
			padding: "10px",
			border: "1px solid #ccc",
			borderRadius: "10px",
			cursor: "pointer",
			backgroundColor: "#fff",
		},
		options: {
			position: "absolute",
			width: "100%",
			border: "1px solid #ccc",
			borderRadius: "10px",
			backgroundColor: "#fff",
			zIndex: 1,
			marginTop: "2px",
			boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
			maxHeight: '300px', // Tamanho máximo da lista de opções
            overflowY: 'auto' // Adiciona scroll vertical

		},
		section: {
			padding: "10px 0",
		},
		sectionTitle: {
			padding: "10px",
			fontWeight: "bold",
			borderBottom: "1px solid #eee",
		},
		option: {
			padding: "10px",
			cursor: "pointer",
		},
	};

	return (
		<div style={styles.combobox} ref={comboBoxRef}>
			<div style={styles.selectedItem} onClick={() => setIsOpen(!isOpen)}>
				{selectedItem || placeholder}
			</div>
			{isOpen && (
				<div style={styles.options}>
					{items.map((group, index) => (
						<div key={index} style={styles.section}>
							<div style={styles.sectionTitle}>
								<Texto size={COMMON_SIZES.FS2}>{group.section}</Texto>
							</div>
							{group.options.map((option, idx) => (
								<div key={idx} style={styles.option} onClick={() => handleSelect(option)}>
									<Texto>{option.label}</Texto>
								</div>
							))}
						</div>
					))}
				</div>
			)}
		</div>
	);
}
