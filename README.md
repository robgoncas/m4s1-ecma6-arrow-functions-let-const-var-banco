### README.md

# Ejercicios de Banco en JavaScript con ECMAScript 6

Este proyecto presenta una serie de funciones que ilustran conceptos clave de ECMAScript 6 (ES6) en el contexto de un banco. Los ejemplos muestran cómo utilizar nuevas funcionalidades para manejar arreglos, conjuntos, y operaciones comunes en un sistema bancario.

## Funciones y Conceptos Cubiertos

### 1. **`convertirUsuariosAArray()`**
   - **Concepto**: Convertir un `Set` de usuarios a un array utilizando `Array.from()`.
   - **Ejemplo**: Convierte un conjunto de usuarios en un array para facilitar su manipulación.

### 2. **`crearArrayDeTransacciones()`**
   - **Concepto**: Crear un array de tipos de transacciones usando `Array.of()`.
   - **Ejemplo**: Crea un array con diferentes tipos de transacciones bancarias como depósito, retiro y transferencia.

### 3. **`encontrarTransaccionMayor()`**
   - **Concepto**: Encontrar un objeto en un array usando `find()`.
   - **Ejemplo**: Busca la primera transacción con un monto mayor a $5000.

### 4. **`encontrarIndiceDeUsuarioNegativo()`**
   - **Concepto**: Encontrar el índice de un elemento en un array usando `findIndex()`.
   - **Ejemplo**: Identifica la posición del primer usuario con saldo negativo en la lista.

### 5. **`verificarUsuarioEnLista()`**
   - **Concepto**: Verificar si un elemento existe en un array utilizando `includes()`.
   - **Ejemplo**: Comprueba si un usuario específico está en la lista de usuarios del banco.

### 6. **`verificarUsuariosConSaldoAlto()`**
   - **Concepto**: Comprobar si al menos un elemento cumple una condición usando `some()`.
   - **Ejemplo**: Verifica si algún usuario tiene un saldo mayor a $10,000.

### 7. **`verificarCuentasActivas()`**
   - **Concepto**: Comprobar si todos los elementos cumplen una condición usando `every()`.
   - **Ejemplo**: Revisa si todos los usuarios del banco tienen cuentas activas.

### 8. **`llenarTransaccionesPendientes()`**
   - **Concepto**: Llenar un array con un valor específico usando `fill()`.
   - **Ejemplo**: Marca un subconjunto de transacciones como pendientes.

### 9. **`iterarUsuarios()`**
   - **Concepto**: Iterar sobre las claves y valores de un array usando `entries()`, `keys()`, y `values()`.
   - **Ejemplo**: Recorre un array de usuarios mostrando su índice y nombre.

### 10. **`aplanarGiros()`**
   - **Concepto**: Aplanar arrays con subarrays usando `flat()` y transformar elementos en un array plano usando `flatMap()`.
   - **Ejemplo**: Aplana un array de giros bancarios y añade una confirmación de monto.

### 11. **`ejecutarEjemplos()`**
   - **Concepto**: Ejecutar todas las funciones anteriores.
   - **Ejemplo**: Llama a cada función secuencialmente para mostrar los resultados en la consola.

## Alcance de Variables (Scope) en ES6

### Explicación del Alcance de Variables

#### 1. **`var`**
   - **Alcance**: Función o global.
   - **Características**: Se puede redeclarar y reasignar.
   - **Ejemplo**: Usada principalmente en ES5, su comportamiento puede causar errores debido a la elevación (hoisting).

#### 2. **`let`**
   - **Alcance**: Bloque.
   - **Características**: No se puede redeclarar en el mismo bloque, pero sí reasignar.
   - **Ejemplo**: Ideal para variables que cambiarán su valor dentro de un bloque de código.

#### 3. **`const`**
   - **Alcance**: Bloque.
   - **Características**: No se puede redeclarar ni reasignar.
   - **Ejemplo**: Perfecta para constantes y referencias que no deben cambiar.

### Ejemplo de Alcance con Arrow Functions

```javascript
const mostrarAlcanceVariables = () => {
    if (true) {
        var x = 'var - dentro del bloque';
        let y = 'let - dentro del bloque';
        const z = 'const - dentro del bloque';
        console.log(x); // var - dentro del bloque
        console.log(y); // let - dentro del bloque
        console.log(z); // const - dentro del bloque
    }
    console.log(x); // var - dentro del bloque
    console.log(y); // ReferenceError: y is not defined
    console.log(z); // ReferenceError: z is not defined
};

mostrarAlcanceVariables();
```
Este código muestra cómo `var` tiene alcance de función (o global), mientras que `let` y `const` están limitados al bloque en el que se declaran.