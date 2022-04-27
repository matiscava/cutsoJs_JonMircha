const d = document;

export default function themeLS(theme){
  const themeLS = localStorage.getItem(theme),
    $selectors = d.querySelectorAll('[data-dark]');
    console.log(themeLS);
  if(themeLS === 'dark-mode'){
    $selectors.forEach( (el) => el.classList.add('dark-mode') );
  }else{
    $selectors.forEach( (el) => el.classList.remove('dark-mode') );
  }
}