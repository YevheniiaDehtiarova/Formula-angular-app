import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeasonsPageComponent } from './pages/seasons-page/seasons-page.component';
import { RacesPageComponent } from './pages/races-page/races-page.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'seasons',
    pathMatch: 'full'
  },
  {
    path: 'seasons',
    component: SeasonsPageComponent
  },
  {
    path: 'race/:year',
    component: RacesPageComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
