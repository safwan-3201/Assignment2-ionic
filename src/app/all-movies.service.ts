import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllMoviesService {
  movies = [
    { year: '2019', name: 'Avengers-Endgame' },
    { year: '2019', name: 'Toy Story 4' },
    { year: '2019', name: 'Joker' },
    { year: '2019', name: 'Fast & Furious' },
    { year: '2019', name: 'The Lion King' },
    { year: '2019', name: 'Star Wars' },
    { year: '2019', name: 'Aladdin' },
    { year: '2019', name: 'Rambo' },
    { year: '2018', name: 'Black Panther' },
    { year: '2018', name: 'Aquaman' },
    { year: '2018', name: 'Deadpool' },
    { year: '2017', name: 'Get Out' },
    { year: '2017', name: 'Baby Driver' },
    { year: '2017', name: 'Coco' },
    { year: '2016', name: 'Moon Light' },
    { year: '2016', name: 'X-men' },
    { year: '2016', name: 'Snowden' },
    { year: '2016', name: 'Sing' }

  ];

  constructor() { }
  returnMoviesList() {
    return this.movies;
  }
  deleteMovie(year) {
    this.movies = this.movies.filter(e => {
      return e.year !== year;
    });
  }

  addNewMovie(year,name){
    this.movies.push({year,name});
    console.log('movie has been added');
  }
}

