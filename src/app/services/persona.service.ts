import { Injectable } from '@angular/core';
// Esto es para poder hacer las peticiones
import { HttpClient } from '@angular/common/http';
// Esto es para suscribirse y que reciba respuesta de forma asincronica
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'http://localhost:8080/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona> {
    return this.http.get<persona>(this.URL + 'traer/perfil');
  }
  
}
