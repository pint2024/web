import { ComboBox, Divisor, Icon, Post, Botao, Dropdown } from "components/index";
import { CONTEUDO_TIPOS, ORDER_OPTIONS } from "data/data";

export function Conteudo() {
	return (
		<div>
			<section className="d-flex gap-3">
				<div>
					<Dropdown
						items={[
							{ nome: "Evento", rota: `criar/${CONTEUDO_TIPOS.EVENTO}` },
							{ nome: "Atividade", rota: `criar/${CONTEUDO_TIPOS.ATIVIDADE}` },
							{ nome: "Recomendação", rota: `criar/${CONTEUDO_TIPOS.RECOMENDACAO}` },
							{ nome: "Espaço", rota: `criar/${CONTEUDO_TIPOS.ESPACO}` },
						]}
					>
						<Botao>
							<Icon iconName="Plus" className="text-types-inverse" />
							Adicionar
						</Botao>
					</Dropdown>
				</div>
				<div className="d-flex justify-content-end gap-3">
					<ComboBox placeholder="Recentes" options={ORDER_OPTIONS} />
					<ComboBox placeholder="Todos" options={ORDER_OPTIONS} />
				</div>
			</section>
			<section>
				{Array.from({ length: 10 }, (_, index) => (
					<>
						<Divisor />
						<Post />
					</>
				))}
			</section>
		</div>
	);
}
