import { useState } from "react";
export default function BotaoTime({ nome }) {
  const [gols, setGols] = useState(0);

  return (
    <div className="card-time" >
      <h2>{nome}</h2>
      <p style={{ fontSize: '2rem', fontWeight: 'bold'}}>{gols}</p>
      <button onClick={() => setGols(gols + 1)}>Gol!</button>
    </div>
  );
}
