import { Navigate, Route, Routes } from "react-router-dom";

import { routes } from "../constants/routes";

interface Props {
	children: JSX.Element[] | JSX.Element;
}

export function RoutesToLogin({ children }: Props) {
	return (
		<Routes>
			{children}
			<Route path="*" element={<Navigate to={routes.login} />} />
		</Routes>
	);
}
export default RoutesToLogin;
