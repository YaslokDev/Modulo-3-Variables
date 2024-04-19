interface Grupo {
  grupo: string;
  añoFundacion: number;
  activo: boolean;
  genero: string;
}

let popRock: string = "🎵 Pop Rock";
let rock: string = "🎸 Rock";
let hardRock: string = "🤘 Hard Rock";
let clasica: string = "🎼 Clásica";

const grupo1: Grupo = {
  grupo: "The Beatles",
  añoFundacion: 1960,
  activo: true,
  genero: popRock,
};

const grupo2: Grupo = {
  grupo: "Queen",
  añoFundacion: 1970,
  activo: false,
  genero: rock,
};

const grupo3: Grupo = {
  grupo: "AC DC",
  añoFundacion: 1973,
  activo: true,
  genero: hardRock,
};

const grupo4: Grupo = {
  grupo: "Ludwig van Beethoven",
  añoFundacion: 1770,
  activo: false,
  genero: clasica,
};

const grupo5: Grupo = {
  grupo: "The Rolling Stones",
  añoFundacion: 1962,
  activo: true,
  genero: rock,
};

console.log(`%c${grupo1.grupo}`, "font-weight:bold;font-size:18px;background-color:green;");
console.log(`Año fundación: ${grupo1.añoFundacion}
Sigue en activo: ${grupo1.activo}
Género musical: ${grupo1.genero}`);

console.log(`%c${grupo2.grupo}`, "font-weight:bold;font-size:18px;background-color:green;");
console.log(`Año fundación: ${grupo2.añoFundacion}
Sigue en activo: ${grupo2.activo}
Género musical: ${grupo2.genero}`);

console.log(`%c${grupo3.grupo}`, "font-weight:bold;font-size:18px;background-color:green;");
console.log(`Año fundación: ${grupo3.añoFundacion}
Sigue en activo: ${grupo3.activo}
Género musical: ${grupo3.genero}`);

console.log(`%c${grupo4.grupo}`, "font-weight:bold;font-size:18px;background-color:green;");
console.log(`Año fundación: ${grupo4.añoFundacion}
Sigue en activo: ${grupo4.activo}
Género musical: ${grupo4.genero}`);

console.log(`%c${grupo5.grupo}`, "font-weight:bold;font-size:18px;background-color:green;");
console.log(`Año fundación: ${grupo5.añoFundacion}
Sigue en activo: ${grupo5.activo}
Género musical: ${grupo5.genero}`);
