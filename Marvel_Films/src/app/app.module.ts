import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './Componentes/listado-peliculas/listado-peliculas.component';
import { DetallesPeliculaComponent } from './Componentes/detalles-pelicula/detalles-pelicula.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './Componentes/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    DetallesPeliculaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
