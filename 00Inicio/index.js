darVuelta = (cadena="") => {
  (!cadena) 
  ? console.warn('Debe ingresar una cadena de texto') 
  : console.info(cadena.split("").reverse().join(""));
}

contarReticiones = (cadena="",palabra="") => {
  if (!cadena) return console.warn('Debe ingresar una cadena de texto') 
  if (!palabra) return console.warn('Debe ingresar una palabra a buscar en el texto') 
  let arrayCadena = cadena.split(" ")
  let contar = 0
  arrayCadena.forEach(text => {
    if (text === palabra) contar +=1;
  });
  if (contar === 0) return console.error(`No se ha encontrado la palabra "${palabra}" en la cadena de texto`)
  return console.log(`La palabra "${palabra}" se ha encontrado ${contar} veces`);
}

esPalindromo = (texto="") => {
  if (!texto) return console.warn('Debe ingresar una cadena de texto');
  texto = texto.toLocaleLowerCase();
  let alReves = texto.split("").reverse().join("")
  // if ( texto === alReves ){
  //   return console.log(`La palabra ${texto} es palindromo de ${alReves}`);
  // }else{
  //   return console.error(`La palabra ${texto} no es palindromo de ${alReves}`);
  // }

  return ( texto === alReves )
  ? console.info(`La palabra ${texto} es palindromo de ${alReves}`)
  : console.error(`La palabra ${texto} no es palindromo de ${alReves}`)

}

// eliminarPadron = (cadena="",padron="") => {
//   if (!cadena) return console.warn('Debe ingresar una cadena de texto') 
//   if (!padron) return console.warn('Debe ingresar una palabra a buscar en el texto') 

//   let objetoCadena = cadena.split("")
//   for (const text of objetoCadena) {
//       text.replace(padron)    
//   }
//   return console.log(objetoCadena.join(''));

// }

const eliminarCaracteres = (texto="",patron="") =>
  (!texto)
    ?console.warn('No Ingreso texto')
    :(!patron)
      ?console.warn('No ingreso un patron de caracteres')
      :console.info(texto.replace(new RegExp(patron,"ig"),""))

// darVuelta('Hola chiche')

// contarReticiones('orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'lorem')

// esPalindromo('salas')

// eliminarCaracteres('xyz1,xyz2,xyz3 y xyz4','xyz')

// aleatorio = () => console.info(Math.round(Math.random() * (600-501 + 1 ) + 501))
aleatorio = () => console.info(Math.round((Math.random() * 100) + 500))


capicua = (numero = undefined) => {
  if (numero === undefined) return console.warn('Debe ingresar un numero')
  // if (isNaN(numero)) return console.warn('Debe ingresar un numero')
  if (typeof numero !== 'number') return console.error('Debe ingresar un numero')

  // let original = numero
  // let invertido = 0;
  // while (numero != 0) {
  //     invertido = 10 * invertido + numero % 10
  //     numero = (Math.floor(numero / 10))
  // }

  // if(original === invertido) return console.info(`El numero ${original} es capicua`)
  // return console.log(`El numero ${original} NO es capicua`);
  let num = numero.toString();
  let alReves = num.split("").reverse().join("");
  return ((num) === alReves) 
  ? console.info(`El numero ${num} es capicua`)
  : console.log(`El numero ${num} NO es capicua`)
}
factorial = (numero = undefined)=>{
  if (numero === undefined) return console.warn('Debe ingresar un numero')
  if (numero === 0) return console.warn('El numero no puede ser 0')
  // if (numero < 0) return console.warn('Debe ser un numero positvo')
  if (Math.sign(numero) === -1 )return console.warn('Debe ser un numero positvo')
  if (typeof numero !== 'number') return console.error(`El valor "${numero}", NO es un número`)
  let res = 1;
  // for(let i = 1;i<=numero;i++){
  for(let i = numero; i>1;i--){
    res*=i
  }
  return console.log(`El factorial de ${numero} es ${res}`);

}

// aleatorio()
// capicua(50005)
// factorial(5)
// factorial('jpña')

esPrimo = (numero = undefined) => {
  if (numero === undefined) return console.warn('Debe ingresar un numero')
  if (typeof numero !== 'number') return console.error(`El valor "${numero}", NO es un número`)
  if (numero === 0) return console.warn('El numero no puede ser 0')
  if (numero === 1) return console.warn('El numero no puede ser 1')
  if (Math.sign(numero) === -1 )return console.warn('Debe ser un numero positvo')

  let divisible = false;

  for (let i = 2 ; i < numero; i++ ){
    if( (numero % i) === 0){
      divisible = true;
      break;
    } 
  }
  return(divisible)
    ? console.log(`El número ${numero}, NO es primo`)
    : console.log(`El número ${numero}, SI es primo`)
}

parImpar = (numero = undefined) => {
  if (numero === undefined) return console.warn('Debe ingresar un numero')
  if (typeof numero !== 'number') return console.error(`El valor "${numero}", NO es un número`)
  let num
  if (numero < 0) {
    num = numero * -1;
  }else{
    num = numero
  }
  return ( num%2 === 1 )
    ? console.info(`El numero ${numero} es impar`)
    : console.info(`El numero ${numero} es par`)
}

