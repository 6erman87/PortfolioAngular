export class Persona{
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    descripcion: string;
    // profesion: string;
    sobremi: string;

    constructor(nombre: string, apellido: string, img: string, descripcion: string, sobremi: string){
        this.nombre = nombre; 
        this.apellido = apellido;
        this.img = img;
        this.descripcion = descripcion;
        // this.profesion = profesion;
        this.sobremi = sobremi
    }
}