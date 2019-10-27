import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertController } from '@ionic/angular';
import { AllMoviesService} from '../all-movies.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private allmoviesService: AllMoviesService,
  
  ) {}

  movies = [];

  singleMovie;

  ngOnInit() {
    this.movies = this.allmoviesService.returnMoviesList();

    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('movieyear');

      this.singleMovie = this.movies.find(obj => {
        return obj.year.includes(val);
      });
    });
  }

  async deleteMovie() {
    console.log('Delete Movie', this.singleMovie);

    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: `Are you sure you want to remove ${this.singleMovie.name}?`,
      // buttons: ['OK']
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.allmoviesService.deleteMovie(this.singleMovie.year);
            this.router.navigateByUrl('/movies-list');
          }
        }
      ]
    });

    alert.present();
  }
}

