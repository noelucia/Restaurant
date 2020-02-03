class Menu {                                           //va a contener una array vacio de lista de productos y 2 funciones que sean de agregar y eliminar productos
    constructor(){
        this.listaDeProductos = [];
    }
    addProduct(id, nombre, precio){
        let producto = {  //aca hago un push de objetos, es decir voy a hacer un push de producto a la lista de productos
            id,
            nombre,
            precio
        };
        this.listaDeProductos.push(producto)
    }
    deleteProduct(id){
        let index = this.listaDeProductos.findIndex((producto)=>{ // aca busco por el prpoducto, la poscion por id 
            return producto.id == id
        });
        if(index == -1){ //en caso de que me tire que la posicion es -1 va a saltar error
            throw "No se encontro ningun producto con ese id"
        }
        this.listaDeProductos.splice(index, 1) //sino digo que voy a borrar un elemento 
    }
    modifyProducto(id, nombre, precio = null){                             //el ultimo elemento solo puede ser null/undefined
        let index = this.listaDeProductos.findIndex((producto)=>{
            return producto.id == id
        });
        if( nombre != null ){
            this.listaDeProductos[index].nombre = nombre                    //solo modifica el nombre y precio, y se llama al producto por el id.
        }
        if(precio !=null){
            this.listaDeProductos[index].precio = precio
        }
    }
}
class Restaurante{                                        //va a contener un array vacio de la lista de mesas y 2 funciones, agregar y eliminar la mesa por id.
    constructor(){
        this.listaDeMesas = [];
    }
    addMesa(idMesa){
        let mesa = {
            idMesa
        };
        this.listaDeMesas.push(mesa)
    }
}