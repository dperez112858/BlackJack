import { Injectable } from '@angular/core';
import { Carta } from '../models/carta';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {

  carta: Carta[] = [];
 

  //palo = [0, 1, 2, 3];
  palo = ["c", "d", "t", "p"];
  numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  indice: number;
  direc: string;


  constructor() { }

  barajar(){
    


    for (let i = 0; i < this.palo.length; i++) {
      for (let j = 0; j < this.numero.length; j++) {
        console.log(this.palo[i], this.numero[j])

        var obj = {
          numero: this.numero[j],
          palo: this.palo[i],
          activo: false,
          direc: `../../assets/media/cartas/${this.numero[j]}${this.palo[i]}.png`
        };

        this.carta.push(obj)
        

      }


    }

  }

  pedir(): Carta{

    this.indice= Math.floor(Math.random() * 52 );
    this.carta[this.indice].activo=true;
    
    return this.carta[this.indice];

  }


}
