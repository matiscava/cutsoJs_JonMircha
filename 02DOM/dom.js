// console.log(window);
// console.log(document);

// let texto= "Hola chiche, ¿Cómo estás?"
// const hablar = (texto) => speechSynthesis.speak( new SpeechSynthesisUtterance(texto) )

// hablar(texto);

/* 

*/

// console.log('------------------ Elementos del Documento ------------------');
// console.log(window.document);
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.characterSet);
// console.log(document.title);
// console.log(document.links);
// console.log(document.images);
// console.log(document.forms);
// console.log(document.styleSheets);
// console.log(document.scripts);
// setTimeout(()=>{

//   console.log(document.getSelection().toString());
// },2000)

// document.write("<h3>Escribiendo desde script</h3>")

// console.log('------------------ Selectores del DOM ------------------');


// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByClassName('cards'));
// console.log(document.getElementsByName('nombre'));
// console.log(document.getElementById('menu'));

// //El query selector es mas lento que el get element by algo

// console.log(document.querySelector('a')); 
// console.log(document.querySelectorAll('a'));
// console.log(document.querySelectorAll('a').length);


// document.querySelectorAll('a').forEach((el)=> console.log(el))

// console.log(document.querySelector('.card')); 
// console.log(document.querySelectorAll('.card'));
// console.log(document.querySelectorAll('.card')[2]);
// console.log(document.querySelector('#menu li')); 
// console.log(document.querySelectorAll('#menu li'));



// console.log('------------------ Atributos y Data-Attributes ------------------');

// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute('lang'));


// console.log(document.querySelector('.link-dom').href);
// console.log(document.querySelector('.link-dom').getAttribute('href'));

// document.documentElement.lang = 'en'
// console.log(document.documentElement.lang);
// document.documentElement.setAttribute('lang','es-MX')
// console.log(document.documentElement.getAttribute('lang'));

// const linkDOM = document.querySelector('.link-dom')

// // linkDOM.setAttribute('target','_blank') //abre el href en una nueva pestaña
// // linkDOM.setAttribute('rel','noopener') //abre el href en una nueva pestaña

// console.log(linkDOM.dataset)

// console.log('------------------ Estilos y variables Css ------------------');

// const linkDOM = document.querySelector('.link-dom')
// //Como obtener los estilos
// console.log(linkDOM.style)
// console.log(linkDOM.getAttribute('style'))
// console.log(linkDOM.style.backgroundColor)
// console.log(linkDOM.style.color)
// console.log(window.getComputedStyle(linkDOM));
// console.log(window.getComputedStyle(linkDOM).getPropertyValue('color'));
// //como editar los estilos

// linkDOM.style.setProperty('text-decoration','none')
// linkDOM.style.setProperty('display','block')

// linkDOM.style.width = '50%'
// linkDOM.style.textAlign = 'center'
// linkDOM.style.marginLeft = 'auto'
// linkDOM.style.marginRight = 'auto'
// linkDOM.style.padding = '1rem'
// linkDOM.style.borderRadius = '.5rem'
// console.log(linkDOM.style)
// console.log(linkDOM.getAttribute('style'))
// console.log(window.getComputedStyle(linkDOM));

// //variables CSS - Custom properties CSS

// const html = document.documentElement,
//   body = document.body;

//   let varDarkColor = getComputedStyle(html).getPropertyValue('--dark-color'),
//   varYellowColor = getComputedStyle(html).getPropertyValue('--yellow-color');

// console.log(varDarkColor);
// console.log(varYellowColor);

// body.style.backgroundColor = varDarkColor;
// body.style.color = varYellowColor;


// html.style.setProperty('--dark-color','brown')
// varDarkColor = getComputedStyle(html).getPropertyValue('--dark-color')
// body.style.backgroundColor = varDarkColor;

// console.log('------------------ clases Css ------------------');

// const $card = document.querySelector('.card');

// console.log($card);
// console.log($card.className);
// console.log($card.classList);
// console.log($card.classList.contains('rotate-45'));
// $card.classList.add('rotate-45')
// console.log($card.classList.contains('rotate-45'));
// $card.classList.remove('rotate-45')
// console.log($card.classList.contains('rotate-45'));
// $card.classList.toggle('rotate-45')
// console.log($card.classList.contains('rotate-45'));
// console.log($card.className);
// console.log($card.classList);
// $card.classList.toggle('rotate-45')
// console.log($card.classList.contains('rotate-45'));
// $card.classList.toggle('rotate-45')
// $card.classList.replace('rotate-45','rotate-135')
// $card.classList.add('opacity-80','sepia')
// $card.classList.remove('opacity-80','sepia')
// $card.classList.toggle('opacity-80')
// $card.classList.toggle('sepia')

