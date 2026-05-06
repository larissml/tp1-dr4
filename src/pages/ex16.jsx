import { useState, useMemo } from "react";

export default function Ex16() {
  const [numero, setNumero] = useState(0);

  const dobro = useMemo(() => {
    console.log("Calculando o dobro.");
    return numero * 2;
  }, [numero]);

  return (
    <div>
      <p>Número: {numero}</p>
      <p>Dobro: {dobro}</p>
      <button onClick={() => setNumero(numero + 1)}>
        Aumentar número
      </button>
    </div>
  );
}