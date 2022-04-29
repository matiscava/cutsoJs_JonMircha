const d = document,
  $table = d.querySelector('.crud-table'),
  $form = d.querySelector('.crud-form'),
  $title = d.querySelector('.crud-title'),
  $template = d.getElementById('crud-template').content,
  $fragment = d.createDocumentFragment();

const getAll = async () => {
  try{
    let res = await fetch('http://localhost:5000/santos'),
      json = await res.json();

    if(!res.ok) throw {status: res.status,statusText: res.statusText}
    json.forEach( el => {
      $template.querySelector('.name').textContent = el.nombre;
      $template.querySelector('.constellation').textContent = el.constelacion;
      
      $template.querySelector('.edit').dataset.id = el.id;
      $template.querySelector('.edit').dataset.name = el.nombre;
      $template.querySelector('.edit').dataset.constellation = el.constelacion;

      $template.querySelector('.delete').dataset.id = el.id;

      let $clone = d.importNode($template,true)
      $fragment.appendChild($clone)
    });
    $table.querySelector('tbody').appendChild($fragment);
  }catch(err){
    let message = err.statusText || "Ocurrio un error";
    $table.insertAdjacentHTML('afterend',`<p><b>Error ${err.status}: ${message}</b></p>`)
  }
}

d.addEventListener('DOMContentLoaded', getAll)

d.addEventListener('submit', async (e) => {
  if(e.target === $form){
    e.preventDefault()
    if(!e.target.id.value){
      //Create - POST
      try {
        let options = {
          method: 'POST',
          headers: {
            "Content-Type":'application/json; charset=utf-8'
          },
          body: JSON.stringify({
            nombre: e.target.nombre.value,
            constelacion: e.target.constelacion.value
          })
        },
          res = await fetch('http://localhost:5000/santos',options),
          json= await res.json();
        if(!res.ok) throw {status: res.status,statusText: res.statusText}
        location.reload();

      } catch (err) {
        let message = err.statusText || "Ocurrio un error";
        $form.insertAdjacentHTML('afterend',`<p><b>Error ${err.status}: ${message}</b></p>`)
      }
    }else{
      //Update - PUT
      try {
        let options = {
          method: 'PUT',
          headers: {
            "Content-Type":'application/json; charset=utf-8'
          },
          body: JSON.stringify({
            nombre: e.target.nombre.value,
            constelacion: e.target.constelacion.value
          })
        },
          res = await fetch(`http://localhost:5000/santos/${e.target.id.value}`,options),
          json= await res.json();
          
        if(!res.ok) throw {status: res.status,statusText: res.statusText}
        
        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrio un error";
        $form.insertAdjacentHTML('afterend',`<p><b>Error ${err.status}: ${message}</b></p>`)
      }
    }
  }
})

d.addEventListener('click', async (e) => {
  if(e.target.matches('.edit')){
    $title.textContent = 'Editar Santo';
    $form.nombre.value = e.target.dataset.name;
    $form.constelacion.value = e.target.dataset.constellation;
    $form.id.value = e.target.dataset.id;

    d.querySelector('.cancel').classList.remove('hide')
  }
  if(e.target.matches('.delete')){
    let isDelete = confirm(`¿Desea eliminar el  id ${e.target.dataset.id}?`)
    if(isDelete){
      //delete - DELETE
      try {
        let res = await fetch(`http://localhost:5000/santos/${e.target.dataset.id}`,{method: 'DELETE'}),
          json= await res.json();

        if(!res.ok) throw {status: res.status,statusText: res.statusText}
        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrio un error";
        alert(`Error ${err.status}: ${message}`)
      }
    }
  }
  if(e.target.matches('.cancel')){
    $title.textContent = 'Agregar Santo';
    $form.nombre.value = '';
    $form.constelacion.value = '';
    $form.id.value = '';

    d.querySelector('.cancel').classList.add('hide')

  }
})
