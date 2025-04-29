import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

export default function Formulario() {
  const [nombre, setNombre] = useState("");
  const [motivo, setMotivo] = useState("");
  const [hora, setHora] = useState("");

  const agendarCita = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "citas"), { nombre, motivo, hora });
    setNombre("");
    setMotivo("");
    setHora("");
  };

  return (
    <form onSubmit={agendarCita}>
      <input placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input placeholder="Motivo" value={motivo} onChange={(e) => setMotivo(e.target.value)} />
      <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
      <button type="submit">Agendar Cita</button>
    </form>
  );
}
