import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";

const CompraDashboard = () => {
	const [startDate, setStartDate] = useState("2020-01-01");
	const [endDate, setEndDate] = useState("2022-01-01");
	const [selectedFields, setSelectedFields] = useState([]);
	const checkboxLabels = [
		{ key: "detalleCompra", value: "id_compra_detalle", label: "Detalle compra" },
		{ key: "veterinaria", value: "id_veterinaria", label: "Veterinaria" },
		{ key: "producto", value: "id_producto", label: "Producto" },
		{ key: "proveedor", value: "id_proveedor", label: "Proveedor" },
	];

	const buildQuery = () => {
		const selectedFieldsString = selectedFields
			.map((field) => {
				switch (field) {
					case "id_veterinaria":
						return "id_veterinaria { nombre_veterinaria direccion }";
					case "id_producto":
						return "id_producto { nombre_producto }";
					case "id_proveedor":
						return "id_proveedor { RUC nombre_proveedor apellido_proveedor }";
					case "id_compra_detalle":
						return "id_compra_detalle { cantidad_producto detalle_producto iva subtotal total valor_unitario }";
					default:
						return "";
				}
			})
			.join(" ");

		return gql`
		  query GetCompras($startDate: String!, $endDate: String!) {
			comprasByDateRange(startDate: $startDate, endDate: $endDate) {
			  ... on Compra {
				${selectedFieldsString}
				fecha_compra
			  }
			}
		  }
		`;
	};

	const [getCompras, { loading, error, data }] = useLazyQuery(buildQuery());

	const handleFilter = () => {
		getCompras({
			variables: { startDate, endDate, fields: selectedFields },
		});
	};

	const handleFieldToggle = (field) => {
		if (selectedFields.includes(field)) {
			setSelectedFields(selectedFields.filter((f) => f !== field));
		} else {
			setSelectedFields([...selectedFields, field]);
		}
	};

	const getFieldValue = (compra, field) => {
		const nestedFields = field.split(".");

		let value = compra;
		for (const nestedField of nestedFields) {
			if (value && typeof value === "object" && nestedField in value) {
				value = value[nestedField];
			} else {
				return ""; // Return an empty string if the field is not found
			}
		}

		// Check if the final value is an object and render its keys
		if (value && typeof value === "object") {
			const filteredKeys = Object.keys(value).filter((key) => key !== "__typename");

			return filteredKeys.map((key) => (
				<div key={key}>
					<strong>{key}:</strong> {value[key]}
				</div>
			));
		}

		return value;
	};

	if (loading) {
		return <p>Loading...</p>;
	}
	if (error) {
		return <p>Error: {error.message}</p>;
	}

	return (
		<div className="container mx-auto my-8">
			<div className="mb-4 flex flex-col justify-around md:flex-row md:items-center md:space-x-4">
				<div className="mb-2 md:mb-0">
					<label className="block text-sm font-medium text-gray-700">Start Date:</label>
					<input
						type="date"
						value={startDate}
						onChange={(e) => setStartDate(e.target.value)}
						className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
					/>
				</div>
				<div className="mb-2 md:mb-0">
					<label className="block text-sm font-medium text-gray-700">End Date:</label>
					<input
						type="date"
						value={endDate}
						onChange={(e) => setEndDate(e.target.value)}
						className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
					/>
				</div>
				<div className="mb-2 md:mb-0">
					<label className="block text-sm font-medium text-gray-700">Select Fields:</label>
					<div className="flex flex-wrap">
						{/* Checkbox labels */}
						{checkboxLabels.map((label) => (
							<label key={label.key} className="inline-flex items-center mr-4 mb-2">
								<input
									type="checkbox"
									checked={selectedFields.includes(label.value)}
									onChange={() => handleFieldToggle(label.value)}
									className="form-checkbox h-4 w-4 text-blue-500"
								/>
								<span className="ml-2">{label.label}</span>
							</label>
						))}
					</div>
				</div>
				<button
					onClick={handleFilter}
					className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
				>
					Apply Filter
				</button>
			</div>
			<table className="min-w-full border border-gray-300">
				<thead>
					<tr>
						{selectedFields.map((field) => (
							<th key={field} className="py-2 px-4 border-b">
								{field.charAt(0).toUpperCase() + field.slice(1)}
							</th>
						))}
						<th className="py-2 px-4 border-b">Fecha de Compra</th>
					</tr>
				</thead>
				<tbody>
					{data?.comprasByDateRange?.map((compra, index) => (
						<tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
							{selectedFields.map((field) => (
								<td key={field} className="py-2 px-4 border-b">
									{getFieldValue(compra, field)}
								</td>
							))}
							<td className="py-2 px-4 border-b">{compra.fecha_compra}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CompraDashboard;
