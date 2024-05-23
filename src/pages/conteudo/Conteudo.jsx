import { ORDER_OPTIONS } from "data/constants";
import { ComboBox, Divisor, Icon, Post, Botao } from "components/index";

export const Conteudo = () => {
	return (
		<div>
			<section className="d-flex">
				<div>
					<Botao route="criar">
						<Icon iconName="Plus" className="text-types-inverse" />
						Adicionar
					</Botao>
				</div>
				<div className="d-flex justify-content-end gap-2">
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
};
