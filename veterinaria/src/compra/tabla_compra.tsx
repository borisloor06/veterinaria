import { compraInitialState } from "./Compra.type";
import { useGetCompras } from "./getCompras.hook";

export default function TablaCompra() {
	const compra = useGetCompras([compraInitialState]);

	return (
		<>
			<table className="table">
				<thead>
					<th>Veterinario</th>
					<th>Producto</th>
					<th>Proveedor</th>
					<th>Fecha Compra</th>
				</thead>
				<tbody>
					{compra.map((compra) => {
						return (
							<tr key={compra._id}>
								<td>{compra.id_veterinaria.nombre_veterinaria}</td>
								<td>{compra.id_producto.nombre_producto}</td>
								<td>
									{compra.id_proveedor.nombre_proveedor} {compra.id_proveedor.apellido_proveedor}
								</td>
								<td>{compra.fecha_compra}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
