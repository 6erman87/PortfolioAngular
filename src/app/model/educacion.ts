export class Educacion {
    id?: number;
    nombreD: string;
    descripcionD: string;
    periodoD: string;
    imgD : string;

    constructor(nombreD: string, descripcionD: string, periodoD: string, imgD: string){
        this.nombreD = nombreD;
        this.descripcionD = descripcionD;
        this.periodoD = periodoD;  
        this.imgD = imgD;
    }
}