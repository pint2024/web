export function isEmpty(variavel) {
	if (variavel) return false;
	else if (!variavel || variavel === null || isWhitespaces(variavel)) return true;
	return false;
}

export function isWhitespaces(variavel) {
	return variavel?.trim() === "";
}
