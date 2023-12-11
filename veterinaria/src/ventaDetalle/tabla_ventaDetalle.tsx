import { useGetVentasDetalle } from "./getVentasDetalle.hook";
import { ventaDetalleInitialState } from "./VentaDetalle.type";

export default function TablaVentasDetalle() {
	const ventasDetalle = useGetVentasDetalle([ventaDetalleInitialState]);

	return (
		<>
			<table className="table">
				<thead>
					<th>Detalle Producto</th>
					<th>Valor Unitario</th>
					<th>Cantidad Venta</th>
					<th>Subtotal</th>
					<th>IVA</th>
					<th>Total</th>
				</thead>
				<tbody>
					{ventasDetalle.map((ventaDetalle) => {
						return (
							<tr key={ventaDetalle._id}>
								<td>{ventaDetalle.detalle_producto}</td>
								<td>{ventaDetalle.valor_unitario}</td>
								<td>{ventaDetalle.cantidad_venta}</td>
								<td>{ventaDetalle.subtotal}</td>
								<td>{ventaDetalle.iva}</td>
								<td>{ventaDetalle.total}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
