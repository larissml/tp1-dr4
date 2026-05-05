import { useState } from "react";

export default function PerguntaResposta({ pergunta, resposta }) {
  const [visivel, setVisivel] = useState(false);

  return (
    <div className="faq-card">
      <div className="faq-pergunta">{pergunta}</div>
      {visivel && (
        <div className="faq-resposta">{resposta}</div>
      )}
      <button
        className={`faq-botao ${visivel ? "ocultar" : ""}`}
        onClick={() => setVisivel(!visivel)}
      >
        {visivel ? "Ocultar" : "Ver"}
      </button>
    </div>
  );
}