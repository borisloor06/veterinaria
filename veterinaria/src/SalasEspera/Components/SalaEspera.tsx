import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { io, Socket } from "socket.io-client"; // Make sure to import Socket type

import { URL_SOCKET } from "../../constants/constantes";
import { AppStore } from "../../redux/store";
import { SelectedRoomState } from "../interfaces/room.types";
import EntryRooms from "./Entry/EntryRooms";
import Rooms from "./Rooms/Rooms";

const SalaEspera = () => {
	const userState = useSelector((store: AppStore) => store.user);
	const socketRef = useRef<Socket | null>(null); // Use a ref to hold the socket instance
	const [selectedRoom, setSelectedRoom] = useState<SelectedRoomState>({
		room: "",
		clientsRoom: [],
	});

	const handleRoomSelect = (room: string) => {
		if (socketRef.current) {
			socketRef.current.emit("joinRoom", { room }, (clientsRoom: any[]) => {
				console.log(room, clientsRoom);
				setSelectedRoom({ room, clientsRoom });
			});
		}
	};

	const handleUpdateQueue = (clients: any[]) => {
		console.log("Queue updated:", clients);
		setSelectedRoom((prev) => ({ ...prev, clientsRoom: clients }));
	};

	const handleJoinQueue = () => {
		console.log("joinQueue");
		console.log(socketRef.current);
		console.log(selectedRoom.room);
		if (socketRef.current) {
			socketRef.current.emit("unirseCola", { room: selectedRoom.room });
		}
	};

	const handleCallNextClient = () => {
		if (socketRef.current) {
			console.log(selectedRoom);
			socketRef.current.emit("callNextClient", { room: selectedRoom.room });
		}
	};

	const handleLeaveRoom = () => {
		if (socketRef.current) {
			socketRef.current.disconnect();
			window.location.reload();
		}
	};

	useEffect(() => {
		if (userState.access_token) {
			socketRef.current = io(URL_SOCKET, {
				extraHeaders: {
					Authorization: `Bearer ${userState.access_token}`,
				},
				autoConnect: false,
				forceNew: false,
				reconnection: true,
			});
			socketRef.current.connect();
		}

		return () => {
			console.log("disconnected");
			if (socketRef.current) {
				socketRef.current.off("updateQueue", handleUpdateQueue);
				socketRef.current.disconnect();
			}
		};
	}, [userState.access_token]);

	useEffect(() => {
		if (socketRef.current) {
			socketRef.current.on("updateQueue", handleUpdateQueue);
		}
	}, []);

	return (
		<div>
			{!selectedRoom.room ? (
				<EntryRooms onRoomSelect={handleRoomSelect} />
			) : (
				<Rooms
					room={selectedRoom.room}
					user={userState}
					clientsRoom={selectedRoom.clientsRoom}
					onJoinQueue={handleJoinQueue}
					onCallNextClient={handleCallNextClient}
					onLeaveRoom={handleLeaveRoom}
				/>
			)}
		</div>
	);
};

export default SalaEspera;
