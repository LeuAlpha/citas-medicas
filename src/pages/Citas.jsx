import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function Citas() {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const obtenerCitas = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'citas'));
        const citasArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCitas(citasArray);
      } catch (error) {
        console.error('Error al obtener citas:', error);
      }
    };

    obtenerCitas();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Listado de Citas</h2>
      <div className="row">
        {citas.length === 0 ? (
          <p>No hay citas registradas aún.</p>
        ) : (
          citas.map((cita) => (
            <div className="col-md-4 mb-3" key={cita.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary">{cita.nombre}</h5>
                  <p className="card-text">
                    <strong>Motivo:</strong> {cita.motivo}
                  </p>
                  <p className="card-text">
                    <strong>Hora:</strong> {cita.hora}
                  </p>
                  <p className="card-text text-muted">
                    <small>Registrada: {new Date(cita.fecha?.seconds * 1000).toLocaleString()}</small>
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
