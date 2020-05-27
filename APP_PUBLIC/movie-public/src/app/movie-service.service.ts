import { Injectable } from '@angular/core';
import { Movie } from './movie';
import{ HttpClient, HttpErrorResponse,HttpClientJsonpModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

private moviesUrl = 'http://localhost:3000/api/movies';

  constructor(private http:HttpClient) {

   }


     getMovies(): Promise<void | Movie[]>{
      return this.http.get(this.moviesUrl)
                 .toPromise()
                 .then(response => response as Movie[])
                 .catch(this.handleError);
   }

   getSingleMovies(movieId:String): Promise<void | Movie> {
     return this.http.get(this.moviesUrl + '/' + movieId)
                .toPromise()
                .then(response => response as Movie)
                .catch(this.handleError);
   }

   createMovie(newMovie:Movie) : Promise<void | Movie> {
     return this.http.post(this.moviesUrl,newMovie)
                .toPromise()
                .then(response => response as Movie)
                .catch(this.handleError);
   }
   deleteMovie(movieId: String) : Promise<void | Movie> {
    return this.http.delete(this.moviesUrl + '/' + movieId)
               .toPromise()
               .then(response => response as Movie)
               .catch(this.handleError);

               
  }
  updateMovie(newMovie: Movie): Promise<void | Movie>{
    return this.http.put(this.moviesUrl + '/' +newMovie._id,newMovie)
    .toPromise()
    .then(response => response as Movie)
    .catch(this.handleError);
  }
 
  
  

   private handleError(error:any) {
     console.log("error");
   }
   
}
