import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contáctanos</h2>
      <p>
        Nos encanta recibir a nuestros clientes, visítanos en cualquier momento.
      </p>
      <a href="https://wa.me/+584247901015" className="whatsapp-button">
        Envíanos un mensaje
      </a>
      <address>
        Law Technology
        <br />
        Av 3 entre calle 26 y 27 CC Peckas, 3er nivel local 22
        <br />
        +584247901015
        <br />
        Horario: 9:00 AM - 5:00 PM
      </address>
    </section>
  );
};

export default ContactSection;
