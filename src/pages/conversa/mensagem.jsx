export function Mensagem({ imagem, nome, data, mensagem, isMe = false }) {
	return (
		<li>
			<img class="contacts-list-img" src={imagem} alt="" className="xcard-user-picture" />
			<div class="contacts-list-info">
				<span class="contacts-list-name">
					{nome}
					<small class="contacts-list-date float-right">{data}</small>
				</span>
				<span class="contacts-list-msg">{mensagem}</span>
			</div>
		</li>
	);
}
