import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DashboardComponent } from './dashboard.component';
import { MovieService } from '../../services/movie.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

describe('DashboardComponent', () => {
  let fixture: ComponentFixture<DashboardComponent>;
  let component: DashboardComponent;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatInputModule,
        FormsModule,
        DashboardComponent, // Importar o componente standalone
      ],
      providers: [MovieService],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the dashboard component', () => {
    const mockYears = [{ year: 1990, winnerCount: 2 }];
    const mockStudios = [{ name: 'Studio A', winCount: 5 }];
    const mockProducers = { max: [], min: [] };

    // Intercepta chamadas à API durante o teste
    const reqYears = httpMock.expectOne(`${component.movieService.baseUrl}?projection=years-with-multiple-winners`);
    expect(reqYears.request.method).toBe('GET');
    reqYears.flush({ years: mockYears });

    const reqStudios = httpMock.expectOne(`${component.movieService.baseUrl}?projection=studios-with-win-count`);
    expect(reqStudios.request.method).toBe('GET');
    reqStudios.flush({ studios: mockStudios });

    const reqProducers = httpMock.expectOne(`${component.movieService.baseUrl}?projection=max-min-win-interval-for-producers`);
    expect(reqProducers.request.method).toBe('GET');
    reqProducers.flush(mockProducers);

    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
