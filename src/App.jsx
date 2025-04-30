import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">Clínica Médica</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="menuNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/formulario">Agendar Cita</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/citas">Ver Citas</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="py-4">
        <Outlet />
      </main>
    </>
  );
}
