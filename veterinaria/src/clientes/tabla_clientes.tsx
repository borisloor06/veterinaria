import { clienteInitialState } from "./Cliente.type";
import { useGetClientes } from "./getClientes.hook";

export default function TablaClientes() {
	const clientes = useGetClientes([clienteInitialState]);

	return (
		<>
			<table className="table">
				<thead>
					<tr>
						<th>Nombres</th>
						<th>Apellidos</th>
						<th>Genero</th>
						<th>Direccion</th>
						<th>Telefono</th>
						<th>Cedula</th>
						<th>N° Mascotas</th>
					</tr>
				</thead>
				<tbody>
					{clientes.map((cliente) => {
						return (
							<tr key={cliente._id}>
								<td>{cliente.nombre}</td>
								<td>{cliente.apellido}</td>
								<td>{cliente.genero}</td>
								<td>{cliente.direccion}</td>
								<td>{cliente.telefono}</td>
								<td>{cliente.ci}</td>
								<td>{cliente.num_mascotas}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
