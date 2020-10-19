import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '../core/get-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  constructor(private getApiService: GetAPIService, private router: Router) {}

  posterPath: string = 'https://image.tmdb.org/t/p/w154';
  movieInfo: any[] = [];
  newArray: any[] = [];
  genresArray: any[] = [];

  ngOnInit(): void {
    this.getApiService.getMovies().subscribe((result: any) => {
      console.log('result', result);
      this.movieInfo = result;
      for (let i = 0; i < 20; i++) {
        this.newArray.push(this.movieInfo);
      }
    });

    this.getApiService.getGenres().subscribe((result: any) => {
      console.log('result', result);
      this.genresArray = result.genres;
    });

    //getYear, pass in release date to getFullYear return the year
  }

  //Uses the ID of the movie and finds the movie in the list they selected and sends their info along with it using a state
  routeToDetails(id) {
    //console.log(this.movieInfo['results']);
    const data = this.movieInfo['results'].find((x) => x.id === id);
    this.router.navigateByUrl('/movie-details', {
      state: {
        data: data,
      },
    });
    //console.log('data', data);
  }
}
