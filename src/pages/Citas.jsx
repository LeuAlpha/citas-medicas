import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function Citas() {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const obtenerCitas = async () => {
      const snapshot = await getDocs(collection(db, "citas"));
      const lista = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCitas(lista);
    };
    obtenerCitas();
  }, []);

  return (
    <div>
      {citas.map(cita => (
        <div key={cita.id}>
          <h3>{cita.nombre}</h3>
          <p>{cita.motivo} - {cita.hora}</p>
        </div>
      ))}
    </div>
  );
}
