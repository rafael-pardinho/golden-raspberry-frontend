import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieListComponent } from './movie-list.component';
import { MovieService } from '../../services/movie.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

describe('MovieListComponent', () => {
  let fixture: ComponentFixture<MovieListComponent>;
  let component: MovieListComponent;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MatPaginatorModule,
        MatTableModule,
        FormsModule,
        MovieListComponent, // Importar o componente standalone
      ],
      providers: [MovieService],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the movie list component', () => {
    const mockMovies = [
      { id: 1, year: 1990, title: 'Movie 1', winner: true },
    ];

    // Intercepta a requisição durante o teste
    const req = httpMock.expectOne(`${component.movieService.baseUrl}?page=0&size=10`);
    expect(req.request.method).toBe('GET');
    req.flush({ content: mockMovies });

    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
