import PerguntaResposta from "../components/PerguntaResposta"


export default function Ex05() {
  return (
    <div className="faq-container">
      <h1>FAQ</h1>
      <PerguntaResposta
        pergunta="O que é React?"
        resposta="Uma biblioteca JavaScript para criar interfaces."
      />
      <PerguntaResposta
        pergunta="O que é useState?"
        resposta="Um hook que permite criar estado em componentes."
      />
    </div>
  );
}