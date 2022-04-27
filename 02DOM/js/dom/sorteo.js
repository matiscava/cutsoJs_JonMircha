const d = document;


export default function draw(btn,lista){
  const $btn = d.getElementById(btn);
  const getWinner = (selector) => {
    let $listado = d.querySelectorAll(selector),
    random = Math.floor(Math.random() * $listado.length)
    let winner = $listado[random];
    return `Ganaste un curso gratis de ${winner.textContent}`
  }
  d.addEventListener('click', (e) => {
    if (e.target === $btn ) {
      let result = getWinner(lista)
      alert(result);
      console.log(result);
    }
  } )
}