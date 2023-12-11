import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { routes } from "../../constants/routes";
import { AppStore } from "../../redux/store";

export const NoAuthGuard = () => {
	const userState = useSelector((store: AppStore) => store.user);

	return !userState.access_token ? (
		<Outlet />
	) : userState.is_user ? (
		<Navigate replace to={routes.rooms} />
	) : (
		<Navigate replace to={routes.citas} />
	);
};
