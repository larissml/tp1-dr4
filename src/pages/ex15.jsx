import PerguntaResposta from "../components/PerguntaResposta"


export default function Ex15() {
  return (
    <div className="faq-container">
      <h1>FAQ</h1>
        <PerguntaResposta
        pergunta="Qual é a função do useMemo?"
        resposta="O useMemo é um hook do React usado para memorizar valores calculados, evitando que eles sejam recalculados toda vez que o componente renderiza. Ele melhora a performance em operações mais pesadas, executando o cálculo apenas quando as dependências mudam."
      />
    </div>
  );
}