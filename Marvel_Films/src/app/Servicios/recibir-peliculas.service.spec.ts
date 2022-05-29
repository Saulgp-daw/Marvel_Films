import { TestBed } from '@angular/core/testing';

import { RecibirPeliculasService } from './recibir-peliculas.service';

describe('RecibirPeliculasService', () => {
  let service: RecibirPeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecibirPeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
