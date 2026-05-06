import PerguntaResposta from "../components/PerguntaResposta"


export default function Ex14() {
  return (
    <div className="faq-container">
      <h1>FAQ</h1>
        <PerguntaResposta
        pergunta="Qual é a função do useEffect?"
        resposta="O useEffect é um hook do React que serve para executar efeitos colaterais nos componentes, como buscar dados, mostrar alertas ou interagir com APIs. Ele roda após a renderização do componente e pode ser controlado por um array de dependências, definindo quando deve ser executado."
      />
    </div>
  );
}