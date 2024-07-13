class UserProfile {
	constructor() {
		this.data = {};
	}

	setData(data) {
		this.data = data;
	}

	getData() {
		return this.data;
	}

	getPermission() {
		return this.data?.perfil;
	}
}

export const userProfile = new UserProfile();
