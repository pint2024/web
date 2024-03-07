import { Contacto } from "./contacto";
import jaumzin from "assets/logo2.png";
import { Mensagem } from "./mensagem";

export const Conversa = ({ id }) => {
	return (
		<div class="card card-danger direct-chat direct-chat-danger">
			<div class="card-header">
				<h3 class="card-title">Direct Chat</h3>
				<div class="card-tools">
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
				<div class="direct-chat-messages">
					<Mensagem imagem={jaumzin} nome="Alexander Pierce" data="23 Jan 2:00 pm" mensagem="Is this template really for free? That's unbelievable!" isMe={false} />
					<Mensagem imagem={jaumzin} nome="Sarah Bullock" data="23 Jan 2:05 pm" mensagem="You better believe it!" isMe={true} />
					<Mensagem imagem={jaumzin} nome="Alexander Pierce" data="23 Jan 5:37 pm" mensagem="Working with AdminLTE on a great new app! Wanna join?" isMe={false} />
					<Mensagem imagem={jaumzin} nome="Sarah Bullock" data="23 Jan 6:10 pm" mensagem="I would love to." isMe={true} />
				</div>
				<div class="direct-chat-contacts">
					<ul class="contacts-list">
						<Contacto imagem={jaumzin} nome="Count Dracula" data="2/28/2015" mensagem="How have you been? I was..." />
						<Contacto imagem={jaumzin} nome="Nadia Jolie" data="2/20/2015" mensagem="I'll call you back at..." />
						<Contacto imagem={jaumzin} nome="Nora S. Vans" data="2/10/2015" mensagem="Where is your new..." />
						<Contacto imagem={jaumzin} nome="John K." data="1/27/2015" mensagem="Can I take a look at..." />
						<Contacto imagem={jaumzin} nome="Kennth M." data="1/4/2015" mensagem="I will be waiting for..." />
					</ul>
				</div>
			</div>
			<div class="card-footer">
				<form action="#" method="post">
					<div class="input-group">
						<input type="text" name="message" placeholder="Type Message ..." class="form-control" />
						<span class="input-group-append">
							<button type="button" class="btn btn-primary">
								Send
							</button>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
};
