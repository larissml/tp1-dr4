export default function Ex08() {
  return (
    <div style={{ textAlign: "center"}}>
      <button
        onClick={(event) => console.log(event)}
        style={{
          padding: "10px 15px",
          border: "none",
          backgroundColor: "yellow",
          color: "white",
          cursor: "pointer"
        }}
      >
        Mostrar SyntheticEvent
      </button>
    </div>
  );
}