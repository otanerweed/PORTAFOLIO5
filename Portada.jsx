import React from "react";

function Portada() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        overflow: "hidden",
        color: "#ffffff"
      }}
    >
      {/* Imagen de fondo SIN opacidad */}
      <img
        src="/images/image.png"
        alt="Fondo decorativo"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1
        }}
      />

      {/* Capa de desenfoque opcional */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)", // oscurece ligeramente para contraste
          zIndex: -1
        }}
      />

      {/* Contenido principal */}
      <div className="container mt-5">
        {/* Encabezado */}
        <div
          className="p-4 mb-4 rounded text-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.6)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#ffffff"
          }}
        >
          <h1 className="display-4 fw-bold" style={{ letterSpacing: "1px" }}>
            Portafolio Profesional
          </h1>
          <p className="fs-5" style={{ opacity: 0.95 }}>
            Renato Aurora — <span className="fst-italic">Desarrollo de Sistemas de Información</span>
          </p>
        </div>

        {/* Foto y presentación */}
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4">
            <img
              src="/images/foto1.jpg"
              alt="Renato Aurora"
              className="img-fluid rounded-circle shadow-lg border border-4 border-light"
              style={{ maxWidth: "230px" }}
            />
          </div>
          <div className="col-md-8">
            <h2 className="fw-semibold" style={{ fontSize: "2rem", color: "#e2e8f0" }}>
              ¡Hola! Soy Renato Aurora
            </h2>
            <p className="fs-5" style={{ lineHeight: "1.8", color: "#f8fafc" }}>
              Estudiante comprometido con el desarrollo de soluciones innovadoras en sistemas de información.
              Este portafolio recopila mis principales trabajos, logros académicos y avances profesionales
              dentro de mi formación en IDAT.
            </p>

            <a
              href="#"
              className="btn btn-outline-light rounded-pill px-4 py-2 mt-2 fw-semibold"
              style={{
                borderWidth: "2px",
                transition: "all 0.3s ease-in-out",
                letterSpacing: "0.5px"
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#ffffff10")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
            >
              Conocer más
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-5">
          <hr style={{ borderColor: "#ccc" }} />
          <img
            src="/images/foto2.jpg"
            alt="Logo IDAT"
            style={{ width: "60px", marginBottom: "10px" }}
          />
          <p className="text-light mb-0" style={{ fontSize: "0.9rem" }}>
            © 2025 - Instituto IDAT | Desarrollado por Renato Aurora
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Portada;
