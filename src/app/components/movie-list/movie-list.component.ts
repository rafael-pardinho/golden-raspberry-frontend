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

}
