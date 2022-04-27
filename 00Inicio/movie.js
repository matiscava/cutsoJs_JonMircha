 class Movie {
  constructor ( {IMDBid , title , year , director , country , genre , stars} ){
    this.IMDBid = IMDBid;
    this.title = title;
    this.year = year;
    this.director = director;
    this.country = country;
    this.genre = genre;
    this.stars = stars;

    this.validarIMDB(IMDBid)
    this.validarCadena(title,100,'title')
    this.validarCadena(director,50,'director')
    this.validarAnio(year)
    this.validarArreglo(country,'pais')
    this.validarGenero(genre)
    this.validarCalificacion(stars)
  }
  validarIMDB = (id = undefined) => {
    if( !id ) return console.warn(`debe ingresar una cadena de texto en el ${key}`);
    if( typeof id !== 'string' ) return console.warn('La cadena debe ser un texto');

    if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) return console.error(`el id de IMDB "${id}" no es válido, debe tener 9 carácteres, los 2 primeros deben ser letras minúsculas y los ultimos 7 números`);
    // if ( id.length !== 9) return console.warn('El id ingresado no es correcto, debe tener 9 carácteres')
    // const caracteresId = id.split("")
    // for (let i = 1; i >= 0; i--) {
    //   let expReg = /[a-zA-Z]/g.test(caracteresId[i]);
    //   if ( !expReg ) return console.error(`El valor "${caracteresId[i]}", NO es una letra`)
    // }
    // for (let i = 2; i < Object.keys(caracteresId).length ; i++) {
    //   let expReg = /[0-9]/g.test(caracteresId[i]);
    //   if ( !expReg ) return console.error(`El valor "${caracteresId[i]}", NO es un numero`)
    // }
  }
  validarCadena = (cadena = "" , caracteres = undefined , key = "") => {
    if( !cadena ) return console.warn(`debe ingresar una cadena de texto en el ${key}`);
    if( typeof cadena !== 'string' ) return console.warn('La cadena debe ser un texto');

    if (caracteres === undefined ) return console.warn('debe ingresar el limite de carácteres');
    if (typeof caracteres !== 'number' ) return console.warn('El limite de caracteres NO es un número');

    if( !key ) return console.warn('debe ingresar el dato que quiere limitar ');
    if( typeof key !== 'string' ) return console.warn('La cadena debe ser un texto');

    if(cadena.length > caracteres ) return console.error(`El ${key} no puede superar los ${caracteres} carácteres`)    
  }
  validarAnio = (year = undefined) => {
    if (year === undefined ) return console.warn('debe ingresar el limite de carácteres');
    if ( typeof year !== 'number' ) return console.error(`El año de la pelicula, NO es un número`)
    // if(year.toString().length !== 4 ) return console.warn('El año de estreno debe tener 4 dígitos');
    if(!(/^([0-9]){4}$/.test(year)) ) return console.warn('El año de estreno debe tener 4 dígitos');
    
  }
  validarArreglo = ( arr = undefined , key = "") => {
    if( !key ) return console.warn('Debe ingresar el dato que quiere limitar ');
    if( typeof key !== 'string' ) return console.warn('El dato a limitar debe ser un texto');

    if ( arr === undefined ) return console.warn(`No ingreso nada en ${key}`)
    if ( !(arr instanceof Array) ) return console.warn(`los datos de ${key} deben ser un areglo`)
    for (const valor of arr) {
      if ( typeof valor !== 'string' ) return console.error(`El valor "${valor}", NO es una cadena de texto`)   
    }
  }
  static get listaGeneros(){
    return [ 'Action' , 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'];
  } 

  static generosAceptador(){
    return console.info(`Los géneros aceptados son: ${Movie.listaGeneros.join(', ')}`)
  }
  // static validarGeneros = (genre = undefined ) => {
  //   if ( genre === undefined ) return console.warn('No ingreso nada')
  //   if ( !(genre instanceof Array) ) return console.warn('No ingreso un arreglo')
  //   genre.forEach( gen => {
  //     if (typeof gen !== 'string' ) return console.warn(`El genero "${gen}" no es una cadena de texto`)
  //     // if ( gen.toLowerCase() !== 'action' || gen.toLowerCase() !== 'adult' || gen.toLowerCase() !== 'adventure' || gen.toLowerCase() !== 'animation' || gen.toLowerCase() !== 'biography' || gen.toLowerCase() !== 'comedy' || gen.toLowerCase() !== 'crime' || gen.toLowerCase() !== 'documentary' || gen.toLowerCase() !== 'drama' || gen.toLowerCase() !== 'family' || gen.toLowerCase() !== 'fantasy' || gen.toLowerCase() !== 'film noir' || gen.toLowerCase() !== 'game-show' || gen.toLowerCase() !== 'history' || gen.toLowerCase() !== 'horror' || gen.toLowerCase() !== 'musical' || gen.toLowerCase() !== 'music' || gen.toLowerCase() !== 'mystery' || gen.toLowerCase() !== 'news' || gen.toLowerCase() !== 'reality-tv' || gen.toLowerCase() !== 'romance' || gen.toLowerCase() !== 'sci-fi' || gen.toLowerCase() !== 'short' || gen.toLowerCase() !== 'sport' || gen.toLowerCase() !== 'talk-show' || gen.toLowerCase() !== 'thriller' || gen.toLowerCase() !== 'war' || gen.toLowerCase() !== 'western' )console.warn(`El genero "${gen}" no esta dentro de las catégorias aceptadas`)
  //   });
  // }

  validarGenero(generos){
    this.validarArreglo(generos,'genero')
    for (const genero of generos) {
      if(!Movie.listaGeneros.includes(genero)) return console.error(`El genero "${genero}" no se encuentra en la lista de generos aceptados`);
    }
    
  }
  validarCalificacion = (calificacion = undefined) => {
    if ( typeof calificacion !== 'number' ) return console.error(`La calificación de la película, NO es un número`)
    return (calificacion < 0 || calificacion > 10) 
      ? console.error(`La calificación de la película, debe ser entre 0 y 10`)
      : this.calificacion = calificacion.toFixed(1)
  }

  fichaTecnica = () => {
    return console.log('Ficha Técnica:\n',{
      IMDBid: this.IMDBid,
      title: this.title,
      year: this.year,
      director: this.director,
      country: this.country,
      genre: this.genre,
      stars: this.stars,
    })
  }

  // validarPelicula = ( movie = undefined ) => {
  //   if ( movie === undefined ) return console.warn('No ingreso nada')
  //   if ( !(movie instanceof Object) ) return console.warn('No ingreso un objeto')
  //   if (!movie.IMDBid || !movie.title || !movie.year || !movie.director || !movie.country || !movie.genre || !movie.stars ) return console.warn('Falta completar datos')
  //   if ( movie.IMDBid.length !== 9) return console.warn('El id ingresado no es correcto, debe tener 9 carácteres')
  //   const caracteresId = movie.IMDBid.split("")
  //   for (let i = 1; i >= 0; i--) {
  //     let expReg = /[a-zA-Z]/g.test(caracteresId[i]);
  //     if ( !expReg ) return console.error(`El valor "${caracteresId[i]}", NO es una letra`)
  //   }
  //   for (let i = 2; i < Object.keys(caracteresId).length ; i++) {
  //     let expReg = /[0-9]/g.test(caracteresId[i]);
  //     if ( !expReg ) return console.error(`El valor "${caracteresId[i]}", NO es un numero`)
  //   }
  //   if(movie.title.length > 100 ) return console.error('El titulo no puede superar los 100 carácteres')
  //   if(movie.director.length > 50 ) return console.error('El nombre del director no puede superar los 50 carácteres')
  //   if(movie.year.toString().length !== 4 ) return console.warn('El año de estreno debe tener 4 dígitos');
  //   if ( typeof movie.year !== 'number' ) return console.error(`El año de la pelicula, NO es un número`)
  //   if ( !(movie.country instanceof Array) ) return console.warn('No ingreso un arreglo en el pais de origen')
  //   validarGenero(movie.genre)
  //   if ( typeof movie.stars !== 'number' ) return console.error(`La calificación de la película, NO es un número`)
  //   if (movie.stars < 0 || movie.stars > 10) return console.error(`La calificación de la película, debe ser entre 0 y 10`)
  
  // }

 }

//  Movie.generosAceptador();

//  const peliculaUno = new Movie({ 
//   IMDBid: 'tt0109686',
//   title: 'Dumb and Dumber',
//   year: 1994,
//   director: 'Peter Farrelly',
//   country: ['Estados Unidos'],
//   genre:['Comedy'],
//   stars:7.3,
//  })

//  peliculaUno.fichaTecnica()

const myMovies = [
  {
      IMDBid: 'tt0109686',
      title: 'Dumb and Dumber',
      year: 1994,
      director: 'Peter Farrelly',
      country: ['Estados Unidos'],
      genre:['Comedy'],
      stars:7.3,
  },
  {
    IMDBid: 'tt0109040',
    title: 'Ace Ventura',
    year: 1994,
    director: 'Tom Shdyac',
    country: ['Estados Unidos'],
    genre:['Comedy'],
    stars:6.9,
  },
  {
    IMDBid: 'tt0481369',
    title: 'The Number 23',
    year: 2007,
    director: 'Joel Schumacher',
    country: ['Estados Unidos'],
    genre:['Crime','Mystery'],
    stars:6.4,
  }
]

myMovies.forEach(movie=> new Movie(movie).fichaTecnica())