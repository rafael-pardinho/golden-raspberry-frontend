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
}
