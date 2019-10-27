import { Component, OnInit } from '@angular/core';
import { AllMoviesService } from '../all-movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.page.html',
  styleUrls: ['./movies-list.page.scss'],
})
export class MoviesListPage implements OnInit {

  constructor(
    private router: Router,
    private allmovies:AllMoviesService
  ) {}

  movies = [];

  ngOnInit() {
    console.log('nothing on init');
  
    // this.students = this.everythingstudentService.returnStudentsList();

    // this.students = this.studentsListService.getStudents;
    // this.students = this.studentsListService.getAllStudents();
  }

  changeUrl(user) {
    const year = user.year;
    const url = `movies-list/${year}`;

    this.router.navigateByUrl(url);

    // or

    // this.router.navigate([url]);
  }
  ionViewDidEnter() {
    console.log('view Enter');
    this.movies = this.allmovies.returnMoviesList();
  }

}
