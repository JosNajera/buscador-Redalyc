import { TestBed } from '@angular/core/testing';

import { SearchService } from './busqueda.service';

describe('BusquedaService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
