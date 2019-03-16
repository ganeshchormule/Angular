import { Movie } from './movie';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bestMovies'
})
export class BestMoviesPipe implements PipeTransform {

  transform(value: Movie[], args?: any): any {
    return value.filter( movie => movie.rating > 8);
  }

}
