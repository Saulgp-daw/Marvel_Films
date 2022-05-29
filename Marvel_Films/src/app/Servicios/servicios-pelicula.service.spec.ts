import { TestBed } from '@angular/core/testing';

import { ServiciosPeliculaService } from './servicios-pelicula.service';

describe('ServiciosPeliculaService', () => {
  let service: ServiciosPeliculaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosPeliculaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
