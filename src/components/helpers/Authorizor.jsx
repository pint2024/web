import { userProfile } from "data/userProfile";
import { useEffect, useState } from "react";

export function Authorizor({ requiredPermission, children }) {
	const [profile, setprofile] = useState(0);

	useEffect(() => {
		const userDataFromProfile = userProfile.getPermission();
		setprofile(userDataFromProfile);
	}, []);

	const hasPermission = () => {
		if (Array.isArray(profile) && Array.isArray(requiredPermission)) {
			return profile.some((item) => requiredPermission.includes(item));
		} else if (Array.isArray(profile)) {
			return profile.includes(requiredPermission);
		} else if (Array.isArray(requiredPermission)) {
			return requiredPermission.includes(profile);
		} else {
			return profile === requiredPermission;
		}
	};

	return hasPermission() ? children : null;
}
