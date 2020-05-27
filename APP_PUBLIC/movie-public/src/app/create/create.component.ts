import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { MovieDataService } from '../movie-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[MovieDataService]
})
export class CreateComponent implements OnInit {

  public newMovie: Movie = {
    _id:'',
    name:'',
    type:'',
    description:'',
    price:'',
    actor:''
  };

  constructor(private movieDataService: MovieDataService) { }

  ngOnInit(): void {
  }
  public createNewMovie(newMovie: Movie):void{
    this.movieDataService.createMovie(newMovie);
    window.location.href="movies";
  }

}
