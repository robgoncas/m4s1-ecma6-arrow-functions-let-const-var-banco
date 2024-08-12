// 1. Convertir un Set de usuarios a un array real usando Array.from()
const convertirUsuariosAArray = () => {
    const usuariosSet = new Set(['Carlos López', 'Ana Méndez', 'José Martínez']);
    const usuariosArray = Array.from(usuariosSet);
    console.log(usuariosArray); // ['Carlos López', 'Ana Méndez', 'José Martínez']
};



// 2. Crear un array de tipos de transacciones usando Array.of()
const crearArrayDeTransacciones = () => {
    const transacciones = Array.of('Depósito', 'Retiro', 'Transferencia');
    console.log(transacciones); // ['Depósito', 'Retiro', 'Transferencia']
};

// 3. Encontrar una transacción mayor a 5000 usando find()
const encontrarTransaccionMayor = () => {
    const transacciones = [
        { tipo: 'Depósito', monto: 3000 },
        { tipo: 'Retiro', monto: 7000 },
        { tipo: 'Transferencia', monto: 2000 }
    ];
    const transaccionMayor = transacciones.find(transaccion => transaccion.monto > 5000);
    console.log(transaccionMayor); // { tipo: 'Retiro', monto: 7000 }
};

// 4. Encontrar el índice de un usuario con saldo negativo usando findIndex()
const encontrarIndiceDeUsuarioNegativo = () => {
    const usuarios = [
        { nombre: 'Carlos López', saldo: 2000 },
        { nombre: 'Ana Méndez', saldo: -500 },
        { nombre: 'José Martínez', saldo: 1500 }
    ];
    const indiceNegativo = usuarios.findIndex(usuario => usuario.saldo < 0);
    console.log(indiceNegativo); // 1
};

// 5. Verificar si un usuario específico está en la lista usando includes()
const verificarUsuarioEnLista = () => {
    const usuarios = ['Carlos López', 'Ana Méndez', 'José Martínez'];
    const estaEnLista = usuarios.includes('Ana Méndez');
    console.log(estaEnLista); // true
};

// 6. Verificar si algún usuario tiene más de 10,000 en su cuenta usando some()
const verificarUsuariosConSaldoAlto = () => {
    const usuarios = [
        { nombre: 'Carlos López', saldo: 8000 },
        { nombre: 'Ana Méndez', saldo: 12000 },
        { nombre: 'José Martínez', saldo: 7000 }
    ];
    const hayUsuarioConSaldoAlto = usuarios.some(usuario => usuario.saldo > 10000);
    console.log(hayUsuarioConSaldoAlto); // true
};

// 7. Verificar si todos los usuarios tienen cuentas activas usando every()
const verificarCuentasActivas = () => {
    const usuarios = [
        { nombre: 'Carlos López', activo: true },
        { nombre: 'Ana Méndez', activo: true },
        { nombre: 'José Martínez', activo: true }
    ];
    const todasCuentasActivas = usuarios.every(usuario => usuario.activo);
    console.log(todasCuentasActivas); // true
};

// 8. Llenar un array de transacciones recientes con 'pendiente' usando fill()
const llenarTransaccionesPendientes = () => {
    const transaccionesRecientes = new Array(5).fill('completada');
    
    transaccionesRecientes.fill('pendiente', 2, 4);
    console.log(transaccionesRecientes); 
    // ['completada', 'completada', 'pendiente', 'pendiente', 'completada']
};

// 9. Iterar sobre los usuarios del banco mostrando sus claves y valores usando entries(), keys(), y values()
const iterarUsuarios = () => {
    const usuarios = ['Carlos López', 'Ana Méndez', 'José Martínez'];

    for (let [index, usuario] of usuarios.entries()) {
        console.log(`Índice: ${index}, Usuario: ${usuario}`);
    }

    for (let key of usuarios.keys()) {
        console.log(`Índice: ${key}`);
    }

    for (let value of usuarios.values()) {
        console.log(`Usuario: ${value}`);
    }
};

// 10. Aplanar un array de giros con subarrays usando flat() y flatMap()
const aplanarGiros = () => {
    const giros = [
        ['Carlos López', 500],
        ['Ana Méndez', 700],
        ['José Martínez', 1000]
    ];
    const girosAplanados = giros.flat();
    console.log(girosAplanados); 
    // ['Carlos López', 500, 'Ana Méndez', 700, 'José Martínez', 1000]

    const girosConConfirmacion = giros.flatMap(giro => [giro[0], `Monto: ${giro[1]} - Confirmado`]);
    console.log(girosConConfirmacion); 
    // ['Carlos López', 'Monto: 500 - Confirmado', 'Ana Méndez', 'Monto: 700 - Confirmado', 'José Martínez', 'Monto: 1000 - Confirmado']
};


const ejecutarEjemplos = () => {

    convertirUsuariosAArray();
    crearArrayDeTransacciones();
    encontrarTransaccionMayor();
    encontrarIndiceDeUsuarioNegativo();
    verificarUsuarioEnLista();
    verificarUsuariosConSaldoAlto();
    verificarCuentasActivas();
    llenarTransaccionesPendientes();
    iterarUsuarios();
    aplanarGiros();

};

ejecutarEjemplos();
