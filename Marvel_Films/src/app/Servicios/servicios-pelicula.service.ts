import { Injectable } from '@angular/core';
import { Pelicula } from '../Modelo/Pelicula';
import { PELICULAS } from './mock-peliculas';

@Injectable({
  providedIn: 'root'
})
export class ServiciosPeliculaService {

  constructor() { }

  peliSeleccionada?: any;
  misPeliculas: Pelicula[] = PELICULAS;

  buscarPelicula(id: number):void{
    let pelicula = this.misPeliculas.find(peliBuscar => peliBuscar.id == id)!;
    this.peliSeleccionada = pelicula;
  }

  peliculaSeleccionada(peli: Pelicula): void{
    this.peliSeleccionada = peli;
  }

  devolverSeleccionada():Pelicula{
    return this.peliSeleccionada;
  }

  getPeliculas():Pelicula[]{
    return this.misPeliculas;
  }

  agregarPelicula(pelicula: Pelicula):void{
    this.misPeliculas.push(pelicula);
  }

  modificarPelicula(peliculaActualizada: Pelicula):void{
    let peliEncontrada = this.misPeliculas.find(peliBuscar => peliBuscar.id == peliculaActualizada.id)!;
    let indicePelicula = this.misPeliculas.indexOf(peliEncontrada);
    this.misPeliculas[indicePelicula] = peliculaActualizada;
    
    this.misPeliculas.forEach(peli => {
      console.log(peli);
    });
  }

  borrarPelicula(idPelicula: number):void{
    let peliEncontrada = this.misPeliculas.find(peliBuscar => peliBuscar.id == idPelicula)!;
    let indicePelicula = this.misPeliculas.indexOf(peliEncontrada);
    this.misPeliculas.splice(indicePelicula, 1);
    this.misPeliculas.forEach(peli => {
      console.log(peli);
    });
  }

}
