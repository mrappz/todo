
//Aquí vamos a crear los elementos de HTML

import { Todo } from "../classes";
import {todoList} from '../index';

//Referencias HTML
//Me traigo la lista ordenada del HTML
const divTodoList = document.querySelector('.todo-list');
//Me traigo el input del nuevo todo del HTML
const txtInput = document.querySelector('.new-todo');
//Me traigo el botón de eliminar completados
const btnBorrarCompletados = document.querySelector('.clear-completed');


export const crearTodoHtml = (todo) =>{
    
    //Al hacer el ${} se puede meter lo que sea de JavaScript dentro, en el caso de la clase compruebo el valor completado de la instancia, si es true le pongo completed y si no ''
    //Hago lo mismo para completado
    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : ''} />
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
  </li>`;

  //Creo un div para el elemento de la lista
  const div = document.createElement('div');
  div.innerHTML = htmlTodo;

  //Esto se quitará luego, ya que devolveré el HTML del div, en lugar de meter el div meto el primer hijo del div
  divTodoList.append(div.firstElementChild);

  return div.firstElementChild;
}


//Eventos
txtInput.addEventListener('keyup', (event ) =>{
    if (event.keyCode === 13 && txtInput.value.length > 0){
        //Creo el nuevo todo con lo del input
        const nuevoTodo = new Todo (txtInput.value);
        //Lo añado a la lista de todos
        todoList.nuevoTodo(nuevoTodo);
        //Creo el HTML correspondiente
        crearTodoHtml(nuevoTodo);
        //DEspués de insertarlo limpio el input
        txtInput.value = '';
    }    
});

//Aquí lo que hago es controlar cuando hacen click en algún elemento de la lista
divTodoList.addEventListener('click',(event) =>{
    //Así se dónde ha hecho click
    const nombreElemento = event.target.localName; //input, label, botón
    //Con esto me traigo el padre del padre del que generó el evento
    const todoElemento = event.target.parentElement.parentElement;
    //Para obtener el id del todo que se va a marcar/desmarcar lo obtengo así
    const todoId = todoElemento.getAttribute('data-id');

    if (nombreElemento.includes('input')){ //Se ha hecho click en el input
        //Con esto se marca como completado en el array
        todoList.marcarCompletado(todoId);
        //con esto le pongo o le quito la clase al elemento padre para que salga tachado o no
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')){ 
        //Se borra el todo del array
        todoList.eliminarTodo(todoId);
        //Quito del HTML del que he borrado
        divTodoList.removeChild (todoElemento);
    }
});

//En este caso no me hace falta saber nada del evento, solo que se ha hecho click
btnBorrarCompletados.addEventListener('click', () =>{

    //Borro los completados del array
    todoList.eliminarCompletados();

    //Borro de abajo hacia arriba, para que cuando borre no se modifiquen los índices, empiezo por el final y voy hacia arriba
    for (let i = divTodoList.children.length - 1;i >=0;i--){

        const elemento = divTodoList.children[i];
        //En este caso miro si tiene la clase completed
        if (elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }

    }

});