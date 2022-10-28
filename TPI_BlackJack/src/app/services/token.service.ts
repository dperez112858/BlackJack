import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private TOKEN: string = 'TOKEN';
  private USUARIO: string = 'USUARIO';

  constructor() { }

  guardarToken(token: string) {
    localStorage.removeItem(this.TOKEN);
    localStorage.setItem(this.TOKEN, token);
  }

  guardarUsuario(usuario: any) {
    localStorage.removeItem(this.USUARIO);
    localStorage.setItem(this.USUARIO, JSON.stringify(usuario));
  }

  obtenerToken(): string | null {
    return localStorage.getItem(this.TOKEN);
  }

  obtenerUsuario(): any | null {
    const valor = localStorage.getItem(this.USUARIO);

    let usuario: any;
    if (valor) {
      usuario = JSON.parse(valor);
    }

    return usuario;
  }

  cerrarSesion() {
    localStorage.removeItem(this.TOKEN);
    localStorage.removeItem(this.USUARIO);
  }


}
