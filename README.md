# Collatz Conjecture

Este programa implementa la **Conjetura de Collatz**, un famoso problema matemático que establece que, comenzando con cualquier número entero positivo, si el número es par se divide entre 2, si es impar se multiplica por 3 y se le suma 1, repitiendo este proceso hasta llegar al número 1. La conjetura afirma que siempre se llegará a 1, sin importar el número inicial.

El programa tiene dos funciones principales:
1. **`collatz(number, debug)`**: Calcula el número de iteraciones necesarias para llegar a 1 siguiendo las reglas de la conjetura de Collatz, y también permite ver el proceso si se activa la opción de depuración.
2. **`interaccionesCollatz(inx)`**: Devuelve el primer número que necesita un número específico de interacciones para llegar a 1 según la conjetura de Collatz.

## Funciones

### `collatz(number, debug = true)`
Calcula las interacciones de un número utilizando la Conjetura de Collatz.

#### Parámetros:
- `number` (número entero): El número con el cual comenzar el proceso de Collatz.
- `debug` (booleano): Si es `true`, se muestra el número en cada iteración del proceso. Si es `false`, no se muestra ningún log.

#### Retorno:
Devuelve un **número** que representa el número de iteraciones que el número original necesitó para llegar a 1, o bien una cadena que describe el proceso si `debug` es `true`.

#### Ejemplo:
```js
collatz(24, false); // Devuelve 12
