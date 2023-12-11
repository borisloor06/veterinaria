import { useGetVentas } from "./getVentas.hook";
import { ventaInitialState } from "./Venta.type";

export default function TablaVentas() {
	const ventas = useGetVentas([ventaInitialState]);

	return (
		<>
			<table className="table">
				<thead>
					<th>Veterinaria</th>
					<th>Cliente</th>
					<th>Producto</th>
					<th>Venta Detalle</th>
					<th>Fecha Venta</th>
					<th>Descripcion</th>
				</thead>
				<tbody>
					{ventas.map((cliente) => {
						return (
							<tr key={cliente._id}>
								<td>{cliente.id_veterinaria.nombre_veterinaria}</td>
								<td>
									{cliente.id_cliente.nombre} {cliente.id_cliente.apellido}
								</td>
								<td>{cliente.id_producto.nombre_producto}</td>
								<td>{cliente.id_venta_detalle.total}</td>
								<td>{cliente.fecha_venta}</td>
								<td>{cliente.descripcion}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
