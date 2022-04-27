const d = document;

export function digitalClock (reloj, btnStart, btnStop) {
  let clockTempo;
  d.addEventListener('click', (e) => {
    if(e.target.matches(btnStart)){
      d.getElementById(reloj).classList.add('relojPrendido');
      // d.querySelector(btnStart).setAttribute('disabled',true);
      e.target.disabled = true
      clockTempo = setInterval(() => {
        let tiempo = new Date().toLocaleTimeString();
        document.getElementById('reloj').innerHTML = `<h3>${tiempo}</h3>`
      },1000)
    }
    if(e.target.matches(btnStop)){
      d.getElementById(reloj).classList.remove('relojPrendido');
      // d.querySelector(btnStart).removeAttribute('disabled');
      d.querySelector(btnStart).disabled = false;
      clearInterval(clockTempo)
      document.getElementById('reloj').innerHTML = null

    }
  })
}

export function alarm(sound, btnStart, btnStop){
  let alarmTempo;
  const $alarm = d.createElement('audio');
  $alarm.src = sound;
  d.addEventListener('click', (e) => {
    if(e.target.matches(btnStart)){
      alarmTempo= setTimeout(() => {
        $alarm.play()
      },2000)
      e.target.disabled = true
    }
    if(e.target.matches(btnStop)){
      clearTimeout(alarmTempo)
      $alarm.pause();
      $alarm.currentTime = 0;
      d.querySelector(btnStart).disabled = false
    }
  })
}
