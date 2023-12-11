import React from "react";

import { AuthData } from "../../../auth/Auth.type";

interface RoomsProps {
	room: string;
	user: AuthData;
	clientsRoom: any[];
	onJoinQueue: () => void;
	onCallNextClient: () => void;
	onLeaveRoom: () => void;
}

const Rooms: React.FC<RoomsProps> = ({
	room,
	user,
	clientsRoom,
	onJoinQueue,
	onCallNextClient,
	onLeaveRoom,
}) => {
	console.log(clientsRoom);

	const getVetUser = () => {
		return clientsRoom.find((client) => client?.user?.is_user === false);
	};

	return (
		<div className="max-w-2xl p-8 mx-auto my-2 bg-emerald-50 rounded-lg shadow-md">
			<h1 className="text-zinc-900">Bienvenido al consultorio {room}!</h1>
			{getVetUser() && (
				<h3 className="text-teal-800 py-2">
					Veterinario {getVetUser()?.user?.username} esta atendiendo
				</h3>
			)}
			<h3 className="text-zinc-800">Usuarios en la fila</h3>
			<ul className="h-28">
				{clientsRoom.map(
					(client) =>
						client?.user?.is_user && (
							<li
								key={client?.socketId}
								className="flex items-center justify-between py-2 border-b"
							>
								<span className="font-semibold text-teal-700">Client {client?.user?.username}</span>
								<span
									className={`text-sm ${client?.user.inQueue ? "text-green-500" : "text-red-500"}`}
								>
									({client?.user.inQueue ? "En espera" : "En sala"})
								</span>
							</li>
						)
				)}
			</ul>
			<div className="w-full p-2 border rounded d-flex justify-content-around align-items-center flex-wrap">
				<button
					className="font-bold outline w-52 my-2 p-3  border-teal-900 rounded-lg hover:bg-teal-800 hover:text-white focus:outline-none"
					onClick={onJoinQueue}
				>
					Join Queue
				</button>
				{!user.is_user && (
					<button
						className="font-bold outline w-52 my-2 p-3  border-teal-900 rounded-lg hover:bg-teal-800 hover:text-white focus:outline-none"
						onClick={onCallNextClient}
					>
						Call Next Client
					</button>
				)}
				<button
					className="font-bold outline w-52 my-2 p-3  border-teal-900 rounded-lg hover:bg-teal-800 hover:text-white focus:outline-none"
					onClick={onLeaveRoom}
				>
					Leave Room
				</button>
			</div>
		</div>
	);
};

export default Rooms;
