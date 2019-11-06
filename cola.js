export default class Proceso{
    constructor(proceso){
        this._nombre = proceso.nombre;
        this._numCiclos = proceso.numCiclos;
        this._siguiente = null;
    }   
    get nombre(){
        return this._nombre;
    }
    get numCiclos(){
        return this._numCiclos;
    }
    get siguiente(){
        return this._tiempo;
    }

    set numCiclos(numCiclos){
        this._numCiclos = numCiclos;
    }

    set siguiente(siguiente){
        this._siguiente = siguiente;
    }
}