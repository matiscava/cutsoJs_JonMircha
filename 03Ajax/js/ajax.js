/* --------- XMLHttpRequest --------- */

(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById('xhr'),
    $fragment = document.createDocumentFragment();

    xhr.addEventListener('readystatechange', (e) => {
      if(xhr.readyState !== 4) return;
      // console.log(xhr);
      if(xhr.status >= 200 && xhr.status < 300){
        // console.log('Exito');

        let json = JSON.parse(xhr.responseText)
        json.forEach((el) => {
          const $li = document.createElement('li')
          $li.innerHTML = `${el.name} --- ${el.email} -- ${el.phone}`;
          $fragment.appendChild($li);

        })

        $xhr.appendChild($fragment);
      }else{
        // console.error('Error');
        let message = xhr.statusText || "Ocurrio un error";
        $xhr.innerHTML= `Error ${xhr.status}: ${message}`
      }
    });

    xhr.open('GET','https://jsonplaceholder.typicode.com/users');
    // xhr.open('GET','./../assets/users.json');
    
    xhr.send($xhr)
})();

/* --------- Fetch --------- */

( ()=>{
  const $ftech = document.getElementById('fetch'),
  $fragment = document.createDocumentFragment();

  fetch('https://jsonplaceholder.typicode.com/users')
  // fetch('./../assets/users.json')
    // .then((res) => {
    //   console.log(res);
    //   return res.ok ? res.json() : Promise.reject(res)
    // })
    .then( (res) => res.ok ? res.json() : Promise.reject(res) )
    .then((json) => {
      // console.log(json)
      json.forEach((el) => {
        const $li = document.createElement('li')
        $li.innerHTML = `${el.name} --- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      })
      $ftech.appendChild($fragment);

    })
    .catch((err) => {
      // console.error(err);
      let message = err.statusText || "Ocurrio un error";
      $ftech.innerHTML= `Error ${err.status}: ${message}`
    })
    .finally( () => {
      // console.log("Este se ejecutará independientemente del resultado de la Promesa Fetch");
    } )

})();

/* --------- Fetch Async --------- */

(()=>{
  const $ftechAsync = document.getElementById('fetch-async'),
  $fragment = document.createDocumentFragment();

  async function getData(){
    try{
      let res = await fetch('https://jsonplaceholder.typicode.com/users'),
    //let res = await fetch('./../assets/users.json');
      
      json = await res.json();

      
      // if(!res.ok) throw new Error(`Ocurrio un error al solicitar los datos`)
      if(!res.ok) throw {status: res.status,statusText: res.statusText}
      // console.log(res,json);
      json.forEach((el) => {
        const $li = document.createElement('li')
        $li.innerHTML = `${el.name} --- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      })
      $ftechAsync.appendChild($fragment);
    }catch(err){
      let message = err.statusText || "Ocurrio un error";
      // console.error(`Estoy en el catch: ${err}`);
      $ftechAsync.innerHTML= `Error ${err.status}: ${message}`
      console.error('Estoy en el catch:', err);

    } finally {
      // console.log("Este se ejecutará independientemente del try... catch");
    }
  }

  getData()
})();

/* --------- Axios --------- */

( () => {
  const $axios = document.getElementById('axios'),
  $fragment = document.createDocumentFragment();

  axios
    .get('https://jsonplaceholder.typicode.com/users')
    // .get('./../assets/users.json')
    .then((res) => {
      // console.log(res);
      let json = res.data;
      json.forEach((el) => {
        const $li = document.createElement('li')
        $li.innerHTML = `${el.name} --- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      })
      $axios.appendChild($fragment);
    })
    .catch( (err) => {
      console.error(err.response);
      let message = err.response.statusText || "Ocurrio un error";
      $axios.innerHTML= `Error ${err.response.status}: ${message}`
    })
    .finally(()=> {
      // console.log("Este se ejecutará independientemente del Axios");
    })
} )();

/* --------- Axios Async --------- */

( () => {
  const $axiosAsync = document.getElementById('axios-async'),
  $fragment = document.createDocumentFragment();

  async function getData(){
    try{
      let res = await axios.get('https://jsonplaceholder.typicode.com/users');
      // let res = await axios.get('./../assets/users.json');
        json = await res.data;

        json.forEach((el) => {
          const $li = document.createElement('li')
          $li.innerHTML = `${el.name} --- ${el.email} -- ${el.phone}`;
          $fragment.appendChild($li);
        })
        $axiosAsync .appendChild($fragment);

    }catch(err){
      console.error(err.response);
      let message = err.response.statusText || "Ocurrio un error";
      $axiosAsync.innerHTML= `Error ${err.response.status}: ${message}`
    }finally{
      console.log("Este se ejecutará independientemente del Axios Async");
    }
  }
  getData()
} )();

