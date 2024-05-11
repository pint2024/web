export function PageHeader({ title, content = ""}) {
	return (
		<div>
			<div>
				<h1 className="titulo-pag">{title}</h1>
			</div>
			<div className="d-flex">
				{content && <div>{content}</div>}
			</div>
		</div>
	);
}
