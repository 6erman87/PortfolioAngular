export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    profesion: string;
    sobremi: string;

    constructor(nombre: string, apellido: string, img: string, profesion: string, sobremi: string){
        this.nombre = nombre; 
        this.apellido = apellido;
        this.img = img;
        this.profesion = profesion;
        this.sobremi = sobremi
    }
}