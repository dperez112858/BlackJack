import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableroComponent } from './views/tablero/tablero.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { PartidaService } from './services/partida.service';

@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PartidaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
