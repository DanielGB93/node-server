var readlineSync = require('readline-sync');
const tareas=[];


function agregar(est, ind, desc){
    const tarea ={};
    tarea.estado=est;
    tarea.indicador= ind;
    tarea.descripcion= desc;
    return tareas.push(tarea);
    
}

function eliminar(ind){
    for (const i in tareas) {
        if (tareas[i].indicador == ind){
            tareas.splice(i, 1);
            return console.log('Tarea borrada exitosamente');
        }
        else{
            return console.log('El valor no existe');
        }
                   
    }
}

function editar(ind, est){
    for(const i in tareas){
        if(tareas[i].indicador == ind){
            tareas[i].estado == est;
        }else{
            console.log('El indice no existe');
        }
    }
}

function mostrarlista(){
    return console.log(tareas);
}


const st= ['Completa', 'Incompleta'];

const menu = ['Agregar una Tarea', 'Borrar', 'Editar', 'Mostrar Lista'];
const selec = readlineSync.keyInSelect(menu, 'Selecciona que quieres hacer: ');
if(selec === 0){
    const id= readlineSync.question('Ingresa un ID: ');
    const e = readlineSync.keyInSelect(st, 'Estado de la tarea: ');
    const d = readlineSync.question('Descripcion de la tarea: ');
    agregar(e, id, d);
    
} else if(selec ==1){
        const id= readlineSync.question('Ingresa un ID: ');
        eliminar(id);
    }
    else if(selec ==2) {
        const id= readlineSync.question('Ingresa un ID: ');
        const e = readlineSync.keyInSelect(st, 'Estado de la tarea: ');
        editar(id, e);
    } else{
        mostrarlista();
    }
