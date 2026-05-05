export default function Ex01() {
  return (
    <div>
      <button
        onClick={() => alert("Botão clicado!")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >clique aqui</button>
    </div>
  );
}
