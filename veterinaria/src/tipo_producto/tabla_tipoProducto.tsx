import { useGetTipoProducto } from "./getTipoProducto.hook";
import { tipoProductoInitialState } from "./TipoProducto.type";

export default function TablaTipoProducto() {
	const tiposProducto = useGetTipoProducto([tipoProductoInitialState]);

	return (
		<>
			<table className="table">
				<thead>
					<th>Nombre</th>
					<th>Descripcion</th>
				</thead>
				<tbody>
					{tiposProducto.map((tipoProducto) => {
						return (
							<tr key={tipoProducto._id}>
								<td>{tipoProducto.nombre_tp}</td>
								<td>{tipoProducto.detalle_tp}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
