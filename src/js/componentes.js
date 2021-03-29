//Importo el css que se complementa el JS
import '../css/componentes.css';

//Por defecto las funciones no se pueden importar en webpack, para hacerlo hay que ponerle un export delante
export const saludar = (nombre) =>
{
    console.log('Creando etiqueta H1');

    const h1 = document.createElement('h1');
    h1.innerText =  `Hola, ${nombre}, cómo estás?. Test 2`;

    document.body.append(h1);
}