import { Contacto } from "./contacto";
import jaumzin from "assets/logo2.png";
import { Mensagem } from "./mensagem";

export const ListaContactos = ({ id }) => {
	return (
		<div>
			<div>
				<h3>Lista de Contactos</h3>
				<div>
					<span data-toggle="tooltip" title="3 New Messages" class="badge badge-light">
						3
					</span>
					<button type="button" class="btn btn-tool" data-card-widget="collapse">
						<i class="fas fa-minus"></i>
					</button>
					<button
						type="button"
						class="btn btn-tool"
						data-toggle="tooltip"
						title="Contacts"
						data-widget="chat-pane-toggle"
					>
						<i class="fas fa-comments"></i>
					</button>
					<button type="button" class="btn btn-tool" data-card-widget="remove">
						<i class="fas fa-times"></i>
					</button>
				</div>
			</div>
			<div class="card-body">
				<div class="direct-chat-contacts">
					<ul class="contacts-list remove-bullet">
						<Contacto imagem={jaumzin} nome="Count Dracula" data="2/28/2015" mensagem="How have you been? I was..." />
						<Contacto imagem={jaumzin} nome="Nadia Jolie" data="2/20/2015" mensagem="I'll call you back at..." />
						<Contacto imagem={jaumzin} nome="Nora S. Vans" data="2/10/2015" mensagem="Where is your new..." />
						<Contacto imagem={jaumzin} nome="John K." data="1/27/2015" mensagem="Can I take a look at..." />
						<Contacto imagem={jaumzin} nome="Kennth M." data="1/4/2015" mensagem="I will be waiting for..." />
					</ul>
				</div>
			</div>
		</div>
	);
};
