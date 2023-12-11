/* eslint-disable prettier/prettier */
import React from "react";

export function Contact() {
  return (
    <section className="contact bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-4">Contacto</h2>
        <p className="text-center text-gray-700">
          ¿Tienes alguna pregunta o necesitas programar una cita? ¡Contáctanos!
        </p>
        <form className="mt-8 max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">Nombre:</label>
            <input type="text" id="name" name="name" required className="form-input" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required className="form-input" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium">Mensaje:</label>
            <textarea id="message" name="message" rows={4} required className="form-textarea"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </section>
  );
}
