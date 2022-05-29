import { Injectable } from '@angular/core';
import { Pelicula } from '../Modelo/Pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaSeleccionadaService {

  constructor() { }

  peliSeleccionada?: any;
  peliculaSeleccionada(peli: Pelicula): void{
    this.peliSeleccionada = peli;
  }

  devolverSeleccionada():Pelicula{
    return this.peliSeleccionada;
  }
}
