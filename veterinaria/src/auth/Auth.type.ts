export interface Credentials {
	username: string;
	password: string;
}

export interface UserData {
	username: string;
	password: string;
	isUser: boolean;
}

export interface AuthData {
	is_user: boolean;
	access_token: string;
}
