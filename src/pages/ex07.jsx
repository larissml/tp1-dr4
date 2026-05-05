import PerguntaResposta from "../components/PerguntaResposta";


export default function Ex07() {
  return (
    <div className="faq-container">
      <h1>FAQ</h1>

      <PerguntaResposta
        pergunta='O que é um "SyntheticEvent"?'
        resposta='É tipo um evento do React que funciona igual aos eventos do JavaScript, mas é padronizado. Ele serve pra garantir que tudo funcione do mesmo jeito em qualquer navegador, facilitando pra gente trabalhar com eventos.'
      />
    </div>
  );
}