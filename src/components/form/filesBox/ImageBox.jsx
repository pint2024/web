import React, { useState } from "react";

export const ImageBox = ({ disabled, handleChange, allowMultiple = false }) => {
	const [selectedFiles, setSelectedFiles] = useState([]);

	const handleInputChange = (event) => {
		const files = Array.from(event.target.files);
		setSelectedFiles(files);
		handleChange(files);
		// Pode adicionar lógica adicional aqui para lidar com os ficheiros, como fazer upload.
	};

	return (
		<div>
			<input
				type="file"
				className="form-control"
				id="inputImage"
				onChange={handleInputChange}
				disabled={disabled}
				multiple={allowMultiple}
				accept="image/*"
			/>
			<div>
				{selectedFiles.length > 0 && (
					<ul>
						{selectedFiles.map((file, index) => (
							<li key={index}>{file.name}</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};
