import { useGetVeterinarios } from "./getVeterinarios.hook";
import { veterinarioInitialState } from "./Veterinario.type";

export default function TablaVeterinario() {
	const veterinarios = useGetVeterinarios([veterinarioInitialState]);

	return (
		<>
			<table className="table">
				<thead>
					<th>Veterinaria</th>
					<th>Nombre</th>
					<th>Apellido</th>
				</thead>
				<tbody>
					{veterinarios.map((veterinario) => {
						return (
							<tr key={veterinario._id}>
								<td>{veterinario.nombre_veterinaria}</td>
								<td>{veterinario.nombre}</td>
								<td>{veterinario.apellido}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
