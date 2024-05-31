import { ComboBoxSections } from "components/form/comboBox/ComboBoxSections";
import { ComboBox, Icone, Botao, Dropdown } from "components/index";
import { CONTEUDO_TIPOS, ORDER_OPTIONS, TOPICOS_OPTIONS } from "data/data";
import { ConteudoSeccoes } from "./ConteudoSeccoes";

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
							<Icone iconName="Plus" className="text-types-inverse" />
							Adicionar
						</Botao>
					</Dropdown>
				</div>
				<div className="d-flex justify-content-end gap-3">
					<ComboBox placeholder="Centros" options={ORDER_OPTIONS} />
					<ComboBoxSections items={TOPICOS_OPTIONS} />
				</div>
			</section>
			<section>
				<ConteudoSeccoes titulo={"Espaços"} routeTo={"espacos"} />
				<ConteudoSeccoes titulo={"Atividades"} routeTo={"atividades"} />
				<ConteudoSeccoes titulo={"Eventos"} routeTo={"eventos"} />
				<ConteudoSeccoes titulo={"Recomendações"} routeTo={"recomendacoes"}/>
			</section>
		</div>
	);
}
