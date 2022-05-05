const d = document,
  $main = d.querySelector('main');

fetch('assets/javascript.md')
  .then( (res) => res.ok ? res.text() : Promise.reject(res) )
  .then( text => {
    // console.log(text);
    const converter = new showdown.Converter();
    $main.innerHTML = converter.makeHtml(text)
  })
  .catch( (err) => {
    console.error(err)
    let message = err.statusText || "Ocurrio un error";
    $main.innerHTML = `Error ${err.status}: ${message}`
  })