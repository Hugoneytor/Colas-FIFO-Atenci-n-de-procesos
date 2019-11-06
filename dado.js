export default class Dado{
    constructor(){
    }
    Lanzar(){
        let d = Math.trunc(Math.random()*100)+1;
        return d;
    }
}
