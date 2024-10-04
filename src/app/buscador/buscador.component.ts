import { Component } from '@angular/core';
import { SearchService } from '../services/busqueda.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  searchControl = new FormControl('');

  constructor(private searchService: SearchService) {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300), // Espera 300ms después del último cambio
        distinctUntilChanged() // Emite solo si el valor ha cambiado
      )
      .subscribe(term => {
        this.searchService.setSearchTerm(term || " ");
      });
  }
}
