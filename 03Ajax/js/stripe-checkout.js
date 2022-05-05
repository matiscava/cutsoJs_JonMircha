import STRIPE_KEYS from "./stripe-keys.js";

const d= document,
  $empanadas = d.getElementById("empanadas"),
  $template = d.getElementById("empanada-template").content,
  $fragment = d.createDocumentFragment(),
  fetchOptions = {
    headers: {
        Authorization: `Bearer ${STRIPE_KEYS.secret}`,
    },
  };

// fetch('https://api.stripe.com/v1/products',fetchOptions)
//   .then(res=> {
//       console.log(res);
//       return res.json()
//   })
//   .then(json => {
//       console.log(json);
//   })

// fetch('https://api.stripe.com/v1/prices',fetchOptions)
//   .then(res=> {
//       console.log(res);
//       return res.json()
//   })
//   .then(json => {
//       console.log(json);
//   })

let products,prices;

const moneyFormat = (num) => `$${num.slice(0,-2)},${num.slice(-2)}`

Promise.all([
  fetch('https://api.stripe.com/v1/products',fetchOptions),
  fetch('https://api.stripe.com/v1/prices',fetchOptions),
])
.then( responses => Promise.all( responses.map( res => res.json() ) ) ) 
.then( json => {
  products = json[0].data;
  prices = json[1].data;

  console.log(products, prices);

  prices.forEach( (el) => {
    let productData = products.filter( (product) => product.id === el.product)
    console.log(productData);

    $template.querySelector(".empanada").setAttribute("data-price",el.id);
    $template.querySelector("img").src = productData[0].images[0];
    $template.querySelector("img").alt = productData[0].name;

    $template.querySelector("figcaption").innerHTML = `
    ${productData[0].name}
    <br>
    ${moneyFormat(el.unit_amount_decimal)} ${el.currency}
    `;
    let $clone = d.importNode($template,true);
    $fragment.appendChild($clone)
  });
  $empanadas.appendChild($fragment)
})
.catch(err => {
  let message = err.statusText || "Ocurrió un error al conectar con la API de Stripe"
  console.error(`Error ${err.status}: ${message}`);
  $empanadas.innerHTML= `<p>Error ${err.status}: ${message}</p>`
})


d.addEventListener('click', (e) => {
  let priceID
  if(e.target.matches('.empanada *')){
    priceID = e.target.parentElement.getAttribute('data-price')
    Stripe(STRIPE_KEYS.public)
      .redirectToCheckout({
        lineItems:[{
          price: priceID,
          quantity: 1
        }],
        mode: "subscription",
        successUrl:"http://127.0.0.1:5501/assets/stripe-success.html",
        cancelUrl:"http://127.0.0.1:5501/assets/stripe-cancel.html",
      })
      .then(res => {
        if(res.error){
          $empanadas.insertAdjacentHTML('afterend', res.error.message );
        }
      })
  }
  if(e.target.matches('.empanada')){
    priceID = e.target.getAttribute('data-price')
    console.log(priceID);
    Stripe(STRIPE_KEYS.public)
      .redirectToCheckout({
        lineItems:[{
          price: priceID,
          quantity: 1
        }],
        mode: "subscription",
        successUrl:"http://127.0.0.1:5501/assets/stripe-success.html",
        cancelUrl:"http://127.0.0.1:5501/assets/stripe-cancel.html",
      })
      .then(res => {
        if(res.error){
          $empanadas.insertAdjacentHTML('afterend', res.error.message );
        }
      })
  }
})


