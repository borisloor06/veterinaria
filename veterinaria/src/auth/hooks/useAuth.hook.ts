import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { routes } from "../../constants/routes";
import { createUser } from "../../redux/states/user";
import { AuthData, Credentials } from "../Auth.type";
import authService from "../service/auth.service";

interface UseAuth {
	login: (userData: Credentials) => Promise<void>;
	dispatchLogin: (authData: AuthData) => void;
}

const useAuth = (): UseAuth => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const dispatchLogin = (authData: AuthData) => {
		dispatch(createUser({ ...authData }));
		navigate(`${routes.home}`, { replace: true });
	};

	const login = async (userData: Credentials) => {
		const authData = await authService.login(userData);

		dispatchLogin(authData);
	};

	return { login, dispatchLogin };
};

export default useAuth;
