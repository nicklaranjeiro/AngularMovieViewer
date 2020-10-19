import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HomepageComponent } from './homepage/homepage.component';

//Routing to movie details and home page
const routes: Routes = [
  { path: 'movie-details', component: MovieDetailComponent },
  { path: '', component: HomepageComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