// console.log('------------------ Texto y HTL ------------------');

// const $whatIsDOM = document.getElementById('que-es')

// let text = `
// <p>
//   El Modelo de Objetos del Documento (<b><i>DIN - Document Object Model </i></b>) es un API para documentos HTML y XML
// </p>
// <p>
//   Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
// </p>
// <p>
//  <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
// </p>
// `;

// $whatIsDOM.innerText = text; 
//no es la convencional, fue creada para Internet Explorer lo imrpime literalmente.

// $whatIsDOM.textContent = text; 
//tampoco interpreta las etiquetas hatml

// $whatIsDOM.innerHTML = text; 
//reemplaza el contenido HTML del elemento del DOM

// $whatIsDOM.outerHTML = text
//reempaza el elemento del DOM con el contenido de text

// console.log('------------------ DOM traversing: Recorriendo el DOM ------------------');

// const $cards = document.querySelector('.cards')

// console.log($cards);
// console.log($cards.children);
// console.log($cards.childNodes);
// console.log($cards.children[2]);
// console.log($cards.parentElement);
// console.log($cards.parentNode);
// console.log($cards.firstChild);
// console.log($cards.lastChild);
// console.log($cards.firstElementChild);
// console.log($cards.lastElementChild);
// console.log($cards.previousSibling);
// console.log($cards.previousElementSibling);
// console.log($cards.nextSibling);
// console.log($cards.nextElementSibling);
// console.log($cards.closest('div'));
// console.log($cards.closest('body'));
// console.log($cards.children[3].closest('section'));

// console.log('------------------ Creando Elementos y Fragmentos en el DOM ------------------');

// const $figure = document.createElement('figure'),
//   $img = document.createElement('img'),
//   $figcaption = document.createElement('figcaption'),
//   $figcaptionText = document.createTextNode('Animals'),
//   $cards = document.querySelector('.cards'),
//   $figure2 = document.createElement('figure');


// $img.setAttribute('src','https://placeimg.com/200/200/animals');
// $img.setAttribute('alt','Animals');

// $figcaption.appendChild($figcaptionText)

// $figure.appendChild($img)
// $figure.appendChild($figcaption)
// $figure.classList.add('card')

// $cards.appendChild($figure)

// $figure2.innerHTML = `
// <img src='https://placeimg.com/200/200/people' alt='people'>
// <figcaption>People</figcaption>
// `;

// //no crea un nodo HTML con el innerHTML, se recomienda hacerlos con el appendChild.

// $figure2.classList.add('card')
// $cards.appendChild($figure2)

// const estaciones = ["Primavera","Verano","Otoño","Invierno"],
//   $ul = document.createElement('ul');

// document.write('<h3>Estaciones del Año</h3>');
// document.body.appendChild($ul);

// estaciones.forEach(el => {
//   const $li = document.createElement('li');
//   $li.textContent = el;
//   $ul.appendChild($li)
// })


// const continentes = ["África","América","Asia","Europa","Oceanía"],
//   $ul2 = document.createElement('ul');

// document.write('<h3>Continentes del Mundo</h3>');
// document.body.appendChild($ul2);
// $ul2.innerHTML="";
// continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`))

// const meses = [
//   "Enero",
//   "Febrero",
//   "Marzo",
//   "Abril",
//   "Mayo",
//   "Junio",
//   "Julio",
//   "Agosto",
//   "Septiembre",
//   "Octubre",
//   "Noviembre",
//   "Diciembre"
// ],
//   $ul3 = document.createElement('ul'),
//   $fragment = document.createDocumentFragment();

// meses.forEach( (el) => {
//   const $li = document.createElement('li')
//   $li.textContent = el;
//   $fragment.appendChild($li);
// })

// document.write('<h3>Meses del Año</h3>');
// $ul3.appendChild($fragment);
// document.body.appendChild($ul3);

// console.log('------------------ Templates HTML ------------------');

// const $cards = document.querySelector('.cards'),
//   $template = document.getElementById('template-card').content,
//   $fragment = document.createDocumentFragment(),
//   cardContent = [
//     {
//       title: "Tecnología",
//       img: "https://placeimg.com/200/200/tech"
//     },
//     {
//       title: "Animales",
//       img: "https://placeimg.com/200/200/animals"
//     },
//     {
//       title: "Arquitectura",
//       img: "https://placeimg.com/200/200/arch"
//     },
//     {
//       title: "Gente",
//       img: "https://placeimg.com/200/200/people"
//     },
//     {
//       title: "Naturaleza",
//       img: "https://placeimg.com/200/200/nature"
//     },
//   ];

