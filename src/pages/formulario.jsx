import { useState } from 'react';
import { db } from '../firebase'; 
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [motivo, setMotivo] = useState('');
  const [hora, setHora] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !motivo || !hora) {
      setMensaje("Por favor completa todos los campos.");
      return;
    }

    try {
    
      await addDoc(collection(db, 'citas'), {
        nombre,
        motivo,
        hora,
        fecha: Timestamp.now(),
      });

      setMensaje("✅ Cita agendada con éxito.");
      setNombre('');
      setMotivo('');
      setHora('');
    } catch (error) {
      console.error("Error al agendar cita:", error);
      setMensaje("❌ Ocurrió un error al agendar la cita.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Agendar una Cita</h2>

      {mensaje && <div className="alert alert-info">{mensaje}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Motivo</label>
          <input
            type="text"
            className="form-control"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Hora</label>
          <input
            type="time"
            className="form-control"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Agendar Cita
        </button>
      </form>
    </div>
  );
}
