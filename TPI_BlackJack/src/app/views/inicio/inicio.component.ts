import { Component, Input, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombreJugador: string;
  passwordJugador: string;
  formulario: UntypedFormGroup;
  mensajeError: string;
  
  constructor(
    private formBuilder: UntypedFormBuilder,
    private autenticacionService: AutenticacionService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.formulario = this.formBuilder.group({
      usuario: ['', Validators.required],
      clave: ['', Validators.required],
    });
  }
  jugar(nombreJugador: string){
    if(nombreJugador == null || nombreJugador.trim().length ===0 ){
      alert('Debe introducir un nombre')
      this.router.navigate([''])
    }else{
      this.router.navigate(['juego', nombreJugador]);
    }
  }

  login(){}



  private subscription = new Subscription();



  ngOnInit(): void {
    const token = this.tokenService.obtenerToken();
    if (token) {
      this.router.navigate(['/privado/principal'])
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ingresar() {
    if (this.formulario.invalid) {
      this.mostrarMensajeError('Formulario Invalido');
    }

    const objeto = this.formulario.value;
    this.subscription.add(
      this.autenticacionService
        .ingresar(objeto.usuario, objeto.clave)
        .subscribe({
          next: (respuesta) => {
            this.tokenService.guardarToken(respuesta.accessToken);
            delete respuesta.accessToken;
            this.tokenService.guardarUsuario(respuesta);
            this.router.navigate(['']);
          },
          error: (err) => {
            this.mostrarMensajeError(err.error.message);
          },
        })
    );
  }

  private mostrarMensajeError(mensaje: string) {
    this.mensajeError = mensaje;
    setTimeout(() => {
      this.mensajeError = '';
    }, 2000);
  }
}


}
