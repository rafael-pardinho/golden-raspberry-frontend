import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngFor
import { FormsModule } from '@angular/forms'; // Para [(ngModel)]
import { MatTableModule } from '@angular/material/table'; // Para tabelas Material
import { MatPaginatorModule } from '@angular/material/paginator'; // Para mat-paginator
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  providers: [MovieService],
  imports: [CommonModule, FormsModule, MatTableModule, MatPaginatorModule], // Adicionados os módulos necessários
})

export class MovieListComponent {
  movies: any[] = [];
  filterYear: string = '';
  filterWinner: string = '';
  totalElements: number = 0;
  pageSize: number = 10;
  currentPage: number = 0;

  constructor(public movieService: MovieService) {}

  ngOnInit() {
    this.fetchMovies();
  }

  // Buscar filmes com base nos critérios de paginação e filtros aplicados (ano e status de vencedor)
  fetchMovies() {
    const params: any = {
      page: this.currentPage,
      size: this.pageSize,
    };

    if (this.filterYear) {
      params.year = this.filterYear;
    }

    if (this.filterWinner) {
      params.winner = this.filterWinner === 'Yes'; // Converte para booleano
    }

    this.movieService.getMovies(params).subscribe((data: any) => {
      this.movies = data.content;
      this.totalElements = data.totalElements;
    });
  }
}
