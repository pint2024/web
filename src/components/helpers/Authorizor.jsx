import { EnumConstants } from "data/enum.constants";
import { userProfile } from "data/userProfile";
import { useEffect, useState } from "react";
import { AuthorizorHelper } from "./AuthorizorHelper";

export function Authorizor({ requiredPermission, children }) {
	const [profile, setprofile] = useState(0);

	useEffect(() => {
		const userDataFromProfile = userProfile.getPermission();
		setprofile(userDataFromProfile);
	}, []);

	const hasPermission = () => {
		return AuthorizorHelper.verifyPermission(profile, requiredPermission);
	};

	return hasPermission() ? children : null;
}
