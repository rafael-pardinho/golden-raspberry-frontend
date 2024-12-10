import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [MovieService],
  imports: [CommonModule, FormsModule],
})
export class DashboardComponent implements OnInit {
  yearsWithMultipleWinners: any[] = [];
  topStudios: any[] = [];
  maxIntervals: any[] = [];
  minIntervals: any[] = [];
  winnersByYear: any[] = [];
  searchYear: number | null = null;

  constructor(public movieService: MovieService) {}

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    // Carrega anos com múltiplos vencedores
    this.movieService.getYearsWithMultipleWinners().subscribe((data) => {
      this.yearsWithMultipleWinners = data.years;
    });

    // Carrega os estúdios com mais vitórias e filtra os 3 maiores
    this.movieService.getTopStudios().subscribe((data) => {
      this.topStudios = data.studios
        .sort((a: any, b: any) => b.winCount - a.winCount) // Ordena por winCount
        .slice(0, 3); // Pega os 3 primeiros
    });

    // Carrega intervalos máximos e mínimos entre vitórias
    this.movieService.getProducersIntervals().subscribe((data) => {
      this.maxIntervals = data.max;
      this.minIntervals = data.min;
    });
  }

  // usado para buscar vencedores de filmes em um ano específico e atualizar os dados exibidos no front-end
  searchWinnersByYear() {
    if (this.searchYear !== null) {
      this.movieService.getWinnersByYear(this.searchYear).subscribe(
        (data: any) => {
          console.log('API Response:', data); // Log para depuração
          if (Array.isArray(data)) {
            this.winnersByYear = data; // Atribui diretamente o array retornado
          } else {
            this.winnersByYear = []; // Limpa a tabela se não for um array
          }
        },
        (error) => {
          console.error('API Error:', error); // Log de erro
          this.winnersByYear = []; // Limpa a tabela em caso de erro
        }
      );
    } else {
      this.winnersByYear = []; // Limpa a tabela se o ano não for válido
    }
  }
}
