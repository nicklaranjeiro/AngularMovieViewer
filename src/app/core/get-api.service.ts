import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAPIService {

  constructor(private httpClient: HttpClient) { }

  public $getMovieAPI = new Subject<any>();

  //This service file will have more than a function to get, a function to search, etc.
  //This link will be broken up 

  pageCount: number = 1;

  getMovies = (): any => {
    let url = 'https://api.themoviedb.org/3/discover/movie?api_key=80293729e43a58b6df6bccaa278d8358&sort_by=vote_average.asc&vote_count.gte=50&page=' + this.pageCount;
    return this.httpClient.get<any>(url);
  }

  getGenres = ():any => {
    let genreUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=80293729e43a58b6df6bccaa278d8358&language=en-US'
    return this.httpClient.get<any>(genreUrl)
  }

}