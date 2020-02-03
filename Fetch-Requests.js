//FETCH nos permite acceder a la API y obtener un resultado

/**
 * Al momento de obtener datos para trabajar con nuestro sistema, vamos a
 * tener que acceder a alguna fuente de informacion, o sea, un backend o una 
 * base de datos. Para lograr esto tenemos varias herramientas que cumplen todas
 * la misma funcion. Fetch. Obtener.
 * 
 */
fetch(...).then(...).catch(...); // fetch siempre lleva objeto 
let data= { // es el url de la API
    method: 'POST', // *GET= buscar, POST=crear, PUT=modificar, DELETE=eliminar no lleva body podes borrar de a uno no mas 
    headers: { 
        'Content-Type': 'application/json' // contend type contenido que tiene nuestro pedido, de que tipo es 
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header o datos que le voy a mandar ,stringify convierte en string
    };
fetch ("https://mirecursoonline.com/bla", data)
    .then( response => {  // despues de que la promesa se cumple ejecuta lo siguiente es un callback recibiendo parametros
     if(response.code=!200){  // si el response es difernete a 200 tirar error 
         throw "error";
     }
    console.log("chau");  //aca va una funcion que se va a ejecutar         
    return JSON.parse(res);
    }) 
    .catch( err =>{
    console.log(err); // Catch error como en try/catch
});
console.log("hola"); 
//EJEMPLO
fetch ("pedir menu",{method:"GET"})
    .then(menu=>{
        let elegirComida=elegirMorfi(menu); //aca guardo la comida que elegi en un variable 
        return elegirComida;    
    })
    .then(comidaQueElegi=>{
        fetch('pedir/${comidaQueElegi}',{method:"GET"}) //aca lo que hago es agrupar los then  
        .then (bandeja=>{
            if(bandeja.status=="llena"){
                comerMilanesa(bandeja.comida); // en then va a decir si la bandeja esta llena entonces como sino tira error 
            } 
        });
        servirCoca();
        .catch( error =>{
            "hubo un error con la milanesa"
        });
        ponerCubiertos(); // estas dos funciones se ejecutan con el fetch y despues se ejecuta el .then


/**fetch("pedir milasena",{method: "GET"}) // lo que hago es que pido la comida mientras tanto se ejecuta ponerCubiertos y servirCoca despues de eso se ejecuta la funcion then
    .then( bandeja=>{
        if(bandeja.status=="llena"){
            comerMilanesa(bandeja.comida); // en then va a decir si la bandeja esta llena entonces como sino tira error 
        }  
    })
    .catch( error =>{
        "hubo un error con la milanesa"
    });

ponerCubiertos(); // estas dos funciones se ejecutan con el fetch y despues se ejecuta el .then
servirCoca();
*/

// estoy pidiendo algo y en algun momento va a llegar mientras tanto se van a ejecutar las promesas 

//primero HOLA, despues se ejecuta CHAU = promesas 

/**
 * /**
 * Tenemos la api de Fetch, un standard que viene en todos los browsers, y como podemos
 * observar en el ejemplo anterior, estamos encadenando .then y .catch en nuestra ejecución
 * 
 * Esto es porque tenemos algo llamado promesas. 
 * Las promesas son datos que devuelve una función, en este caso "fetch". Esta promesa devuelta
 * no tiene ningún dato real de lo que esperamos, simplemente nos dice "te prometo que voy a
 * devolverte algo", y en cuanto lo hace, usando la función "then" podemos tomar esa data, que 
 * nos llega por parámetro, y ejecutar algo con la misma.
 * De la misma forma encadenamos un "catch", porque puede suceder que haya un error, y en lugar de
 * frenar la ejecución de nuestro programa, queremos hacer algo para que la UX sea mejor, y no 
 * se muestre un error por consola y nada más.
 */

 /**
  * La API fetch se puede usar, pero también podemos usar librerías que nos faciliten esto.
  * Por ejemplo AXIOS.
  */
 <script src="https://unpkg.com/axios/dist/axios.min.js"></script> // esto es lo que vamos a agregar al HTML
 // usar variables 
 let pepe 
 axios.get("https://jsonplaceholder.typicode.com/todos") 
    .then(res => {pepe=res.data})
    .catch(err => console.log(err));

pepe //para imprimir 

/**
 * De esta forma obtenemos la data que queremos desde el servidor remoto.
 * Tambien tenemos los métodos axios.post, axios.put y axios.delete
 * para referenciar los diferentes métodos que queremos enviar.
 * Tanto post como put requieren  cierta información, porque me sirven
 * para crear algo nuevo o modificar algo existente. 
 */

 // creacion
 axios.post('https://jsonplaceholder.typicode.com/posts', {
     title: " NUEVO TITULO",
     body: "Nuevo cuerpo",
     userId: 1
 }).then(res => console.log(res.data))
.catch(err => {throw err;});

// update
axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    title: " NUEVO TITULO",
    body: "Nuevo cuerpo",
    userId: 1
}).then(res => console.log(res.data))
    .catch(err => {throw err;});
   

axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => console.log(res.data))
    .catch(err => {throw err;});
   



/**
 * A la hora de usar axios desde consola, podemos buscar el paquete con npm o yarn
 */
npm install --save axios
// o
yarn add axios

/**
 * La utilización sigue siendo igual.
 */


 /**
  * Sobre APIs REST
  * 
  * Las apis rest suelen ser la forma más común de comunicación
  * entre un frontend y un backend.
  * Estas, a pesar de estar hechas por programadores, no 
  * quedan libradas a la decisión. Hay una serie de patrones
  * que se suelen seguir para desarrollarlas.
  * 
  * Métodos de comunicación
  *     Los métodos pueden ser GET, POST, PUT, y DELETE.
  * Concretamente:
  * GET: Estoy diciendo que voy a buscar información en el recurso (API)
  * POST: Estoy diciendo que voy a insertar algo nuevo en el recurso
  * PUT: Estoy diciendo que voy a modificar algo existente en el recurso
  * DELETE: Estoy diciendo que voy a eliminar algo existente en el recurso
  * 
  * Para comprender como funcionan, podriamos decir que las URLs son lo que 
  * definen sobre qué vamos a actuar, y los métodos (o acciones), son lo que 
  * definen QUE vamos a hacer con ello.
  * Entonces, si quisiera pedir una lista de empleados de un recurso,
  * posiblemente debería pedirlo haciendo un GET a 
  * https://recurso.falso/employees
  * 
  * Ahora, si quisiera pedir un empleado, seguramente tendría que tener
  * un ID y hacer un GET en 
  * https://recurso.false/employee/1
  * 
  * A la misma URL podria pedirle un DELETE para eliminarla, o un 
  * PUT para modificarla, dado que ya tengo el ID del empleado
  * que quiero eliminar.
  * 
  * Ahora, por ultimo, para insertar un nuevo empleado
  * simplemente deberia hacer un POST a
  * https://recurso.false/employee
  * 
  * De esta forma voy a encontrar muy facilmente como funcionan las APIs rest
  * de una forma mas o menos estandar.
  * 
  * 
  