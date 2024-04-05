import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EMOJI_LIST } from "data/constants";

import "./draftEditor.css";

/// https://jpuri.github.io/react-draft-wysiwyg/#/docs
export function DraftEditor({ label }) {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());

	return (
		<>
			{label && <label htmlFor="inputNome">{label}</label>}
			<Editor
				editorState={editorState}
				onEditorStateChange={setEditorState}
				wrapperClassName="draft-wrapper"
				editorClassName="draft-editor"
				toolbarClassName="draft-toolbar"
				placeholder="Escreva a sua atividade"
				toolbar={{
					options: [
						//"blockType",
						"inline",
						//"fontSize",
						//"fontFamily",
						"list",
						//"textAlign",
						//"colorPicker",
						"link",
						//"embedded",
						"emoji",
						//"image",
						//"remove",
						//"history",
					],
					inline: {
						//inDropdown: true,
						options: ["bold", "italic", "underline", "strikethrough"],
					},
					list: {
						//inDropdown: true,
						options: ["unordered", "ordered"],
					},
					link: {
						//inDropdown: true,
					},
				}}
				blockType={{
					inDropdown: true,
					options: ["Normal", "H1", "H2", "H3", "H4", "H5", "H6", "Blockquote", "Code"],
					className: undefined,
					component: undefined,
					dropdownClassName: undefined,
				}}
				emoji={{
					className: undefined,
					component: undefined,
					popupClassName: undefined,
					emojis: EMOJI_LIST,
				}}
			/>
		</>
	);
}
