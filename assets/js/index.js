const agregarTarea = function(){

}

const btn = document.querySelector ('#agregar');
const arregloTareas = [];
let ultimoId = 11202200000;
const eliminarTarea = function(idTarea){
    const posicion = arregloTareas.findIndex((elemento) => elemento.id == idTarea);
    
    if(posicion >= 0){
    arregloTareas.splice(posicion,1);
    dibujaLista();
    }
}

const tareaRealizada = function(idTarea){
    const posicion = arregloTareas.findIndex((elemento) => elemento.id == idTarea);
    arregloTareas[posicion].realizada = !arregloTareas[posicion].realizada;
    dibujaLista();
}

const dibujaLista = function(){
    const listaTareas = document.querySelector("#listaTareas");
    const totalTareas = document.querySelector('#totalTareas');

    let htmlElementosLista = '<thead><th>ID</th><th>Tarea</th><th></th></thead><tbody>';
    for(const tarea of arregloTareas){
        if(tarea.realizada){
            statusCheck = 'checked';
        } else{
            statusCheck = '';
        }
        htmlElementosLista +=  `<tr> 
            <td> ${tarea.id}</td>  
            <td class="tarea">${tarea.nombre}</td>
            <td><input type="checkbox" ${statusCheck} onclick="tareaRealizada(${tarea.id})" class="check"> 
            <i class="fa-solid fa-square-xmark"  onclick="eliminarTarea(${tarea.id})"></i></td>
            </tr>`;
    }

    htmlElementosLista+= "</tbody>" ;

    

    listaTareas.innerHTML=htmlElementosLista;
    totalTareas.innerHTML = arregloTareas.length;
    const arregloTareasRealizadas = arregloTareas.filter ((e) => e.realizada == true);
    document.querySelector('#tareasRealizadas').innerHTML = arregloTareasRealizadas.length;
}



btn.addEventListener('click',function(){
    const nombreTarea = document.querySelector('#nombreTarea').value;
    const id = ultimoId;
    const realizada = false;
    
    const tarea = {
        id: id,
        nombre: nombreTarea,
        realizada: realizada
    }
    arregloTareas.push(tarea);
    dibujaLista();
    ultimoId++;

    
});