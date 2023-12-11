import { createSlice } from "@reduxjs/toolkit";

import { AuthData } from "../../auth/Auth.type";
import { clearLocalStorage, persistLocalStorage } from "../../utillities/localStorage.utility";

export const EmptyUserState: AuthData = {
	is_user: true,
	access_token: "",
};

export const UserKey = "user";

export const userSlice = createSlice({
	name: "user",
	initialState: localStorage.getItem("user")
		? (JSON.parse(localStorage.getItem("user") as string) as AuthData)
		: EmptyUserState,
	reducers: {
		createUser: (state, action) => {
			console.log(action);
			const storeData = action.payload as AuthData;
			persistLocalStorage<AuthData>(UserKey, storeData);

			return storeData;
		},
		updateUser: (state, action) => {
			const result = { ...state, ...action.payload };
			persistLocalStorage<AuthData>(UserKey, result);

			return result;
		},
		resetUser: () => {
			clearLocalStorage(UserKey);

			return EmptyUserState;
		},
	},
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
