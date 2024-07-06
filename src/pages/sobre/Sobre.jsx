import { Navegar, Texto } from "components";
import { FilePresentation } from "components/common/filePresentation/FilePresentation";

export function Sobre() {
	return (
		<article>
			<section className="mt-3">
				<Texto size={5}>Vídeo</Texto>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/Oa_RSwwpPaA?si=8ghB1tpvQUgT9BCq"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</section>
			<section className="mt-3">
				<Texto size={5}>Website</Texto>
				<Navegar to={"/"}>Clique aqui</Navegar>.
			</section>
			<section className="mt-3">
				<Texto size={5}>Download App</Texto>
				<Navegar to={"/"}>Clique aqui</Navegar> para fazer o download.
			</section>
			<section className="mt-3">
				<Texto size={5}>PDF</Texto>
				<FilePresentation path="https://1drv.ms/w/s!AroeFDt5-jybtO1F37uX0yd6hhSrGA?e=PJl3vZ" displayName="Credencias" />
			</section>
			<section className="mt-3">
				<Texto size={5}>Relatório</Texto>
				<FilePresentation path="https://1drv.ms/w/s!AroeFDt5-jybtO1F37uX0yd6hhSrGA?e=PJl3vZ" displayName="Relatório" />
			</section>
		</article>
	);
}
