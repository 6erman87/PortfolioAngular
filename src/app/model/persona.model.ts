export class Persona{
    id?: number;
    nombre: string;
    apellido: string;    
    img: string;
    profesion: string;
    descripcion: string;
    sobremi: string;
    banner: string;

    constructor(nombre: string, apellido: string, profesion: string, img: string, descripcion: string, sobremi: string, banner: string){
        this.nombre = nombre; 
        this.apellido = apellido;
        this.img = img;
        this.profesion = profesion;
        this.descripcion = descripcion;
        this.sobremi = sobremi;
        this.banner = banner
    }
}