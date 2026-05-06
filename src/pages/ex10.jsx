
import React, { useEffect } from 'react';
export default function ex10() {


    useEffect(() => {
    alert("A página foi carregada!");
  });

  return(
    <div>
      <h1>Exercício 10</h1>
      <p>um componente React que exiba um alerta quando a página for carregada.</p>
    </div>
  )
}