import { Component, OnInit, OnDestroy} from '@angular/core';
import { ConsumirService } from '../services/consumir.service';
import { SearchService } from '../services/busqueda.service';
import { Subscription } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit, OnDestroy {
  posts: any[] = [];
  apiUrl = "https://xmljatsredalyc.org/wp-json/wp/v2/posts";
  currentPage: number = 1;
  searchTerm: string = '';
  totalPages: number = 1;
  isLoading: boolean = false;
  private searchSubscription!: Subscription;

  constructor(
    private consumirService: ConsumirService,
    private searchService: SearchService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getData();

    // Suscribirse a cambios en el término de búsqueda
    this.searchSubscription = this.searchService.searchTerm$
      .subscribe(term => {
        this.searchTerm = term;
        this.currentPage = 1; // Reiniciar a la primera página al buscar
        this.getData();
      });
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  getData(): void {
    this.isLoading = true;
    this.consumirService.getData(this.apiUrl, this.currentPage, this.searchTerm).subscribe(
      (response: HttpResponse<any[]>) => {
        this.posts = response.body || [];
        const totalPagesHeader = response.headers.get('X-WP-TotalPages');
        this.totalPages = totalPagesHeader ? parseInt(totalPagesHeader, 10) : 1;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching data', error);
        this.isLoading = false;
      }
    );
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getData();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getData();
    }
  }

  verPost(id: number) {
    this.router.navigate(['/post', id]); // Navega a la ruta /post/:id
  }
}
