import { compraDetalleInitialState } from "./CompraDetalle.type";
import { useGetComprasDetalles } from "./getCompraDetalles.hook";

export default function TablaCompraDetalles() {
	const compraDetalle = useGetComprasDetalles([compraDetalleInitialState]);

	return (
		<>
			<table className="table">
				<thead>
					<th>Detalle producto</th>
					<th>Valor unitario</th>
					<th>Cantidad producto</th>
					<th>Subtotal</th>
					<th>IVA</th>
					<th>Total</th>
				</thead>
				<tbody>
					{compraDetalle.map((compra) => {
						return (
							<tr key={compra._id}>
								<td>{compra.detalle_producto}</td>
								<td>{compra.valor_unitario}</td>
								<td>{compra.cantidad_producto}</td>
								<td>{compra.subtotal}</td>
								<td>{compra.iva}</td>
								<td>{compra.total}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
