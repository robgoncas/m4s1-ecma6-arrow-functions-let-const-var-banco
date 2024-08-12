

// Alcance de 'var'
// 'var' tiene un alcance de función o global y puede ser redeclarada y reasignada.
// Si se declara en un bloque (if, for), aún es accesible fuera de ese bloque.

var ejemploVar = "Global";


// Función flecha para mostrar el alcance de 'var'
const ejemploVarFuncion = () => {
    var ejemploVar = "Local";
    console.log(ejemploVar);
    // "Local"
};

console.log(ejemploVar);
// "Global"
ejemploVarFuncion();




// Alcance de 'let'
// 'let' tiene un alcance de bloque y no puede ser redeclarada en un mismo bloque.
// Es ideal para variables que cambian de valor al igual que las vars,
// pero que deberían estar limitadas al bloque en que se declaran.

const ejemploLet = () => {
    let saldo = 1000;
    if (true) {
        // Esta variable es diferente a la de arriba, solo existe dentro de este bloque.
        let saldo = 500;
        console.log(saldo);
        // 500
    }
    console.log(saldo);
    // 1000
};

ejemploLet();



// Alcance de 'const'
// 'const' también tiene un alcance de bloque, pero su valor no puede cambiar.
// Es ideal para constantes y objetos que no deben ser reasignados.

// Función flecha para mostrar el alcance de 'const'
const ejemploConst = () => {
    const interes = 0.05;
    // interes = 0.04; // Esto generaría un error, ya que 'const' no permite la reasignación.

    const usuario = { nombre: 'Carlos', saldo: 2000 };
    usuario.saldo = 2500; // Esto es válido, ya que no se está reasignando el objeto, solo cambiando una propiedad.

    console.log(interes); // 0.05
    console.log(usuario); // { nombre: 'Carlos', saldo: 2500 }
};

ejemploConst();




// Comparación de let, var y const
// 'var' es global o de función, permite redeclaración y reasignación.
// 'let' es de bloque, no permite redeclaración pero sí reasignación.
// 'const' es de bloque, no permite redeclaración ni reasignación.

// Función flecha para comparar el alcance de let, var y const
const compararScope = () => {
    if (true) {
        var variableVar = 'Soy var';
        let variableLet = 'Soy let';
        const variableConst = 'Soy const';
    }

    console.log(variableVar);  // "Soy var" (var tiene alcance de función, así que se puede acceder aquí)
    // console.log(variableLet);  // Error! (let tiene alcance de bloque, no es accesible aquí)
    // console.log(variableConst);  // Error! (const tiene alcance de bloque, no es accesible aquí)
};

compararScope();
