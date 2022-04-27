const d = document,
  n = navigator,
  ua = navigator.userAgent;

export default function userDeviceInfo(id){
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/wiondows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i) ,
      mac: () => ua.match(/mac os/i) ,
      windows: () => ua.match(/windows nt/i) ,
      any: function () {
        return this.linux() || this.mac() || this.windows();
      } ,
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera() ||
          this.ie() ||
          this.edge()
        )
      }
    };
  // console.log(ua);
  // console.log(isMobile.android());
  // console.log(isMobile.ios());
  // console.log(isMobile.windows());
  $id.innerHTML = `
    <ul>
      <li>User Agent: <b>${ua}</b></li>
      <li>Plataforma: <b>${isMobile.any()?isMobile.any():isDesktop.any()}</b></li>
      <li>Navegador: <b>${isBrowser.any()}</b></li>

    </ul>
  `;
  /* Contenido exclusivo */
  if (isBrowser.chrome()) {
    $id.innerHTML += `<h3><mark>Este contenido solo se ve en Chrome</mark></h3>`
  }
  if (isBrowser.firefox()) {
    $id.innerHTML += `<h3><mark>Este contenido solo se ve en Firefox</mark></h3>`
  }
  if (isDesktop.windows()) {
    $id.innerHTML += `<h3><mark>Descarga nuestro software para Windows</mark></h3>`
  }
  if (isDesktop.linux()) {
    $id.innerHTML += `<h3><mark>Descarga nuestro software para Linux</mark></h3>`
  } 
  if (isDesktop.mac()) {
    $id.innerHTML += `<h3><mark>Descarga nuestro software para mac</mark></h3>`
  }
  /* Redirecciones */

  // if (isMobile.android()) {
  //   window.location.href = "https://www.google.com"
  // }
}