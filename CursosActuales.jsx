import React from 'react';

const CursosActuales = () => {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#fff',
      }}
    >
      {/* Imagen de fondo */}
      <img
        src="/images/foto4.jpg"
        alt="Fondo Cursos"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2
        }}
      />

      {/* Capa oscura para contraste */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: -1
        }}
      />

      {/* Contenido central */}
      <div className="container py-5 text-center">
        <div
          className="mx-auto p-4"
          style={{
            maxWidth: '700px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '15px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            backdropFilter: 'blur(5px)'
          }}
        >
          <h2 className="mb-4" style={{ fontWeight: 'bold', color: '#38bdf8' }}>
            🏆 Cursos Actuales
          </h2>
          <ul className="list-unstyled fs-5" style={{ lineHeight: '2' }}>
            <li>✅ Investigación Ética y Responsabilidad Ciudadana</li>
            <li>✅ Desarrollo de Interfaces 2</li>
            <li>✅ Desarrollo Profesional</li>
            <li>✅ Análisis y Diseño de Sistemas Orientados a Objetos</li>
            <li>✅ Redes Informáticas</li>
            <li>✅ Programación de Base de Datos</li>
          </ul>
        </div>

        {/* Logo IDAT */}
        <div className="text-center mt-5">
          <img
            src="/images/foto2.jpg"
            alt="Logo IDAT"
            style={{
              width: '60px',
              opacity: 0.85,
              filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.3))'
            }}
          />
          <p className="text-light mt-2" style={{ fontSize: '0.9rem' }}>
            © 2025 - Instituto IDAT
          </p>
        </div>
      </div>
    </div>
  );
};

export default CursosActuales;
