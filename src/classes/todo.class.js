
//Le pongo el export para poder usarla desde fuera del módulo
export class Todo{

    //Para pasar del JSON a una instancia de la clase, pillo el objeto que se generó con el parse del JSON y lo trato en esta función estática
    static fromJson ({tarea,id,completado,creado}){
        const tempTodo = new Todo(tarea);
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }

    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }


}