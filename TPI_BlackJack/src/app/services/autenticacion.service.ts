import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  apiUrlBase: string = environment.baseUrl;

  constructor(private http: HttpClient
    ) { }

    registrar(usuario: string, correoElectronico: string, clave: string): Observable<any> {
      return this.http.post<any>(`${this.apiUrlBase}/signup`, {
        username: usuario,
        email: correoElectronico,
        password: clave
      });
    }
  
    ingresar(usuario: string, clave: string): Observable<any> {
      return this.http.post<any>(`${this.apiUrlBase}/signin`, {
        username: usuario,
        password: clave
      });
    }
  
}
