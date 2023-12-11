import { configureStore } from "@reduxjs/toolkit";

import { AuthData } from "../auth/Auth.type";
import userSliceReducer from "./states/user";

export interface AppStore {
	user: AuthData;
}

export default configureStore<AppStore>({
	reducer: {
		user: userSliceReducer,
	},
});
