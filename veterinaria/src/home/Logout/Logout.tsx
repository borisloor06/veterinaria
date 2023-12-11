import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { routes } from "../../constants/routes";
import { resetUser, UserKey } from "../../redux/states/user";
import { clearLocalStorage } from "../../utillities/localStorage.utility";

function Logout() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const logOut = () => {
		clearLocalStorage(UserKey);
		dispatch(resetUser());
		navigate(routes.login, { replace: true });
	};

	return (
		<button
			onClick={logOut}
			className="align-self-start text-teal-500 border-b-2 border-b-teal-500 hover:border-b-teal-300 hover:text-teal-300"
		>
			<small>Log Out</small>
		</button>
	);
}
export default Logout;
