import { Link } from "react-router-dom";

import { Contact } from "./Contact/Contact";
import { Footer } from "./Footer/Footer";

export function HomePage() {
	return (
		<>
			<section className="bg-blue-500 text-white p-8">
				<h1 className="text-4xl font-bold">Bienvenido a Nuestra Clínica Veterinaria</h1>
				<p className="text-lg">Tu mejor amigo merece la mejor atención.</p>
				<Link
					to="/login"
					className="bg-white text-blue-500 px-4 py-2 mt-4 rounded-full hover:bg-blue-200 transition duration-300 ease-in-out"
				>
					Agenda una cita
				</Link>
			</section>

			<section className="py-8">
				<div className="container mx-auto">
					<h2 className="text-2xl font-semibold mb-4">Nuestros Servicios</h2>
					<ul className="list-disc list-inside text-lg">
						<li>Atención médica</li>
						<li>Cirugía</li>
						<li>Vacunaciones</li>
						<li>Atención de emergencia</li>
					</ul>
				</div>
			</section>

			<Contact />

			<section className="bg-gray-100 py-8">
				<div className="container mx-auto">
					<h2 className="text-2xl font-semibold mb-4">Testimonios</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="bg-white p-4 rounded-lg shadow-md">
							<blockquote className="text-gray-700">
								"La mejor clínica veterinaria que he visitado. Mi mascota recibió un trato
								excepcional."
							</blockquote>
							<p className="text-blue-500 mt-4">- Nicolle Triviño</p>
						</div>
						<div className="bg-white p-4 rounded-lg shadow-md">
							<blockquote className="text-gray-700">
								"El personal es amable y atento, y las instalaciones son impecables."
							</blockquote>
							<p className="text-blue-500 mt-4">- Larrisa Lopez</p>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
