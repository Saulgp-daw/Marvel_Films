import { TestBed } from '@angular/core/testing';

import { PeliculaSeleccionadaService } from './pelicula-seleccionada.service';

describe('PeliculaSeleccionadaService', () => {
  let service: PeliculaSeleccionadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculaSeleccionadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
