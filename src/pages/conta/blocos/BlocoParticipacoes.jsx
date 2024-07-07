import { Contentor, Navegar, Texto } from "components/index";

export function BlocoParticipacoes({ data }) {
	return (
		<Contentor>
			<Texto size={2}>Eventos em que estou a participar!</Texto>
			<div>
				{data?.map((item, index) => (
					<>
						<Navegar to={`/conteudos/${item.participante_conteudo.id}`}>{item.participante_conteudo.titulo}</Navegar>
						{index < data.length - 1 && ", "}
					</>
				))}
			</div>
		</Contentor>
	);
}
