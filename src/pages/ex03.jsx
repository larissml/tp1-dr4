import { useState, setState } from "react";
export default function Ex03() {
   const [contador, setContador] = useState(0);

   function handleClick() {
    setContador(contador + 1);
  }
  function handleClickDiminuir() {
    setContador(contador - 1);
  }
  function handleClickZerar() {
    setContador(0);
  }
return(
    <div>
    <button onClick={handleClick}>clique aqui para aumentar</button>
    <button onClick={handleClickDiminuir}>clique aqui para diminuir</button>
    <button onClick={handleClickZerar}>clique aqui para zerar</button>
    <p>Contador: {contador}</p>
    </div>
)
    

}
