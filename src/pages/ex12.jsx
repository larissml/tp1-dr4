import PerguntaResposta from "../components/PerguntaResposta"


export default function Ex12() {
  return (
    <div className="faq-container">
      <h1>FAQ</h1>
       <PerguntaResposta
        pergunta="O que são hooks? Cite exemplos de uso."
        resposta="Hooks são funções do React que permitem usar estado e outras funcionalidades dentro de componentes funcionais, sem precisar usar classes. Eles facilitam a organização e reutilização de lógica. Alguns exemplos são o useState, que serve para controlar estados (como mostrar ou esconder algo na tela), e o useEffect, que é usado para executar ações quando o componente renderiza, como buscar dados ou mostrar um alert."
      />
    </div>
  );
}