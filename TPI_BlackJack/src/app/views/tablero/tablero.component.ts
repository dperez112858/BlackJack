import { Component, OnInit } from '@angular/core';
import { PartidaService } from 'src/app/services/partida.service';
import { Carta } from 'src/app/models/carta';
import { ActivatedRoute, Router } from '@angular/router';
import { Jugador } from 'src/app/models/jugador';
import { Subscription } from 'rxjs';
import { Croupier } from 'src/app/models/croupier';


@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  private subscription = new Subscription();


  croupier=  {} as Croupier;
  
  obj: any;
  cartas: Carta[]=[];
  sum: number=0;
  idjugador: number=0;
  nombreJugador: string;
  jugador: Jugador[]=[];
  stand: boolean;
  finalizar: boolean;
  mensaje: string;
  iniciar: boolean;
  blackjack: boolean;
  compro: boolean;

  cartita: any;

  suma:any;
  
  
  constructor(private partidaservice: PartidaService, private router: Router, private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.getCroupier();


/*     this.blackjack=false;
    this.iniciar=true;
    this.finalizar=false;
    this.stand=true;
    this.compro=true;
    this.mensaje="";
  this.partidaservice.barajar();
  this.activatedRoute.params.subscribe({
    next: (params) => {
      this.nombreJugador = params['nombreJugador']; } });

  var x0={
    idjugador: 0,
    nombre: "maquina",
    puntos: 0
  }
  this.jugador.push(x0)

  var x1={
    idjugador: 1,
    nombre: this.nombreJugador,
    puntos: 0
  }
  this.jugador.push(x1) */
  }

  getCroupier(){
    this.subscription.add(
      this.partidaservice.pedirCroupier().subscribe({
        next: (respuesta: Croupier) =>{
          this.croupier=respuesta;
          console.log(this.croupier)
          
        },
        error: () => {
          alert('Error al obtener datos del croupier');
        },
      })
    );
  }




/*
  repartir(){
     this.iniciar=false;
    this.inicio();
    this.idjugador=1;
    this.pedir();
    this.pedir();

    if((this.cartas[1].numero>=10 && this.cartas[2].numero==1 ) || (this.cartas[2].numero>=10 && this.cartas[1].numero==1 )){
      this.jugador[this.idjugador].puntos=this.partidaservice.calcularPuntos(10);
    }
    if(this.cartas[1].numero==1  && this.cartas[2].numero<10 && this.cartas[2].numero>1){
      const result: boolean = confirm( `Quiere que la carta A valga 11? tiene ${this.cartas[2].numero} puntos (en caso de no aceptar el valor de A sera 1)`);
        if(result){ this.jugador[this.idjugador].puntos=this.partidaservice.calcularPuntos(10); 
        } 
    }
    if(this.cartas[2].numero==1  && this.cartas[1].numero<10 && this.cartas[1].numero>1){
      const result: boolean = confirm( `Quiere que la carta A valga 11? tiene ${this.cartas[1].numero} puntos (en caso de no aceptar el valor de A sera 1)`);
        if(result){ this.jugador[this.idjugador].puntos=this.partidaservice.calcularPuntos(10); 
        } 
    }



    if(this.jugador[this.idjugador].puntos==21){
      this.blackjack=true;
      this.mensaje=`¡BLACKJACK!`
      this.partidaservice.reset()
      this.stand=true;
      this.finalizar=true;
    }
    this.stand=false;
    this.compro=false; 
  }*/
/* 
  inicio(){


    var obj= this.partidaservice.pedirCarta();
    console.log(obj);
/*       var o={
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

  }*/

  /* 
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

     if(this.jugador[0].puntos==1 && obj.numero>=10){
      this.jugador[0].puntos=this.partidaservice.calcularPuntos(10);
     }
     if(this.jugador[0].puntos==10 && obj.numero==1){
      this.jugador[0].puntos=this.partidaservice.calcularPuntos(10);
     }
     if(obj.numero==1){
      let i=this.jugador[0].puntos+11
      if(i==21){
        this.jugador[0].puntos=this.partidaservice.calcularPuntos(10);
      }
      if(i<21 && i>this.jugador[1].puntos){
        this.jugador[0].puntos=this.partidaservice.calcularPuntos(10);
      }
     }

     this.jugador[0].puntos=this.partidaservice.calcularPuntos(obj.numero);

     
    }
    this.finalizar=true;
    if(this.blackjack==false){
      this.comprobar();
    } 

  }
  */

 /*  reiniciar(){
    this.cartas.splice(0,10)
    this.jugador.splice(0,10);
    this.partidaservice.reset();
    this.ngOnInit();
    this.idjugador=1;
    this.stand=false;
    this.mensaje="";
    this.finalizar=false;
  }
 */


/*    comprobar(){


    if(this.jugador[0].puntos>21){
      this.mensaje=`¡Ganaste! la banca perdio por tener mas de 21 puntos`
    }
    if(this.jugador[0].puntos>this.jugador[1].puntos && this.jugador[0].puntos<=21){
      this.mensaje=`¡Perdiste!` }
    if(this.jugador[0].puntos==this.jugador[1].puntos){
      this.mensaje=`¡Empate! Ambos tienen: ${this.jugador[1].puntos}`
    }
    if(this.jugador[1].puntos>this.jugador[0].puntos && this.jugador[0].puntos<21){
      this.mensaje=`¡Ganaste!`
    }


    this.partidaservice.reset();
  } */

 /*  pedir(){

    var obj= this.partidaservice.pedir();
    var o={
      numero: obj.numero,
      palo: obj.palo,
      activo: true,
      direc: obj.direc,
      jugador: this.idjugador
    }

   this.cartas.push(o);

    if(this.compro==false){
      if(obj.numero==1){
        if(this.jugador[this.idjugador].puntos==10){
          this.jugador[this.idjugador].puntos=this.partidaservice.calcularPuntos(10);
        }
  
        if(this.jugador[this.idjugador].puntos<10 ){
          const result: boolean = confirm( `Quiere que la carta A valga 11? tiene ${this.jugador[this.idjugador].puntos} puntos (en caso de no aceptar el valor de A sera 1)`);
          if(result){ this.jugador[this.idjugador].puntos=this.partidaservice.calcularPuntos(10); 
          } 
        }
      }

    }

 
    this.jugador[this.idjugador].puntos=this.partidaservice.calcularPuntos(obj.numero);


   if(this.jugador[this.idjugador].puntos>21){
    this.mensaje=`¡Perdiste! superaste los 21 puntos`
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
    

  } */

}
