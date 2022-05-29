import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Pelicula } from '../Modelo/Pelicula';
import { PELICULAS } from './mock-peliculas';

@Injectable({
  providedIn: 'root'
})
export class RecibirPeliculasService {

  constructor() { }

  misPeliculas: Pelicula[] = PELICULAS;

  getPelicula(id: Number): Pelicula{
    const peli = this.misPeliculas.find(peliBuscar => peliBuscar.id == id)!;
    return peli;
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
