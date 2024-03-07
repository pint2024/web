export function isEmpty(variavel) {
	if (!variavel || isWhitespaces(variavel) || variavel === null)
		return true;
	return false;
}

export function isWhitespaces(variavel) {
    return variavel.trim() === '';
}