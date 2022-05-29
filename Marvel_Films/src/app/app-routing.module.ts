import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPeliculasComponent } from './Componentes/listado-peliculas/listado-peliculas.component';
import { DetallesPeliculaComponent } from './Componentes/detalles-pelicula/detalles-pelicula.component';

const routes: Routes = [
  { path: 'listaPeliculas', component: ListadoPeliculasComponent },
  { path: 'detallePelicula/:id', component: DetallesPeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }