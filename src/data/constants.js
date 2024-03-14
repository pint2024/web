export const GOSTO_ANIMATION = "animation-bounce";

export const PLACEHOLDER_TEXT =
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

export const API_URL = "http://localhost:8000";

export const POSTS_TO_RENDER = 20;

export const HEADER_VH = 8;

export const FOOTER_VH = 7;

export const CONTENT_VH = 100 - (HEADER_VH + FOOTER_VH);

export const SEND_MESSAGE_DELAY = 200;

export const ROLES = {
	USER: { ID: 1, NOME: "Utilizador" },
	ADMIN: { ID: 2, NOME: "Administrador" },
};

export const STATUS = {
	ERRO: 0,
	SUCESSO: 1,
	SEM_DATA: -1,
}
