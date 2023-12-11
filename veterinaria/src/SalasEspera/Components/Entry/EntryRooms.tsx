const EntryRooms = ({ onRoomSelect }: { onRoomSelect: (room: string) => void }) => {
	const rooms = ["Sala 1", "Sala 2", "Sala 3", "Sala 4"]; // Add more rooms as needed

	const joinRoom = (room: string) => {
		console.log(room);
		onRoomSelect(room);
	};

	return (
		<div className="max-w-2xl p-8 mx-auto my-2 bg-emerald-50 rounded-lg shadow-md">
			<h2 className="block mb-2">Bienvenido!</h2>
			<h1 className="text-teal-900 text-2xl font-bold mb-4">Unete a una sala de espera</h1>

			<h2 className="text-teal-900 text-lg font-bold mt-4 mb-2">Seleccione un consultorio:</h2>
			<div className="grid grid-cols-2 gap-4">
				{rooms.map((room) => (
					<button
						key={room}
						className="px-8 py-16 w-76 text-white font-bold bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
						onClick={() => joinRoom(room)}
					>
						{room}
					</button>
				))}
			</div>
		</div>
	);
};

export default EntryRooms;
