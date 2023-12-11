import { useGetVeterinarias } from "./getVeterinarias.hook";
import { veterinariaInitialState } from "./Veterinaria.type";

export default function TablaVeterinaria() {
	const veterinarias = useGetVeterinarias([veterinariaInitialState]);

	return (
		<>
			<table className="table">
				<thead>
					<th>Descripcion</th>
				</thead>
				<tbody>
					{veterinarias.map((veterinaria) => {
						return (
							<tr key={veterinaria._id}>
								<td>{veterinaria.nombre_veterinaria}</td>
								<td>{veterinaria.direccion}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
