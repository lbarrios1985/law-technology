import React from "react";

const Members = () => {
  return (
    <div id="Nuestro Equipo">
      <section id="members" style={members}>
        <h2>Nuestro Equipo</h2>
        <p>Conoce a nuestro equipo de abogados especializados en tecnología.</p>
        <div className="member">
          <img src="https://via.placeholder.com/150" alt="Miembro 1" />
          <h3>Nombre Miembro 1</h3>
          <p>Abogado especializado en propiedad intelectual.</p>
        </div>
      </section>
    </div>
  );
};

const members = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
};

export default Members;
