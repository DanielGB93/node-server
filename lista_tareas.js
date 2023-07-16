var readlineSync = require("readline-sync");
const tareas = [];

//Convertí esta funcion en una promesa y utilicé el setTimeout para simular la latencia de la función
function agregar(est, ind, desc) {
  const tarea = {};
  tarea.estado = est;
  tarea.indicador = ind;
  tarea.descripcion = desc;
  tareas.push(tarea);
  return new Promise(() => {
    setTimeout(() => {
      console.log(tarea);
    }, 3000);
  });
}

function eliminar(ind) {
  for (const i in tareas) {
    if (tareas[i].indicador == ind) {
      tareas.splice(i, 1);
      return console.log("Tarea borrada exitosamente");
    } else {
      return console.log("El valor no existe");
    }
  }
}

//Convertí la función en una promesa para luego utilizar .then()
function editar(ind, est) {
  for (const i in tareas) {
    if (tareas[i].indicador == ind) {
      return new Promise(() => {
        setTimeout(() => {
          tareas[i].estado == est;
        }, 3000);
      });
    } else {
      console.log("El indice no existe");
    }
  }
}


function mostrarlista() {
  return new Promise((resolve, reject)=>{
    console.log('Cargando tareas...');

    setTimeout(()=>{
        resolve(tareas);
    }, 3000)
  })
}

//Mi programa de ejecución es una función asíncrona. 
async function program() {
  const st = ["Incompleta", "Completa"];
  const menu = ["Agregar una Tarea", "Borrar", "Editar", "Mostrar Lista"];
  const selec= 0;
  selec = readlineSync.keyInSelect(
    menu,
    "Selecciona que quieres hacer: "
  );
  if (selec === 0) {
    const id = readlineSync.question("Ingresa un ID: ");
    const e = readlineSync.keyInSelect(st, "Estado de la tarea: ");
    const d = readlineSync.question("Descripcion de la tarea: ");
    //Espero el resultado de la función agregar, que retorna una promesa con el resultado de la tarea agregada.
    const ag = await agregar(e, id, d);
    consol.log(ag);
  } else if (selec == 1) {
    const id = readlineSync.question("Ingresa un ID: ");
    eliminar(id);
  } else if (selec == 2) {
    const id = readlineSync.question("Ingresa un ID: ");
    const e = readlineSync.keyInSelect(st, "Estado de la tarea: ");
    editar(id, e).then(()=>{
        console.log('La tarea ha sido editada');
    })

    } else {
    mostrarlista();
  }
}


program();