conversorTemperatura = (numero = undefined , grados = "") => {
  if (numero === undefined) return console.warn('Debe ingresar un numero')
  if (typeof numero !== 'number') return console.error(`El valor "${numero}", NO es un número`)
  if (!grados) return console.warn('Debe ingresar una cadena de texto');
  if (typeof grados !== 'string') return console.error(`El valor "${grados}", NO es un texto`)
  if (grados.length !== 1 || !/(C|c|F|f)/.test(grados)) return console.warn('Valor no reconocido');
  // if ((grados.toLowerCase() !== 'c') && (grados.toLowerCase() !== 'f')) return console.error('El digito de grados debe ser "C" para Celsius o "F" para Farenheit');
  return (grados.toLowerCase() === 'c')
    ? console.info(`${numero}°C son ${Math.round((numero*1.8)+32)}°F`)
    : console.info(`${numero}°F son ${Math.round((numero/1.8)-32)}°C`)
}


// esPrimo('-40')
// parImpar(-3)
// conversorTemperatura(31,"f")

conversorDecimalBinario = (numero = undefined , base = undefined) => {
  if (numero === undefined) return console.warn('Debe ingresar un numero')
  if (typeof numero !== 'number') return console.error(`El valor "${numero}" del numero, NO es un número`)
  if (base === undefined) return console.warn('Debe ingresar un numero en la base')
  if (typeof base !== 'number') return console.error(`El valor "${numero}" de base, NO es un número`)
  
  if (base===2) {
    return console.info(`${numero} base ${base} = ${parseInt(numero,base)} base 10`)
  } else if (base===10) {
    return console.info(`${numero} base ${base} = ${numero.toString(2)} base 2`)
  } else {return console.error(`El tipo de base a convertir no es valido`)

  }
}

descuento = (numero = undefined , porcentaje = 0) => {
  if (numero === undefined) return console.warn('Debe ingresar un numero')
  if (typeof numero !== 'number') return console.error(`El valor "${numero}", NO es un número`)
  if (Math.sign(numero) === -1 )return console.warn('Debe ser un numero positvo')
  if (numero === 0) return console.warn('El numero no puede ser 0')

  // if (porcentaje === undefined) return console.warn('Debe ingresar un numero en el porcentaje')
  if (typeof porcentaje !== 'number') return console.error(`El valor "${porcentaje}", NO es un número`)
  if (Math.sign(porcentaje) === -1 )return console.warn('Debe ser un numero positvo')
  if (porcentaje>100)return console.warn('Debe ser un numero entre 0 y 100')
  
  return console.info(`El descuento realizado a ${numero} de un ${porcentaje}% da ${numero - ((numero*porcentaje)/100)}`)

}

calcularAnios = (fecha = undefined ) => {
  if (fecha === undefined) return console.warn('No ingresaste una fecha');
  if( !(fecha instanceof Date) ) return console.warn('El valor que ingresaste no es una fecha válida');
  
  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365,
    diferenciaEnAnios = Math.floor(hoyMenosFecha / aniosEnMS);

    return (Math.sign(diferenciaEnAnios)=== -1)
    // ? console.info(`Faltan ${diferenciaEnAnios*-1} años`)
    ? console.info(`Faltan ${Math.abs(diferenciaEnAnios)} años para el ${fecha.getFullYear()}`)
    : (Math.sign(diferenciaEnAnios)=== 1)
      ? console.info(`Han pasado ${diferenciaEnAnios} años, desde ${fecha.getFullYear()}`)
      : console.info(`Estamos en el año actual ${fecha.getFullYear()}`)

}

// calcularAnios()
// calcularAnios({})
// calcularAnios(new Date(2201,10,11))
// descuento(100,0)

contarLetras = (cadena = "") => {
  if(!cadena) return console.warn('No ingreso nada')
  if(typeof cadena !== 'string') return console.warn('No ingreso una cadena de texto')

  let vocales = 0,
    consonantes = 0;

  for (const letra of cadena) {
    if (/[aeiouáéíóúAEIOUÁÉÍÓÚ]/.test(letra)) {
      vocales++;
    }
    if (/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/.test(letra)) {
      consonantes++;
    }
  }

  return console.info({
    cadena,
    vocales,
    consonantes
  })
}

validarNombre = (nombre = "") => {
  if(!nombre) return console.warn('No ingreso nada')
  if(typeof nombre !== 'string') return console.warn('No ingreso una cadena de texto')

  let expReg = /^[a-zA-ZÑñáÁéÉíÍóÓúÚ\s]+$/g.test(nombre)
  
  return(expReg)
    ? console.info(`"${nombre}", es un nombre válido`)
    : console.info(`"${nombre}", NO es un nombre válido`)
}

validarMail = (mail = "") => {
  if(!mail) return console.warn('No ingreso nada')
  if(typeof mail !== 'string') return console.warn('No ingreso una cadena de texto')

  let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(mail)
  
  return(expReg)
    ? console.info(`"${mail}", es un mail válido`)
    : console.info(`"${mail}", NO es un mail válido`)
}


