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

}
