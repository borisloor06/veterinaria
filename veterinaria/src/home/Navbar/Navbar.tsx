import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { PrivateMenus, PrivatePublicMenus, PublicMenus } from "../../constants/menu";
import { routes } from "../../constants/routes";
import { AppStore } from "../../redux/store";
import Logout from "../Logout/Logout";

export const Navbar = () => {
	const [open, setOpen] = useState(true);
	const userState = useSelector((store: AppStore) => store.user);

	const menus = userState.access_token
		? userState.is_user
			? PrivatePublicMenus
			: PrivateMenus
		: PublicMenus;

	const home = userState.access_token ? routes.dashboard : routes.home;

	return (
		<div
			className={` ${
				open ? "w-56" : "w-20 "
			} bg-dark-purple h-screen p-5  pt-8 relative duration-300 h-screen`}
		>
			<img
				src="./src/assets/control.png"
				className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
					 border-2 rounded-full  ${!open && "rotate-180"}`}
				onClick={() => setOpen(!open)}
			/>
			<div className="flex gap-x-4 flex-column items-center">
				<NavLink to={home}>
					<img
						src="./src/assets/logo.png"
						className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
					/>
				</NavLink>
				{userState.access_token && <Logout />}
			</div>
			<ul className="pt-6 w-44 overflow-y-auto h-4/5">
				{menus.map((Menu, index) => (
					<li key={index}>
						<NavLink
							className={({ isActive, isPending }) =>
								isActive
									? `flex text-teal-500 rounded-md p-2 w-full cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
									 ${!open && "hidden"} origin-left duration-200 text-decoration-none bg-light-white`
									: `flex  rounded-md p-2 w-full cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
									 ${!open && "hidden"} origin-left duration-200 text-decoration-none`
							}
							to={Menu.link}
						>
							{Menu.title}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};
