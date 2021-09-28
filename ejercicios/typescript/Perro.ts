
import Animal from './Animal';
class Perro extends Animal {
    private age: number; 
    constructor(name: string, color: string, age: number){
        super(name, color);
        this.age = age;
    }
}

export default Perro;