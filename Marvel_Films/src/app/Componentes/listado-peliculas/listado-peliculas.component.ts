import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/Modelo/Pelicula';
import { PeliculaSeleccionadaService } from 'src/app/Servicios/pelicula-seleccionada.service';
import { RecibirPeliculasService } from 'src/app/Servicios/recibir-peliculas.service';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor(private recibirPeliculas: RecibirPeliculasService, private servicioSeleccionada: PeliculaSeleccionadaService) { }

  peliculas: Pelicula[] = [];
  ngOnInit(): void {
    this.peliculas = this.recibirPeliculas.getPeliculas();
  }

  onSelect(peliClickada: Pelicula):void{
    this.servicioSeleccionada.peliculaSeleccionada(peliClickada);
  }

}
