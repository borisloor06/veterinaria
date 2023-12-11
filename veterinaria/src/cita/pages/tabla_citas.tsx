import { citasInitialState } from "../Cita.type";
import { useGetCitas } from "../hooks/getCitas.hook";

export default function TablaCitas() {
	const citas = useGetCitas([citasInitialState]);

	return (
		<>
			<table className="table">
				<thead>
					<th>Veterinario</th>
					<th>Cliente</th>
					<th>Fecha Programada</th>
				</thead>
				<tbody>
					{citas.map((cita) => {
						return (
							<tr key={cita._id}>
								<td>
									{cita.id_veterinario.nombre} {cita.id_veterinario.apellido}
								</td>
								<td>
									{cita.id_cliente.nombre} {cita.id_cliente.apellido}
								</td>
								<td>{cita.fecha_programada.toLocaleString()}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
