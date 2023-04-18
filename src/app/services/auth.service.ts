import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}

// Acá hay que escribir mucho más que en COMPONENT
// Los servicios hay que importarlos al Rooting app.module.ts (TS son los archivos de la parte de la lógica)