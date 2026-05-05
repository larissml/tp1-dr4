import BotaoTime from "../components/botaoPlacar";

export default function Ex04() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Placar do Jogo</h1>

      <div className="container-placar">
        <BotaoTime nome="Cruzeiro" />
        <BotaoTime nome="Atlético" />
      </div>
    </div>
  );
}