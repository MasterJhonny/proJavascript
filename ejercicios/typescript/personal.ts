class Personal {
    nombre: string;
    protected edad: number;
    private pais: string;
    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
        this.pais = "Bolivia";
    }

    public printData(){
        console.log(`name: ${this.nombre}, age: ${this.edad}, country: ${this.pais}`)
    }
}

export default Personal;