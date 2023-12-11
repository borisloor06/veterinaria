import { useGetTipoMascotas } from "./getTipoMascotas.hook";
import { tipoMascotaInitialState } from "./TipoMascota.type";

export default function TablaTipoMascota() {
	const tiposMascota = useGetTipoMascotas([tipoMascotaInitialState]);

	return (
		<>
			<table className="table">
				<thead>
					<th>Descripcion</th>
				</thead>
				<tbody>
					{tiposMascota.map((tipoMascota) => {
						return (
							<tr key={tipoMascota._id}>
								<td>{tipoMascota.tipo}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
