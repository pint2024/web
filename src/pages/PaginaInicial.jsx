import React, { useEffect, useState } from "react";
import "./pagina-inicial.css";
import CitiesImagem from "assets/images/home/cities.png";
import FriendsImagem from "assets/images/home/friends.png";
import RecomendacoesImagem from "assets/images/home/recomendation.png";
import { PROJETO_NAME } from "data/constants";
import { Conteudo } from "./conteudo";
import { Botao } from "components";

export const PaginaInicial = () => {

	return (
		<>

			<div className="home-container">
				<section className="hero-section">
					<h1>Bem-vindo à {PROJETO_NAME}</h1>
					<p>
						Explore e descubra o melhor de cada cidade, integrando-se mais facilmente na região e na nossa
						organização.
					</p>
				</section>
				<section className="features-section">
					<div className="feature-card">
						<img src={CitiesImagem} alt="Explorar Cidades" />
						<h2>Explorar Cidades</h2>
						<p>Descubra recomendações de restaurantes, habitação, desporto, comércio, lazer e muito mais.</p>
					</div>
					<div className="feature-card">
						<img src={FriendsImagem} alt="Integração Fácil" />
						<h2>Integração Fácil</h2>
						<p>
							Conecte-se com colegas e participe em atividades extralaborais para uma integração rápida e fácil.
						</p>
					</div>
					<div className="feature-card">
						<img src={RecomendacoesImagem} alt="Recomendações" />
						<h2>Recomendações</h2>
						<p>Partilhe e descubra recomendações de locais para comer, desportar, relaxar e muito mais.</p>
					</div>
				</section>
			</div>
			<Conteudo />
		</>
	);
};
