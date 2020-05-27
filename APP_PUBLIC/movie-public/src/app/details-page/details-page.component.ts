import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { MovieDataService } from '../movie-service.service';
import { Movie } from '../movie';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers: [MovieDataService]
})
export class DetailsPageComponent implements OnInit {
   isCollapsed: boolean=true;
  constructor(
    private MovieDataService:MovieDataService,
    private route:ActivatedRoute
  ) { }

  toggleCollapse(){
    this.isCollapsed =! this.isCollapsed;
  }

  newMovie:Movie;

  ngOnInit() :void {
    this.route.params.pipe(
      switchMap((params:Params) => {
        return this.MovieDataService.getSingleMovies(params['movieid'])
      }))
      .subscribe((newMovie: Movie) => {
        this.newMovie=newMovie;
        // this.pageContent.header.title="Details for selected movie";
        // this.pageContent.header.body = newMovie.name;
      });
    
  }
  

  pageContent = {
    header: {
      title:'',
      body:''
    }
  };

  public deleteMovie(newMovie: Movie):void{
    this.MovieDataService.deleteMovie(newMovie._id);
    window.location.href = 'movies';
    
  }

  public updateMovie(newMovie : Movie):void{
    this.MovieDataService.updateMovie(newMovie);
    window.location.href = 'movies';
  }

}