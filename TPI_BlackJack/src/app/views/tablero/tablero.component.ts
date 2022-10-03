import { Component, OnInit } from '@angular/core';
import { PartidaService } from 'src/app/services/partida.service';
import { Carta } from 'src/app/models/carta';
import { throws } from 'assert';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  obj: any;
  cartas: Carta[]=[];
  suma: number=0;

 

  
  constructor(private partidaservice: PartidaService) { 
    



  }


  
    

  ngOnInit(): void {
  this.partidaservice.barajar();
  }

  pedir(){
    var obj= this.partidaservice.pedir();

    var o={
      numero: obj.numero,
      palo: obj.palo,
      activo: true,
      direc: obj.direc
    }
   this.cartas.push(o);
   
   if(obj.numero== 1){
    const result: boolean = confirm(
      'Quiere que el A valga 11?'
    );
    if(result){
      this.suma+=10;
    }
   }
   if(obj.numero>=10){
    this.suma+=10

   }
   if(obj.numero<10){
    this.suma+=obj.numero;
   }

  
    
    

  }

}
