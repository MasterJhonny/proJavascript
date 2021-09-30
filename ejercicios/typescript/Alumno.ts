import Personal from "./personal";

class Alumno extends Personal {
    curso: string;
    constructor(name: string, edad: number, curso: string) {
        super(name, edad);
        this.curso = curso;
    }
}

export default Alumno;