import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class MovieService {
  public baseUrl = 'https://challenge.outsera.tech/api/movies';

  constructor(private http: HttpClient) {}

  // Obtém os anos com múltiplos vencedores
  getYearsWithMultipleWinners(): Observable<any> {
    return this.http.get(`${this.baseUrl}?projection=years-with-multiple-winners`);
  }

  // Obtém os três estúdios com mais vitórias
  getTopStudios(): Observable<any> {
    return this.http.get(`${this.baseUrl}?projection=studios-with-win-count`);
  }

  // Obtém os produtores com o maior e menor intervalo entre vitórias
  getProducersIntervals(): Observable<any> {
    return this.http.get(`${this.baseUrl}?projection=max-min-win-interval-for-producers`);
  }

  // Obtém uma lista de filmes, permitindo filtros como paginação e busca
  getMovies(params: any): Observable<any> {
    const queryString = new URLSearchParams(params).toString();
    return this.http.get(`${this.baseUrl}?${queryString}`);
  }

  // Obtém os vencedores de um ano específico
  getWinnersByYear(year: number): Observable<any> {
    return this.http.get(`${this.baseUrl}?winner=true&year=${year}`);
  }

}
