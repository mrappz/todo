
//Le pongo el export para poder usarla desde fuera del módulo
export class Todo{
    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }
}