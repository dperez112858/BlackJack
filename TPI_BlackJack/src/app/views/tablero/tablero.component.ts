import { Component, OnInit } from '@angular/core';
import { PartidaService } from 'src/app/services/partida.service';
import { Carta } from 'src/app/models/carta';
import { Mazo } from 'src/app/models/mazo';
import { throws } from 'assert';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  obj: any;
  direc: string;

 

  
  constructor(private partidaservice: PartidaService) { 
    



  }
  // barajar(){

  
  //     for (let i = 0; i < this.palo.length; i++) {
  //       for (let j = 0; j < this.numero.length; j++){
  //         console.log(this.palo[i], this.numero[j])

  //         var obj= {
  //           numero: this.numero[j],
  //           palo: this.palo[i],
  //           activo: false
  //         };

  //         this.carta.push(obj)

  //         }
          
          
  //           }

  //   }
   

  
    

  ngOnInit(): void {
  this.partidaservice.barajar();
  }

  pedir(){
    //alert(this.partidaservice.pedir());
    var obj= this.partidaservice.pedir();
    this.direc= `../../assets/media/cartas/${obj.numero}${obj.palo}.png`;
   
    
    

  }

}
