import jaumzin from "assets/images/logo2.png";

export class DTO {
	static createDTOs(array, dtoClass) {
		return array.map((item) => new dtoClass(item));
	}
}
