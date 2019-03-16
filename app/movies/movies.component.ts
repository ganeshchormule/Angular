import { Movie, MOVIES } from './../movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = MOVIES;

  constructor() { }

  ngOnInit() {
  }

  addMovie() {
     const newMovie: Movie = { name: 'Aquaman', type: 'drama', rating: 9};
     this.movies.push(newMovie);
  }

}
