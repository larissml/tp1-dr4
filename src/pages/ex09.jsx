import PerguntaResposta from "../components/PerguntaResposta";

export default function Ex09() {
  return (
    <div className="faq-container">
      <h1>FAQ</h1>

      <PerguntaResposta
        pergunta="Quais são as desvantagens de se colocar funções de seta inline para o tratamento de eventos?"
        resposta="Uma desvantagem é que a função é criada toda vez que o componente renderiza, o que pode deixar a aplicação um pouco menos performática. Além disso, pode dificultar a leitura do código quando tem muita lógica dentro do JSX."
      />
    </div>
  );
}