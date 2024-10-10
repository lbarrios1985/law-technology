import React from "react";

const SubscriptionForm = () => {
  return (
    <section className="subscription">
      <h2>Suscríbete</h2>
      <p>Inscríbete para ser el primero en saber acerca de nuestros eventos.</p>
      <form>
        <input type="email" placeholder="Correo electrónico" required />
        <button type="submit">Regístrate</button>
      </form>
    </section>
  );
};

export default SubscriptionForm;
