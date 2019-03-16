import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MycolorDirective } from './mycolor.directive';
import { MyIfDirective } from './my-if.directive';
import { MycompComponent } from './mycomp/mycomp.component';
import { MyLowerCasePipe } from './my-lower-case.pipe';
import { MoviesComponent } from './movies/movies.component';
import { BestMoviesPipe } from './best-movies.pipe';
import { BestMoviesImpurePipe } from './best-movies-impure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MycolorDirective,
    MyIfDirective,
    MycompComponent,
    MyLowerCasePipe,
    MoviesComponent,
    BestMoviesPipe,
    BestMoviesImpurePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
