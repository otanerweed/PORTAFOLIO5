import React from 'react';

const LogrosAcademicos = () => {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#fff',
        overflow: 'hidden'
      }}
    >
      {/* Fondo con imagen */}
      <img
        src="/images/foto5.jpg"
        alt="Fondo Logros"
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
            maxWidth: '800px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '15px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            backdropFilter: 'blur(5px)'
          }}
        >
          <h2 className="mb-4" style={{ fontWeight: 'bold', color: '#f59e0b' }}>
            🥇 Logros Académicos
          </h2>
          <ul className="list-unstyled fs-5" style={{ lineHeight: '2' }}>
            <li>✅ Promedio de 20.00 en “Lectura Crítica y Argumentación”</li>
            <li>✅ 19.40 en “Soporte de TI”</li>
            <li>✅ Seminario en Tecnología e Inteligencia Artificial</li>
            <li>✅ 18.00 en “Desarrollo de Habilidades Intrapersonales”</li>
            <li>✅ Aprobación destacada en “Herramientas Ofimáticas para la Investigación”</li>
            <li>✅ 17.80 en “Fundamentos de Programación”</li>
            <li>✅ 17.40 en “Fundamentos Lógico-matemáticos para el Desarrollo de Sistemas”</li>
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

export default LogrosAcademicos;
