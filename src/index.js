
//Lo quito de aquí y lo paso a js/componentes.js
// const saludar = (nombre) =>
// {
//     console.log('Creando etiqueta H1');

//     const h1 = document.createElement('h1');
//     h1.innerText =  `Hola, ${nombre}`;

//     document.body.append(h1);
// }

//Para importar la función se hace así, pero import sólo se puede usar dentro de módulos
import {saludar} from './js/componentes';
//Uso el archivo global de estilo de css
import './styles.css'

const nombre = 'Roberto';

saludar(nombre);