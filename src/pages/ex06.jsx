import PerguntaResposta from "../components/PerguntaResposta";


export default function Ex06() {
  return (
    <div className="faq-container">
      <h1>FAQ</h1>

      <PerguntaResposta
        pergunta='Qual é a diferença de passar o "handleClick" e chamar o "handleClick"?'
        resposta='Passar handleClick (onClick={handleClick}) envia a função para ser executada só quando o clique acontecer. Já chamar handleClick (onClick={handleClick()}) executa a função imediatamente durante a renderização.'
      />
    </div>
  );
}