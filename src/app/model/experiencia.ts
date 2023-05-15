export class Experiencia {
    id? : number;
    nombreE : string;
    puestoE : string;
    periodoE : string;
    descripcionE : string;
    img : string;

    constructor(nombreE: string, puestoE: string, periodoE: string, descripcionE: string, img: string){
        this.nombreE = nombreE;
        this.puestoE = puestoE;
        this.periodoE = periodoE;        
        this.descripcionE = descripcionE;
        this.img = img;
    }
}