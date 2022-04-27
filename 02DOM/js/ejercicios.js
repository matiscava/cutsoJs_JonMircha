const $btnMenu = document.getElementById('hamburguesaSpan'),
  $hiddenMenu = document.querySelector('.hiddenMenu'),
  $btnHiddenMenu = document.querySelector('.hiddenMenu')
  ;

$btnMenu.addEventListener('click', (e) => {
  $btnMenu.classList.toggle('icon-menu');
  $btnMenu.classList.toggle('icon-mail4');
  if($btnMenu.classList.contains('icon-mail4')){
    $hiddenMenu.style.right = 0;
    $hiddenMenu.style.left = 0;
  }
  if($btnMenu.classList.contains('icon-menu')){
    $hiddenMenu.style.right = null;
    $hiddenMenu.style.left = '-1000px';
  }
})

$btnHiddenMenu.addEventListener('click', (e) => {
  $btnMenu.classList.toggle('icon-menu');
  $btnMenu.classList.toggle('icon-mail4');
  $hiddenMenu.style.right = null;
  $hiddenMenu.style.left = '-1000px';
})