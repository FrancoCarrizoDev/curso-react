// Spread para Arrays

const frutas = ["manzana", "banana"];
const verduras = ["zanahoria", "espinaca"];

// Combinar dos arreglos

const alimentos = [...frutas, ...verduras];
const alimentos2 = [frutas, verduras];

//console.log({alimentos2,alimentos})

// Spread para Objetos

const objetoA = { nombre: "Alice", edad: 25 };
const objetoB = {
  profesion: "Desarrolladora",
  pais: "Argentina",
  nombre: "Fran",
};

const combinar = {
  ...objetoA,
  ...objetoB,
};
//console.log(combinar)

// Copia

//const persona = { nombre: "Carlos", edad: 30 };
//const cumpleaños = { ...persona, edad: persona.edad + 1 };

//console.log(cumpleaños)

const persona2 = {
  nombre: "Laura",
  edad: 28,
  profesion: "Ingeniera",
  dni: 37619444,
};

//const propiedadABuscar = "dni"
//console.log(persona.nombre)
//console.log(persona[propiedadABuscar])

const dniABuscar = "37777780";

const usuariosArray = [
  {
    dni: "37777777",
    nombre: "Marta",
  },
];

const usuarios = {
  37777777: "Marta",
  37777778: "Juan",
  37777779: "Elena",
  37777780: "Maria",
};

//console.log(usuarios[dniABuscar])

// Ejemplo Desestructuración

const persona = {
  nombre: "Miguel",
  edad: 34,
  profesion: "Desarrollador Web",
};

const nombreDeMiguel = persona.nombre;
const { nombre, ...restoDePropiedades } = persona;

// console.log(restoDePropiedades)

const arrayDePersonas = [
  {
    nombre: "Miguel",
    edad: 34,
    profesion: "Desarrollador Frontend",
  },
  {
    nombre: "Maria",
    edad: 30,
    profesion: "Desarrollador Backend",
  },
  {
    nombre: "Jose",
    edad: 28,
    profesion: "Desarrollador FullStack",
  },
];

const arreglo = [1, 2, 3];
console.log(arreglo.includes(3));

// ESTO ES EL POLYFILL
if (!Array.prototype.includesCustom) {
  // Si no existe, definimos el método.
  Array.prototype.includesCustom = function (searchElement) {
    console.log(this); // Es el array
    console.log(searchElement); // Es el numero a buscar
    for (let i = 0; i < this.length; i++) {
      // Comprobamos si el elemento actual es igual al elemento buscado.
      if (this[i] === searchElement) {
        return true;
      }
    }
    // Si no encontramos el elemento, retornamos false.
    return false;
  };
}

let arr = [1, 2, 3];
console.log(arr.includesCustom(10));
