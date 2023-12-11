import { useGetHabitoMascota } from "./getHabitoMascota.hook";
import { habitoMascotaInitialState } from "./HabitoMascota.type";

export default function TablaHabitosMascotas() {
	const habitoMascota = useGetHabitoMascota([habitoMascotaInitialState]);

	return (
		<>
			<table className="table">
				<thead>
					<th>Descripción</th>
				</thead>
				<tbody>
					{habitoMascota.map((habito) => {
						return (
							<tr key={habito._id}>
								<td>{habito.habito}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
