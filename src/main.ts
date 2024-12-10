import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./app/components/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'list', loadComponent: () => import('./app/components/movie-list/movie-list.component').then(m => m.MovieListComponent) },
    ]),
    importProvidersFrom(BrowserAnimationsModule, HttpClientModule, MatSidenavModule),
  ],
});
