const d = document;
let x=0,
  y=0;

export function moveBall(e,ball,stage){
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limistsBall = $ball.getBoundingClientRect(),
    limistsStage = $stage.getBoundingClientRect();
    // console.log(limistsBall);
    // console.log(limistsStage);

    // console.log(e.key);
    // console.log(e.keyCode);

  switch(e.keyCode){
    case 37: //izq
    e.preventDefault();
    if(limistsBall.left > (limistsStage.left+4.6)){
        x--;
      }
      break;
    case 38: //arriba
    e.preventDefault();
    if(limistsBall.top > limistsStage.top+1){
        y--;
      }
      break;
    case 39: //der
    e.preventDefault();
    if(limistsBall.right < (limistsStage.right-5)){
        x++;
      }
      break;
    case 40: //abajo
    e.preventDefault();
    if(limistsBall.bottom < limistsStage.bottom-1){
        y++;
      }
      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x*10}px,${y*10}px)`


}

export function shortcuts (e){
  // console.log(e);
  // console.log(e.key);
  // console.log(`Ctrl: ${e.ctrlKey}`);
  // console.log(`Alt: ${e.altKey}`);
  // console.log(`Shift: ${e.shiftKey}`);

  if(e.key === "a" && e.altKey){
    e.preventDefault()
    alert('Haz lanzado una alerta con el teclado')
  }
  if(e.key === "c" && e.altKey){
    e.preventDefault()
    confirm('Haz lanzado una confirmación con el teclado')
  }
  if(e.key === "p" && e.altKey){
    e.preventDefault()
    prompt('Haz lanzado un aviso con el teclado')
  }

}