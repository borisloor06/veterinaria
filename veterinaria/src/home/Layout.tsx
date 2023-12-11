import { Outlet } from "react-router-dom";

import { Navbar } from "./Navbar/Navbar";

export function Layout() {
	return (
		<div className="flex">
			<Navbar />
			<div className="flex-1 p-4 overflow-y-auto h-screen">{<Outlet />}</div>
		</div>
	);
}
