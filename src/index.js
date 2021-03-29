
//Para importar la función se hace así, pero import sólo se puede usar dentro de módulos
//import {saludar} from './js/componentes';
//Uso el archivo global de estilo de css
import './styles.css'

//Importo la clase de Todo
//import {Todo} from './classes/todo.class.js';

//Importo el TodoList
//import {TodoList} from './classes/todo-list.class.js';

//Al tener el index.js en classes podemos importar así, y nos traemos las dos clases, no hace falta poner el index.js
import {Todo, TodoList} from './classes'
import {crearTodoHtml} from './js/componentes'

export const todoList = new TodoList();

const tarea = new Todo("Aprender JavaScript");
// const tarea2 = new Todo("Comprar un unicornio");

todoList.nuevoTodo(tarea);
// todoList.nuevoTodo(tarea2);
console.log(todoList);

crearTodoHtml(tarea);

//Con esto se crea una nueva entrada en el localStorage (la información no se pierde al cerrar la sesión)
// localStorage.setItem('clave','valor');

//Con esto se crea una nueva entrada en el sessionStorage (cuando se cierra la sesión se pierde todo)
// sessionsStorage.setItem('clave','valor');

// setTimeout ( () => {
//     localStorage.removeItem('clave');
// }
// ,1500);