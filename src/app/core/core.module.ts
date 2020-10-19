import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { WatchlistPageComponent } from '../watchlist-page/watchlist-page.component';
import { TopNavComponent } from '../top-nav/top-nav.component';


@NgModule({
  declarations: [
    SearchCriteriaComponent,
    MovieListComponent,
    WatchlistPageComponent,
    TopNavComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
  ],
  exports: [
    SearchCriteriaComponent,
    MovieListComponent,
    WatchlistPageComponent,
    TopNavComponent
  ]
})
export class CoreModule {

 }
