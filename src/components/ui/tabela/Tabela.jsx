import "./tabela.css";

export function Tabela({ data, columns }) {
	return (
		<div className="table-container">
			<table className="custom-table">
				<thead>
					<tr>
						{columns.map((col, index) => (
							<th key={index}>{col.header}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{columns.map((col, colIndex) => (
								<td key={colIndex}>{row[col.id]}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
