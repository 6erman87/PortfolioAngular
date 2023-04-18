import { Injectable } from '@angular/core';
// Esto es para suscribirse y que reciba respuesta de forma asincronica
import { Observable } from 'rxjs';
// Esto es para poder hacer las peticiones
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
// El primer http se llama ALIAS

  constructor(private http:HttpClient) { }

//Método observable que devuelve los datos 
  getDatos():Observable<any> {
//Se llama al JSON con su path -ruta-, 0 bien, en su lugar se puede poner una URL para traer datos de un JSON online
  return this.http.get('./assets/json/datos.json');
}

}