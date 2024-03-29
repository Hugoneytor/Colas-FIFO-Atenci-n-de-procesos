export default class Proceso{
    constructor(nombre, numCiclos){
        this._nombre = nombre;
        this._numCiclos = numCiclos;
        this._siguiente = null;
    }

    //Getters
    get nombre(){
        return this._nombre;
    }
    get numCiclos(){
        return this._numCiclos;
    }
    get siguiente(){
        return this._siguiente;
    }

    //Setters
    set nombre(nombre){
        this._nombre = nombre;
    }
    set numCiclos(numCiclos){
        this._numCiclos = numCiclos;
    }
    set siguiente(siguiente){
        this._siguiente = siguiente;
    }
}