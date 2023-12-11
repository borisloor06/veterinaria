import { URL_AUTH } from "../../constants/constantes";
import { AuthData, Credentials, UserData } from "../Auth.type";

const authService = {
	login: async (credentials: Credentials): Promise<AuthData> => {
		try {
			const response = await fetch(`${URL_AUTH}/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(credentials),
			});
			if (response.ok) {
				const data = (await response.json()) as AuthData;

				return data;
			}
			throw new Error("Authentication failed");
		} catch (error) {
			throw new Error("Authentication failed");
		}
	},

	register: async (userData: UserData): Promise<AuthData> => {
		try {
			const response = await fetch(`${URL_AUTH}/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userData),
			});

			if (response.ok) {
				const data = (await response.json()) as AuthData;

				return data;
			}
			throw new Error("Authentication failed");
		} catch (error) {
			throw new Error("Registration failed");
		}
	},
};

export default authService;
