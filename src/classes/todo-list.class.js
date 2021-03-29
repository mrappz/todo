
export class TodoList{
    constructor(){
        this.todos = [];
    }

    nuevoTodo (todo){
        this.todos.push(todo);
    }

    eliminarTodo(id){
        //Con el filter lo que estamos haciendo es devolver todos aquellos que no tengan el id que se le pasa por parámetro
        this.todos = this.todos.filter(todo => todo.id != id);

    }

    marcarCompletado(id){
        for (const todo of this.todos){
            //Con dos iguales no comprueba el tipo, solo que son iguales, aunque uno sea un string y el otro un number. Si quiero comprobar todo tiene que ser con 3 iguales
            if (todo.id == id){
                //Le cambio el valor al nodo adecuado
                todo.completado = !todo.completado;
                break;
            }
        }

    }

    eliminarCompletados(){
        //Con el filter lo que estamos haciendo es devolver todos aquellos que no estén completados
        this.todos = this.todos.filter(todo => !todo.completado);
    }

    guardarLocalStorage(){

    }

    cargarLocalStorage(){
        
    }
}