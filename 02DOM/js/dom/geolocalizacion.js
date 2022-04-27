const d = document,
  n = navigator;

export default function getGeolocation (id) {
  const $div = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

  const success = (position) => {
    let coords = position.coords;
    $div.innerHTML = `
    <p>Tu posición actual es:</p>
    <ul>
      <li> Latitud: <b>${coords.latitude}</b></li>
      <li> Longitud: <b>${coords.longitude}</b></li>
      <li> Precisión: ${Math.floor(coords.accuracy)} metros</li>
    </ul>
    <a href='https://www.google.com/maps/@${coords.latitude},${position.coords.longitude},15z' target="_blank" rel="noopener"> Ver en GoogleMaps </a>
    `

  }

  const error = (err) => {
    $div.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
    console.error(`Error ${err.code}: ${err.message}`);
  }
    n.geolocation.getCurrentPosition(success,error,options)
} 