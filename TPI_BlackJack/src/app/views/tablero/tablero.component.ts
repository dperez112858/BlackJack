import { Component, OnInit } from '@angular/core';
import { PartidaService } from 'src/app/services/partida.service';
import { Carta } from 'src/app/models/carta';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/models/jugador';
import { interval } from 'rxjs';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  obj: any;
  cartas: Carta[]=[];
  sum: number=0;
  sumJugador: number=0;
  c: string;
  idjugador: number=0;
  jugador: Jugador[]=[];
  stand: boolean=false;
  finalizar: boolean = false;
  mensaje: string = "";
  
  constructor(private partidaservice: PartidaService, private router: Router) { 
    
  }

  ngOnInit(): void {
  this.partidaservice.barajar();
 
  this.inicio();
  this.idjugador=1;
  }

  inicio(){
    //creamos los jugadores:
    var x0={
      idjugador: 0,
      nombre: "maquina",
      puntos: 0
    }
    this.jugador.push(x0)

    var x1={
      idjugador: 1,
      nombre: "jugador1",
      puntos: 0
    }
    this.jugador.push(x1)

    /////// iniciamos con la primera carta de la maquina
    var obj= this.partidaservice.pedir();
      var o={
        numero: obj.numero,
        palo: obj.palo,
        activo: true,
        direc: obj.direc,
        jugador: 0
      }
     this.cartas.push(o);
     this.jugador[0].puntos=this.partidaservice.calcularPuntos(obj.numero);

    this.partidaservice.reset();
    this.sum=0;

  }

   maquina(){
    let x = this.jugador[0].puntos
    this.partidaservice.calcularPuntos(x);
    this.idjugador=0;


     while(this.jugador[0].puntos<17){

      var obj= this.partidaservice.pedir();
      var o={
        numero: obj.numero,
        palo: obj.palo,
        activo: true,
        direc: obj.direc,
        jugador: this.idjugador
      }
     this.cartas.push(o);

     this.jugador[0].puntos=this.partidaservice.calcularPuntos(obj.numero);

     
    }
    this.finalizar=true;
    this.comprobar();

  }


   comprobar(){
    if(this.jugador[0].puntos>21){
      this.mensaje=`¡Ganaste! la maquina perdio por tener mas de 21 puntos. Tu puntos son: ${this.jugador[1].puntos}`
      // alert(`¡Ganaste! la maquina perdio por tener mas de 21 puntos. Tu puntos son: ${this.jugador[1].puntos}`)
      //this.router.navigate(['']);
      this.partidaservice.reset();
    }
    if(this.jugador[0].puntos>this.jugador[1].puntos&&this.jugador[0].puntos<21){
      this.mensaje=`¡Perdiste! la maquina tiene ${this.jugador[0].puntos} puntos. Tu puntos son: ${this.jugador[1].puntos}`
     // this.router.navigate(['']);
      this.partidaservice.reset();
    if(this.jugador[0].puntos==this.jugador[1].puntos){
      this.mensaje=`¡Empate! Ambos tienen: ${this.jugador[1].puntos}`
      //this.partidaservice.reset();
    }

    }else{
      this.mensaje=`¡Ganaste! Tu puntos son: ${this.jugador[1].puntos}`
      //this.router.navigate(['']);
      this.partidaservice.reset();
    }
  }

  pedir(){

    var obj= this.partidaservice.pedir();
    var o={
      numero: obj.numero,
      palo: obj.palo,
      activo: true,
      direc: obj.direc,
      jugador: this.idjugador
    }

   this.cartas.push(o);

   if(obj.numero== 1){
    const result: boolean = confirm(
      'Quiere que la carta A valga 11?'


    );
    if(result){
     this.jugador[this.idjugador].puntos=this.partidaservice.calcularPuntos(10);
    }
   }
   this.jugador[this.idjugador].puntos=this.partidaservice.calcularPuntos(obj.numero);

   if(this.jugador[this.idjugador].puntos>21){
    this.mensaje=`¡Perdiste! superaste los 21 puntos. Tu puntos son: ${this.jugador[this.idjugador].puntos}`
    //this.router.navigate(['']);
    this.partidaservice.reset();
    this.finalizar=true;
    this.stand=true;
   }
  }


  pasar(){
    this.partidaservice.reset();
    this.idjugador=0;
    this.stand=true;
    this.maquina()
    

  }

}
