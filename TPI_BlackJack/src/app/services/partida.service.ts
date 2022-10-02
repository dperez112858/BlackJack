import { Injectable } from '@angular/core';
import { Carta } from '../models/carta';
import { Palo } from '../models/palo';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {



  private palo = ['0', '1', '2', '3'];
  private numero = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  
  constructor() { }

//   barajar(){
//     for (let i = 0; i < this.palos.length; i++) {
//         for (let j = 0; j < this.numeros.length; j++){
          
//         }

//     }
// }


}
