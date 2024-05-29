export function Imagem({alt = "", ...props}) {
	return (
		<>
			<img alt={alt} {...props}/>
		</>
	);
};