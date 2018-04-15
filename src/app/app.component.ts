import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { FetchJsonService } from './shared/fetch-json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    /*
  Variables
  ####################################################################################################
  */
  /* Title of the site */
  title:string = 'MatInspo';
  /* Variable that determines which recipie is currently showing */
  recipie_list:any[];
  current_index:number = 5;
  current_recipie:any;

  ingr_toggle = true;
  method_toggle = true;

  /*
  Functions
  ####################################################################################################
  */
 constructor(private fetchJSONService: FetchJsonService) {

  }

  ngOnInit() {
    this.fetchJSONService.getPosts()
    .subscribe(
      (data: any[]) => {
        this.recipie_list = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
    console.log('Ran ngOnInit function');
  }
  
  /* Function which returns a random number between max and min variables */
  getRandomInt(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /* Function which sets the current_index to a random number within the allowed scope */
  randomRecipie() {
    this.current_index = this.getRandomInt(0, this.recipie_list.length-1);
    this.current_recipie = this.recipie_list[this.current_index];
    console.log('New current_index is: ' + this.current_index);
  }
}
