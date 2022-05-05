const d = document;
export default function contactForm () {
  const $form = d.querySelector('.contact-form'),
    $inputs = d.querySelectorAll('.contact-form [required]');

  $inputs.forEach( (el) => {
    const $span = d.createElement('span');
    $span.id = el.name;
    $span.textContent = el.title;
    $span.classList.add('contact-form-error','none');
    el.insertAdjacentElement('afterend', $span);
  })

  d.addEventListener('keyup' , (e) => {
    if(e.target.matches('.contact-form [required]')) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
      if(pattern && pattern.value !== ''){
        let regex = new RegExp(pattern)
        return !regex.exec($input.value)
          ?d.getElementById($input.name).classList.add('is-active')
          :d.getElementById($input.name).classList.remove('is-active')
      }
      if(!pattern){
        return ($input. value === '')
          ?d.getElementById($input.name).classList.add('is-active')
          :d.getElementById($input.name).classList.remove('is-active')
      }
    }
  })
  d.addEventListener('submit' , (e) => {
    e.preventDefault();
    // alert('Enviando Formuliario');
    const $loader = d.querySelector('.contact-form-loader'),
      $response = d.querySelector('.contact-form-response');
    
      $loader.classList.remove('none');

      fetch("assets/send_mail.php", {
          method: "POST",
          body: new FormData(e.target),
          mode: "cors"
      })
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => {
            console.log(json);
            $loader.classList.add('none');
            $response.classList.remove('none');
            $response.innerHTML = `<p>${json.message}</p>`
        })
        .catch(err => {
            console.error(err);
            let message = err.statusText || "Ocurrio un eerror al enviar, intenta nuevamente"
            $response.innerHTML = `Error ${err.status}: ${message}`
        })
        .finally(() => {
            setTimeout(()=> {
                $response.classList.add('none');
                $response.innerHTML = ""
            },3000)
        })
  })
}