import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrlBase: string = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  // postLogin(user: string, pass: string): Observable<any> {
  //   const comando = {
  //         "userName": user,
  //         "password": pass
  //   }
  //   const url = this.apiUrlBase + "/login";
  //   const headers = { 'content-type': 'application/json' };
  //   const body = JSON.stringify(comando);

  //   return this.http.post(url, body, { 'headers': headers })
  // }

  informacionUsuario(): Observable<string> {
    const token = this.tokenService.obtenerToken() || '';
    const headers = new HttpHeaders().set('x-access-token', token);
    return this.http.get(this.apiUrlBase, {
      headers,
      responseType: 'text',
    });
  }


}
