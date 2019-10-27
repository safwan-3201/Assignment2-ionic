import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AllMoviesService } from '../all-movies.service';




@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.page.html',
  styleUrls: ['./add-new.page.scss'],
})
export class AddNewPage implements OnInit {

  addForm: FormGroup;
  singleMovie;
  
  constructor(
     private router:Router,
     private allmoviesService: AllMoviesService,
     private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.addForm = this.formBuilder.group({
      year: [null, [Validators.required]],
      name: [null, [Validators.required]]
    });
  }

   async addNewMovie(){
     this.singleMovie = this.addForm.value;
    console.log('value of new movie',this.singleMovie)
    this.allmoviesService.addNewMovie(this.singleMovie.year, this.singleMovie.name);
    this.router.navigateByUrl('/movies-list');
  }

}
