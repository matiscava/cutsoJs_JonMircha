import scrollTopButton from "./dom/botton_scroll.js";
import countdown from "./dom/countdown.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import darkTheme from "./dom/tema_oscuro.js";
import { alarm, digitalClock } from "./dom/reloj_alarma.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_conexion.js";
import webcam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scroll_espia.js";

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  hamburgerMenu('.panel-btn','.panel',".menu a");
  digitalClock('reloj','#iniciar-reloj','#detener-reloj');
  alarm(
    './../assets/alarma-morning-mix.mp3',
    '#iniciar-alarma',
    '#detener-alarma'
    );
  countdown('countdown',
  'Nov 11,2022 13:10:00',
  // 'Apr 26,2022 12:21:30',
  "Feliz Cumple Mati!"
  );
  scrollTopButton('.scroll-top-btn');
  responsiveMedia(
    'youtube',
    '(min-width: 1024px)',
    // `<a href="https://www.youtube.com/watch?v=WkgHkrM9fo0" target="_blank" rel="noopener" >Ver Video</a>`,
    // `<iframe width="560" height="315" src="https://www.youtube.com/embed/WkgHkrM9fo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91" target="_blank" rel="noopener" >Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
  responsiveMedia(
    'mapa',
    '(min-width: 1024px)',
    `<a href="https://goo.gl/maps/NBEAVi9KWf5Pf4seA" target="_blank" rel="noopener" >Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13136.066850016401!2d-58.3815704!3d-34.6037389!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1650997477566!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    );
  responsiveTester('responsive-tester');
  userDeviceInfo('user-device');
  webcam('webcam')
  getGeolocation('geolocation')
  searchFilters('#card-filter','.card')
  draw('realizar-sorteo','.sorteo')
  slider()
  scrollSpy()
})

d.addEventListener('keydown' , (e) => {
  shortcuts(e);
  moveBall(e,'#circulo','#rectangulo');
})

darkTheme('.dark-theme-btn','dark-mode')
networkStatus()