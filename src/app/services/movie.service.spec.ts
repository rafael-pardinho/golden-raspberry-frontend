import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from './movie.service';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });
    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch winners by year', () => {
    const mockMovies = [
      { id: 1, year: 1990, title: 'Movie 1', winner: true },
    ];

    service.getWinnersByYear(1990).subscribe((movies) => {
      expect(movies).toEqual(mockMovies);
    });

    const req = httpMock.expectOne(`${service.baseUrl}?winner=true&year=1990`);
    expect(req.request.method).toBe('GET');
    req.flush(mockMovies);
  });
});
