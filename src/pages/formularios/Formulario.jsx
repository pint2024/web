import Cartao from "components/cartoes/cartao/Cartao";
import { Botao } from "components/form";
import User from "assets/images/user-placeholder.png";
import { PageHeader } from "layouts/pageMenus/PageHeader";
import { AddMarginTop } from "layouts/margins/AddMarginTop";

export const Formulario = () => {
	function cartaoOptions() {
		return {
			titulo: "Por definir",
			descricao: "Por definir",
			utilizador: "João aSantos",
			date: "11/06",
			handleClick: null,
			footer: "Oi solteira?",
			route: "1",
		};
	}

	return (
		<>
			<PageHeader title={"Formulário"} content={<Botao route="criar">Criar</Botao>} />

			<div className="container">
				<AddMarginTop>
					<div className="row">
						<div className="col-md-4">
							<Cartao id={0} {...cartaoOptions()} />
						</div>
						<div className="col-md-4">
							<Cartao id={1} {...cartaoOptions()} />
						</div>
						<div className="col-md-4">
							<Cartao id={2} {...cartaoOptions()} />
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<Cartao id={3} {...cartaoOptions()} />
						</div>
						<div className="col-md-4">
							<Cartao id={4} {...cartaoOptions()} />
						</div>
						<div className="col-md-4">
							<Cartao id={5} {...cartaoOptions()} />
						</div>
					</div>
				</AddMarginTop>
			</div>
		</>
	);
};
