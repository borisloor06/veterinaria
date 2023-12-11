import { routes } from "./routes";

export const PrivateMenus = [
	{ title: "INICIO", link: routes.dashboard },
	{ title: "ROOMS", link: routes.rooms },
	{ title: "CITAS", link: routes.citas },
	{ title: "CLIENTES", link: routes.clientes },
	{ title: "COMPRAS", link: routes.compras },
	{ title: "DETALLE COMPRAS", link: routes.detalle_compras },
	{ title: "HABITOS MASCOTA", link: routes.habitos_mascota },
	{ title: "MASCOTAS", link: routes.mascotas },
	{ title: "PRODUCTOS", link: routes.productos },
	{ title: "PROVEEDORES", link: routes.proveedores },
	{ title: "TIPOS MASCOTA", link: routes.tipo_mascota },
	{ title: "TIPOS PRODUCTO", link: routes.tipo_producto },
	{ title: "VACUNAS", link: routes.vacunas },
	{ title: "VENTAS", link: routes.ventas },
	{ title: "DETALLE VENTAS", link: routes.detalle_ventas },
	{ title: "VETERINARIA", link: routes.veterinaria },
	{ title: "VETERINARIO", link: routes.veterinario },
];

export const PublicMenus = [
	{ title: "LOGIN", link: routes.login },
	{ title: "REGISTER", link: routes.register },
];

export const PrivatePublicMenus = [
	{ title: "INICIO", link: routes.dashboard },
	{ title: "ROOMS", link: routes.rooms },
];