// validarNombre('Matias!')
// validarNombre(3)
// validarNombre('Matias Nicolás')

// validarMail('matiscava@hotmail')

// contarLetras(45)

elevarAlCuadrado = (array = undefined) => {
  if ( array === undefined ) return console.warn('No ingreso nada')
  if ( !(array instanceof Array) ) return console.warn('No ingreso un array')
  if(array.length === 0) return console.warn('El arreglo está vacio')
  for (const num of array) {
    if ( typeof num !== 'number' ) return console.error(`El valor "${num}", NO es un número`)   
  }
  const arrayCuadrado = array.map( num => num * num )
  // array.forEach(numero => {
  //   if (numero === undefined) return console.warn('Debe ingresar un numero')
  //   if (typeof numero !== 'number') return console.error(`El valor "${numero}", NO es un número`)
  //   if (numero === 0) return console.warn('El numero no puede ser 0')
    
  //   arrayCuadrado.push(numero*numero)
    
  // });

  return console.info(arrayCuadrado)
}

// elevarAlCuadrado()
// elevarAlCuadrado(45)
// elevarAlCuadrado([1,2,8])
// elevarAlCuadrado([1,2,'hola'])

getMaxMin = (array = undefined) => {
  if ( array === undefined ) return console.warn('No ingreso nada')
  if ( !(array instanceof Array) ) return console.warn('No ingreso un array')
  if(array.length === 0) return console.warn('El arreglo está vacio')
  for (const num of array) {
    if ( typeof num !== 'number' ) return console.error(`El valor "${num}", NO es un número`)   
  }
  const arrayNuevo = []
  let max = Math.max(...array);
  let min = Math.min(...array);


  return console.info(`Arreglo original: ${array} \nValor maximo: ${max}\nValor Minimo: ${min}`)
}

// getMaxMin([1,2,8,-22])

getParImpar = (array = undefined) => {
  if ( array === undefined ) return console.warn('No ingreso nada')
  if ( !(array instanceof Array) ) return console.warn('No ingreso un array')
  if(array.length === 0) return console.warn('El arreglo está vacio')
  for (const num of array) {
    if ( typeof num !== 'number' ) return console.error(`El valor "${num}", NO es un número`)   
  }

  const arrayPar = [],
    arrayImpar = [];

  array.forEach(numero => {

      let num
      if (numero < 0) {
        num = numero * -1;
      }else{
        num = numero
      }

      if((num%2)===0){
        arrayPar.push(numero)
      }else{
        arrayImpar.push(numero)
      }
      
    });


  return console.info({arrayPar,arrayImpar})
}

// getParImpar([1,5,28,36,35,1,0,21,-8,-47])

ordenarAscendentDescendente = (array = undefined) => {
  if ( array === undefined ) return console.warn('No ingreso nada')
  if ( !(array instanceof Array) ) return console.warn('No ingreso un array')
  if(array.length === 0) return console.warn('El arreglo está vacio')
  for (const num of array) {
    if ( typeof num !== 'number' ) return console.error(`El valor "${num}", NO es un número`)   
  }


  return console.info(`Arreglo original: ${array} \nAscendente: ${array.sort((a,b) => a-b)}\nDescendente: ${array.sort((a,b) => b-a)}`)
}

eliminarRepetido = (array = undefined) => {
  if ( array === undefined ) return console.warn('No ingreso nada')
  if ( !(array instanceof Array) ) return console.warn('No ingreso un array')
  if(array.length === 0) return console.warn('El arreglo está vacio')
  if(array.length === 1) return console.warn('El arreglo debe tener al menos 2 datos')

  // const newArray = array.filter((item,index)=>{
  //   return array.indexOf(item) === index;
  // })
  // const newArray = array.filter((value,index,self) => self.indexOf(value) === index)
  const newArray = [...new Set(array)]
  return console.info(newArray)
}

promedio = (array = undefined) => {
  if ( array === undefined ) return console.warn('No ingreso nada')
  if ( !(array instanceof Array) ) return console.warn('No ingreso un array')
  if(array.length === 0) return console.warn('El arreglo está vacio')
  if(array.length === 1) return console.warn('El arreglo debe tener al menos 2 datos')

  for (const num of array) {
    if ( typeof num !== 'number' ) return console.error(`El valor "${num}", NO es un número`)   
  }

  // let total = array.length;
  // let suma = 0;
  // array.forEach(num => suma+=num);
  // return console.info(`el promedio del arreglo ${array} es :${suma/total}`)

  return console.info(
    array.reduce((total,num,index,array) => {
      total += num;
      if(index=== array.length-1){
        return `El promedio de ${array.join(' + ')} es ${ total/array.length }`
      } else {
        return total;
      }
    })
  )
}

// ordenarAscendentDescendente([1,5,28,36,35,1,0,21,-8,-47])

// eliminarRepetido([1,"hola","perro",32,1,"perro"])

// promedio([10,5,5,20])


