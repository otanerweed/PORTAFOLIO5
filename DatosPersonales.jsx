import React from 'react';

const DatosPersonales = () => {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#fff'
      }}
    >
      {/* Imagen de fondo */}
      <img
        src="/images/foto3.jpg"
        alt="Fondo sobre mí"
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

      {/* Capa oscura para mejorar contraste */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: -1
        }}
      />

      {/* Contenido */}
      <div className="container py-5">
        <div
          className="mb-4 p-4 rounded"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(5px)',
            boxShadow: '0 0 15px rgba(0,0,0,0.4)',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            textAlign: 'justify'
          }}
        >
          <p>
            Soy estudiante comprometido con mi formación profesional, siempre en búsqueda de nuevos conocimientos y habilidades. 
            A lo largo de mi carrera, he desarrollado diversos proyectos que reflejan mi esfuerzo, dedicación y crecimiento. 
            Este portafolio reúne los principales trabajos que evidencian mi aprendizaje y evolución académica.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="row g-4">
          {/* Columna 1 */}
          <div className="col-md-6">
            <div
              className="p-4 rounded"
              style={{
                background: 'rgba(30, 64, 175, 0.25)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(3px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
              }}
            >
              <h5 className="border-bottom pb-2 mb-3">📘 Datos Generales</h5>
              <p>👨‍💻 <strong>Especialidad:</strong> Desarrollo de Sistemas de Información</p>
              <p>🏫 <strong>Institución:</strong> Instituto IDAT</p>
              <p>📅 <strong>Ciclo:</strong> 3 – 2025</p>
              <p>👤 <strong>Nombre:</strong> Renato H. Aurora Y.</p>
              <p>📍 <strong>Ciudad:</strong> Lima, Perú</p>
              <p>📞 <strong>Teléfono:</strong> 935116156</p>
              <p>📧 <strong>Email:</strong> Otanerweed@gmail.com</p>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="col-md-6">
            <div
              className="p-4 rounded"
              style={{
                background: 'rgba(107, 114, 128, 0.25)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(3px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
              }}
            >
              <h5 className="border-bottom pb-2 mb-3">🌟 Fortalezas Personales</h5>
              <p>✅ Responsable y organizado</p>
              <p>✅ Aprendizaje rápido</p>
              <p>✅ Trabajo en equipo</p>
              <p>✅ Comunicación efectiva</p>
              <p>✅ Creatividad en soluciones</p>
            </div>
          </div>
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

export default DatosPersonales;
