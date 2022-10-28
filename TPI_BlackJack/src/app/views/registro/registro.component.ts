import { Component, OnInit } from '@angular/core';
import { Component, OnDestroy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: UntypedFormGroup;
	  mensajeError: string;

  private subscription = new Subscription();

  constructor(
    private formBuilder: UntypedFormBuilder,
    private autenticacionService: AutenticacionService
  ) {
    this.formulario = this.formBuilder.group({
      usuario: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      clave: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  registrar() {
    if (this.formulario.invalid) {
      this.mostrarMensajeError('Formulario Invalido');
    }

    const objeto = this.formulario.value;
    this.subscription.add(
      this.autenticacionService
        .registrar(objeto.usuario, objeto.correoElectronico, objeto.clave)
        .subscribe({
          next: () => {
            alert('Usuario registrado');
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
