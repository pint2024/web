import { Texto } from "components";
import { COMMON_SIZES, COMMON_TYPES } from "data/data";
import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

export function CaixaTexto({
	label = "",
	prefix = false,
	value,
	className,
	onKeyUp,
	isInvalid = false,
	handleChange,
	handleSubmit,
	isInversed = false,
	...props
}) {
	const handleSubmitEvent = (e) => {
		if (e.key === "Enter" && typeof handleSubmit === "function") {
			handleSubmit(e);
		}
	};

	return (
		<div className={className}>
			<TextField
				id="standard-basic"
				label={label}
				value={value}
				onChange={(e) => handleChange(e)}
				onKeyUp={onKeyUp ? (e) => onKeyUp(e) : (e) => handleSubmitEvent(e)}
				error={!!isInvalid}
				helperText={
					isInvalid ? (
						<Texto size={COMMON_SIZES.FS0} type={COMMON_TYPES.PERIGO}>
							{isInvalid}
						</Texto>
					) : null
				}
				InputProps={{
					startAdornment: prefix ? <InputAdornment position="start">{prefix}</InputAdornment> : null,
				}}
				fullWidth
				variant="standard"
				disabled={false}
				{...props}
				sx={
					isInversed
						? {
								input: { color: "white" }, // Text color for the input field
								label: { color: "white" }, // Text color for the label
								"& .MuiInput-underline:before": {
									borderBottomColor: "white", // Bottom border before focus
								},
								"& .MuiInput-underline:hover:before": {
									borderBottomColor: "white", // Bottom border on hover
								},
								"& .MuiInput-underline:after": {
									borderBottomColor: "white", // Bottom border after focus
								},
						  }
						: {}
				}
			/>
		</div>
	);
}
