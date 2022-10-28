import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AutorizadoGuard implements CanActivate {

  constructor(
    private tokenService: TokenService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    boolean | UrlTree {
      const token = this.tokenService.obtenerToken();
      const usuario = this.tokenService.obtenerUsuario();
      const permiso = route.data['permiso'];
      if (token && usuario && usuario.roles.includes(permiso)) {
        return true;
      }

      return false;
    }
  }
  }
