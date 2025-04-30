import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/fondo.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="card" style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.4)', 
        color: 'white',
        width: '80%', 
        maxWidth: '600px' 
      }}>
        <div className="card-body text-center">
          <h1 className="card-title text-primary mb-4">Bienvenido al Centro Médico</h1>
          <p className="card-text lead"> <strong> Gestión sencilla de citas médicas  </strong> </p>
          
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Link to="/formulario" className="btn btn-success">
              Agendar Cita
            </Link>
            <Link to="/citas" className="btn btn-info text-white">
              Ver Citas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
