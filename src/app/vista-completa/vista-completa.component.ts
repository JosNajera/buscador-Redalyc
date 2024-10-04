import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsumirService } from '../services/consumir.service';


@Component({
  selector: 'app-vista-completa',
  templateUrl: './vista-completa.component.html',
  styleUrls: ['./vista-completa.component.css']
})

export class VistaCompletaComponent implements OnInit {

  postId: number | null = null;
  postData: any;
  apiUrl = "https://xmljatsredalyc.org/wp-json/wp/v2/posts";
  isLoading: boolean = false;
  error: string = '';

  constructor(private route: ActivatedRoute,
    private consumirService: ConsumirService
  ) { }

  ngOnInit(): void {
    const idPost = this.route.snapshot.paramMap.get('id');
    this.postId = Number(idPost);
    if (this.postId) {
      this.loadPostData(this.postId);
      console.log(this.postId);
    } else {
      this.error = 'No se proporcionó un ID de post válido.';
    }
  }

  loadPostData(id: number | string): void {
    this.isLoading = true;
    this.consumirService.getPostById(this.apiUrl, id).subscribe(
      (data) => {
        this.postData = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching post data', error);
        this.error = 'Error al obtener los datos del post.';
        this.isLoading = false;
      }
    );
  }
}