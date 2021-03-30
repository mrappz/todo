import { Todo } from "./todo.class";

export class TodoList{
    constructor(){
        //this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo (todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){
        //Con el filter lo que estamos haciendo es devolver todos aquellos que no tengan el id que se le pasa por parámetro
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();

    }

    marcarCompletado(id){
        for (const todo of this.todos){
            //Con dos iguales no comprueba el tipo, solo que son iguales, aunque uno sea un string y el otro un number. Si quiero comprobar todo tiene que ser con 3 iguales
            if (todo.id == id){
                //Le cambio el valor al nodo adecuado
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }

    }

    eliminarCompletados(){
        //Con el filter lo que estamos haciendo es devolver todos aquellos que no estén completados
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        //Así no se puede hacer porque no guarda el array en sí.
        //localStorage.setItem('todo',this.todos);

        //Para guardar paso el array a un JSON, y se pasa a un string con el stringify, porque en el localStorage solo se pueden guardar strings
        localStorage.setItem('todo',JSON.stringify(this.todos));

    }

    cargarLocalStorage(){
        //Hay que comprobar primero si existe en el localStorage
        this.todos = (localStorage.getItem('todo')) 
                    ? JSON.parse(localStorage.getItem('todo')) 
                    : [];
        //map lo que hace es convertir cada de uno de los objetos que se han recuperado del Json a instancias de clase Todo con la función fromJson
        this.todos = this.todos.map(obj => Todo.fromJson(obj));

        //OJO: Genera un array de objetos, pero no un array de instancias de la clase todo.

        // if (localStorage.getItem('todo')){
        //     //Aquí entro si existe el el localStorage la clave 'todo', tengo que traerme el JSON y pasarlo a un array
        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        //     console.log('cargarLocal:', this.todos);
        // } else{
        //     //Si no existe, inicializo el array de todos
        //     this.todos = [];
        // }


    }
    //Con esta función devuelvo los pendientes
    calcularPendientes (){
        let pendientes = 0;       
        this.todos.forEach((todo) => {
            if (!todo.completado){
                pendientes++;
            }
        })        
        return pendientes;
    }
}