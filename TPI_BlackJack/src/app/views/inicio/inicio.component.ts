import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombreJugador: string;
 
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  jugar(nombreJugador: string){
    if(nombreJugador == null || nombreJugador.trim().length ===0 ){
      alert('Debe introducir un nombre')
      this.router.navigate([''])
    }else{
      this.router.navigate(['juego', nombreJugador]);
    }

  }


}
