import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Carta } from '../models/carta';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {

  apiUrlBase: string = environment.baseUrl;

  carta: Carta[] = [];


  //palo = [0, 1, 2, 3];
  palo = ["c", "d", "t", "p"];
  numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  indice: number;
  direc: string;
  suma: number = 0;


  constructor(private http: HttpClient) { }

  barajar() {
    for (let i = 0; i < this.palo.length; i++) {
      for (let j = 0; j < this.numero.length; j++) {

        var obj = {
          numero: this.numero[j],
          palo: this.palo[i],
          activo: false,
          direc: `../../assets/media/cartas/${this.numero[j]}${this.palo[i]}.png`,
          jugador: 0
        };

        this.carta.push(obj)
      }
    }

  }

  pedir(): Carta {
    this.indice = Math.floor(Math.random() * 52);
    if (this.carta[this.indice].activo == true) {
      this.pedir();
    }
    this.carta[this.indice].activo = true;

    return this.carta[this.indice];

  }

  calcularPuntos(numero: number): number {

    if (numero >= 10) {
      this.suma += 10

    }
    if (numero < 10) {
      this.suma += numero;
    }

    return this.suma;
  }

  reset() {
    this.suma = 0;
    for (let i = 0; i < 52; i++) {
      this.carta[i].activo = false
    }
  }

  //[GET]/puntos/{num}
  obtenerPuntos(num: number): Observable<any> {
    return this.http.get(this.apiUrlBase + "/puntos/" + num);
  }

  //[PUT]/as
  actualizarPorAs(n: number, m: number): Observable<any> {
    const url = this.apiUrlBase + "/as"
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(m); 
    return this.http.put(url, body, { 'headers': headers })
  }

  //[GET]/pedir/{num}
  pedirCartaPorJugador(num: number): Observable<any> {
    return this.http.get<Carta>(this.apiUrlBase + "/pedir/" + num);
  }

  //[GET]/pedir
  pedirCarta(): Observable<any> {
    return this.http.get(this.apiUrlBase + "/pedir");
  }


}
