import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/Modelo/Pelicula';
import { ListadoPeliculasComponent } from '../listado-peliculas/listado-peliculas.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ServiciosPeliculaService } from 'src/app/Servicios/servicios-pelicula.service';


@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.component.html',
  styleUrls: ['./detalles-pelicula.component.css']
})
export class DetallesPeliculaComponent implements OnInit {

  peliculaSeleccionada?: any;
  pelicula: Pelicula | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private servicioPeliculas: ServiciosPeliculaService
    ) { }

  ngOnInit(): void {
    this.getPeliculaFromURL();
  }
  

  getPeliculaFromURL():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.servicioPeliculas.buscarPelicula(id);
  }


  //Recogemos la película seleccionada del nuestro servicio e inicializamos nuestra variable con el valor recibido
  detallesPelicula(): void {
    this.peliculaSeleccionada = this.servicioPeliculas.devolverSeleccionada();
  }

  agregarPelicula(imagen: string, titulo: string, sinopsis: string, fechaEstreno: string): void {
    let id = this.servicioPeliculas.getPeliculas().length + 1;
    if (titulo != null && titulo != "" && sinopsis != null && sinopsis != "" && fechaEstreno != null && fechaEstreno != "") {
      let nuevaPeli: Pelicula = { id: id, titulo: titulo, sinopsis: sinopsis, fechaEstreno: fechaEstreno, imagen: imagen };
      this.servicioPeliculas.agregarPelicula(nuevaPeli);
    }

  }

  modificarPelicula(pelicula: Pelicula): void {
    this.servicioPeliculas.modificarPelicula(pelicula);
    this.servicioPeliculas.peliSeleccionada = null;
  }

  eliminarPelicula(idPelicula: number): void {
    this.servicioPeliculas.borrarPelicula(idPelicula);
  }

  cancelarEdicion() {
    this.servicioPeliculas.peliSeleccionada = null;
  }

  goBack(): void {
    this.location.back();
  }



}
