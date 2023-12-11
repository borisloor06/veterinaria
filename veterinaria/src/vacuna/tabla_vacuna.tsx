import { useGetVacunas } from "./getVacunas.hook";
import { vacunaInitialState } from "./Vacuna.type";

export default function TablaVacunas() {
	const vacunas = useGetVacunas([vacunaInitialState]);

	return (
		<>
			<table className="table">
				<thead>
					<th>Mascota</th>
					<th>Veterinario</th>
					<th>Producto</th>
					<th>Fecha Aplicacion</th>
					<th>Dosis</th>
				</thead>
				<tbody>
					{vacunas.map((vacuna) => {
						return (
							<tr key={vacuna._id}>
								<td>{vacuna.id_mascota.nombre_mascota}</td>
								<td>{vacuna.id_veterinario.nombre}</td>
								<td>{vacuna.id_producto.nombre_producto}</td>
								<td>{vacuna.fecha_aplicacion}</td>
								<td>{vacuna.dosis}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
