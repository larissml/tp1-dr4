import PerguntaResposta from "../components/PerguntaResposta"


export default function Ex13() {
  return (
    <div className="faq-container">
      <h1>FAQ</h1>
       <PerguntaResposta
        pergunta="Qual é a função do useState?"
        resposta="O useState é um hook do React que serve para criar e controlar estados dentro de componentes funcionais. Ele permite armazenar valores que podem mudar ao longo do tempo, como cliques, textos ou visibilidade de elementos. Quando o estado é atualizado, o componente renderiza novamente automaticamente."
      />
    </div>
  );
}