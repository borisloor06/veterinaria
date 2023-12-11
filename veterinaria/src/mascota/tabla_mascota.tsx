import { useGetMascotas } from "./getMascotas.hook";
import { mascotaInitialState } from "./Mascota.type";

export default function TablaMascotas() {
	const mascotas = useGetMascotas([mascotaInitialState]);

	return (
		<>
			<table className="table">
				<thead>
					<th>Cliente</th>
					<th>Tipo Mascota</th>
					<th>habito</th>
					<th>Nombre Mascota</th>
					<th>Fecha Nacimiento</th>
					<th>Genero</th>
					<th>Color</th>
					<th>Esterilizacion</th>
				</thead>
				<tbody>
					{mascotas.map((mascota) => {
						return (
							<tr key={mascota._id}>
								<td>
									{mascota.id_cliente.nombre} {mascota.id_cliente.apellido}
								</td>
								<td>{mascota.id_tipo_mascota.tipo}</td>
								<td>{mascota.id_habito.habito}</td>
								<td>{mascota.nombre_mascota}</td>
								<td>{mascota.fecha_nacimiento}</td>
								<td>{mascota.genero}</td>
								<td>{mascota.color}</td>
								<td>{mascota.esterilizacion}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
