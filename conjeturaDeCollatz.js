let cont = 1;
let numOrgn = null;
const collatzArr = [1, 4, 2];
let collatzArrNew = [];
function arraysIguales(a, b) {
    const ordenadoA = [...a].sort();
    const ordenadoB = [...b].sort();
    return ordenadoA.every((val, i) => val === ordenadoB[i]);
  }
function collatz (number, debug = true){
    if (cont===1) {
        numOrgn = number;
        collatzArrNew = [];
    }
    cont++;
    if (number%2===0) {
        number = number/2;
    }else {
        number = (number * 3) + 1;
    }
    if (!debug) console.log(number);
    collatzArrNew.push(number);
    if (collatzArrNew.length > 3) {
        collatzArrNew.shift();
      }
    if (arraysIguales(collatzArrNew, collatzArr)) {
      const resultado = !debug ? `El número ${numOrgn} necesitó de ${cont} interacciones`: cont;
      cont = 0;
      return resultado;
      }
      return collatz(number, debug);
}

function interaccionesCollatz(inx) {
  let index = 1; 
  let newNumber = 0;
  while (newNumber !== inx) {
        newNumber = collatz(index, true);
        index++;
  }
  return `El primer número que necesita ${inx} interacciones es el ${index}.`;
}

console.log(collatz(24,false));
console.log(interaccionesCollatz(10));