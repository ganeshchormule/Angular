import { BestMoviesPipe } from './best-movies.pipe';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bestMoviesImpure',
  pure: false
})
export class BestMoviesImpurePipe extends BestMoviesPipe {
}