//   cardContent.forEach( (el) => {
//     $template.querySelector('img').setAttribute('src',el.img)
//     $template.querySelector('img').setAttribute('alt',el.title)
//     $template.querySelector('figcaption').textContent = el.title;

//     let $clone = document.importNode( $template, true ) 
//     //con true copia toda la estructura
//     $fragment.appendChild($clone)
//   })

//   $cards.appendChild($fragment)

// console.log('------------------ Modificando Elementos - Old Style ------------------');

// const $cards = document.querySelector('.cards'),
//   $newCard = document.createElement('figure'),
//   $cloneCards = $cards.cloneNode(false);

// $newCard.innerHTML = `
//   <img src="https://placeimg.com/200/200/any" alt="Any">
//   <figcaption>Any</figcaption>
// `

// $newCard.classList.add("card");

// // $cards.replaceChild($newCard, $cards.children[2])
// // $cards.removeChild($cards.lastElementChild)
// // $cards.insertBefore($newCard, $cards.firstElementChild)
// document.body.appendChild($cloneCards)

// console.log('------------------ Modificando Elementos - Cool Style ------------------');

/*
.insertAdjancet....
  .insertAdjancetElement(position,el)
  .insertAdjancetHTML(position, html)
  .insertAdjancetText(position, text)

Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/


// const $cards = document.querySelector('.cards'),
//   $newCard = document.createElement('figure');

// // $newCard.innerHTML = `
// //   <img src="https://placeimg.com/200/200/any" alt="Any">
// //   <figcaption>Any</figcaption>
// // `
// let $contentCard = `
//   <img src="https://placeimg.com/200/200/any" alt="Any">
//   <figcaption></figcaption>
// `

// $newCard.classList.add("card");
// $newCard.insertAdjacentHTML('beforeend',$contentCard);
// $newCard.querySelector('figcaption').insertAdjacentText('afterbegin','Any')

// $cards.insertAdjacentElement("afterbegin",$newCard)

// $cards.prepend($newCard) //lo agrega como primer hijo
// $cards.append($newCard) //lo agrega como ultimo hijo
// $cards.before($newCard) //lo agrega como hermano anterior
// $cards.after($newCard) //lo agrega como hemano posterior

// console.log('------------------ Manejando Eventos ------------------');

// function holaMundo() {
//   alert('Hola Mundo desde el archivo js');
//   console.log(event);
// }

// const $eventoSemantico = document.getElementById('evento-semantico'),
// $eventoMultiple = document.getElementById('evento-multiple');

// $eventoSemantico.onclick = holaMundo;
// $eventoSemantico.onclick = function (e) {
//   alert('Hola Mundo Manejador de Eventos Semántico')
//   console.log(e);
// };

// $eventoMultiple.addEventListener('click',holaMundo)
// $eventoMultiple.addEventListener('click',(e) => {
//   alert('Hola Mundo Manejador de Eventos Múltiple');
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(event);
// })

// console.log('------------------ Eventos con Parámetros y Remover Eventos ------------------');

// function holaMundo() {
//   alert('Hola Mundo desde el archivo js');
//   console.log(event);
// }

// function saludar(nombre = 'Desconocid@') {
//   alert(`Hola ${nombre}`)
// }

// const $eventoSemantico = document.getElementById('evento-semantico'),
//   $eventoMultiple = document.getElementById('evento-multiple'),
//   $eventoRemover = document.getElementById('evento-remover');

// $eventoSemantico.onclick = holaMundo;
// $eventoSemantico.onclick = function (e) {
//   alert('Hola Mundo Manejador de Eventos Semántico')
//   console.log(e);
// };

// $eventoMultiple.addEventListener('click',holaMundo)
// $eventoMultiple.addEventListener('click',(e) => {
//   alert('Hola Mundo Manejador de Eventos Múltiple');
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(event);
// })

// $eventoMultiple.addEventListener('click', () => {
//   saludar()
//   saludar('Matias')
// })

// const removerDobleCLick = (e) => {
//   alert(`removiendo el evento de tipo ${e.type}`)
//   console.log(e);
//   $eventoRemover.removeEventListener('dblclick',removerDobleCLick)
//   // $eventoRemover.setAttribute('disabled',true)
//   $eventoRemover.disabled = true
// }

// $eventoRemover.addEventListener('dblclick', removerDobleCLick)

// console.log('------------------ Flujo de Eventos (Burbuja y Captura) ------------------');


// const $divsEventos = document.querySelectorAll('.eventos-flujo div');

// function flujoEventos (e){
//   console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
// }

// console.log($divsEventos);

// $divsEventos.forEach( (div) => {
//   //fase de burbuja
//   // div.addEventListener('click', flujoEventos)
//   // div.addEventListener('click', flujoEventos, false)
//   //fase de captura
//   // div.addEventListener('click', flujoEventos, true)
//   // div.addEventListener('click', flujoEventos, {
//   //   capture: false,
//   //   once: true,
//   // })

// })

// console.log('------------------ stopPropagation & preventDefault ------------------');

// const $divsEventos = document.querySelectorAll('.eventos-flujo div'),
//   $linkEventos = document.querySelector('.eventos-flujo a');

// function flujoEventos (e){
//   console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
//   e.stopPropagation()
// }

// console.log($divsEventos);

// $divsEventos.forEach( (div) => {
//   div.addEventListener('click', flujoEventos)
// })

// $linkEventos.addEventListener('click', (e) => {
//   alert('Hola, soy tu amigo y docente digigital Jonathan Mircha')
//   e.preventDefault();
//   e.stopPropagation()
// })

// console.log('------------------ Delegación de Eventos ------------------');

// const $divsEventos = document.querySelectorAll('.eventos-flujo div'),
//   $linkEventos = document.querySelector('.eventos-flujo a');

// function flujoEventos (e){
//   console.log(`Hola te saluda ${this}, el click lo originó ${e.target.className}`);
// }

// document.addEventListener('click', (e) => {
//   console.log(`Click en ${e.target}`);
//   if(e.target.matches('.eventos-flujo div')) {
//     flujoEventos(e)
//   }

//   if(e.target.matches('.eventos-flujo a')) {
//     alert('Hola, soy tu amigo y docente digigital Jonathan Mircha')
//     e.preventDefault();
//   }
// })

// console.log('------------------ BOM: Propiedades y Eventos ------------------');

// window.addEventListener('resize', (e) => {
//   console.clear()
//   console.log('*******Evento Resize*******');
//   console.log(window.innerWidth);
//   console.log(window.innerHeight);
//   console.log(window.outerWidth);
//   console.log(window.outerHeight);


//   console.log(e);
// })

// window.addEventListener('scroll', (e) => {
//   console.clear()
//   console.log('*******Evento Scroll*******');
//   console.log(window.scrollX);
//   console.log(window.scrollY);

//   console.log(e);
// })

// window.addEventListener('load', (e) => {
//   console.log('*******Evento Load*******');
//   console.log(window.screenX);
//   console.log(window.screenY);
//   console.log(e);
// })

// document.addEventListener('DOMContentLoaded', (e) => {
//   //Carga este primero
//   console.log('*******Evento DOMContentLoaded *******');
//   console.log(window.screenX);
//   console.log(window.screenY);
//   console.log(e);
// })

// console.log('------------------ BOM: Métodos ------------------');

// window.alert('alerta');
// window.confirm('Confirmación');
// window.prompt('Aviso');

// const $btnAbrir = document.getElementById('abrir-ventana'),
//   $btnCerrar = document.getElementById('cerrar-ventana'),
//   $btnImprimir = document.getElementById('imprimir-ventana');

// let ventana;

//   $btnAbrir.addEventListener('click', (e) => {
//      ventana = window.open('https://jonmircha.com')
//     // open('https://jonmircha.com')

//   })
//   $btnCerrar.addEventListener('click', (e) => {
//     ventana.close()
//     // window.close() // cierra la ventana donde está funcionando al app

//   })
//   $btnImprimir.addEventListener('click', (e) => {
//     window.print()
//   })

// console.log('------------------ Objeto URL (location) ------------------');

// console.log(location);
// console.log(location.origin);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.href);
// console.log(location.hash);
// console.log(location.pathname);

// console.log('------------------ Objeto Historital (history) ------------------');

// console.log(history);
// console.log(history.length);
// history.back(1) //vuelve 1 para atras
// history.forward(2) //va 2 paginas para adelante en el historial
// history.go(-4) //vuelve 4 para atras
// history.go(4) //va 4 para adelante

// console.log('------------------ Objeto Navegador (navigator) ------------------');

// console.log(navigator);
// console.log(navigator.connection);
// console.log(navigator.geolocation);
// console.log(navigator.mediaDevices);
// console.log(navigator.mimeTypes);
// console.log(navigator.onLine);
// console.log(navigator.serviceWorker);
// console.log(navigator.storage);
// console.log(navigator.usb);
// console.log(navigator.userAgent);


// console.log('------------------ DOM : ejercicios N°1 ------------------');


