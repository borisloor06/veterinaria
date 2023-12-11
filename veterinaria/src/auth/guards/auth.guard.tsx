import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { routes } from "../../constants/routes";
import { AppStore } from "../../redux/store";

export const AuthGuard = () => {
	const userState = useSelector((store: AppStore) => store.user);

	return userState.access_token ? <Outlet /> : <Navigate replace to={routes.login} />;
};
