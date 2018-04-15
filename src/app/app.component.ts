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
  /* URL Variables */
  recipies_url = "assets/files/recipies.json"
  ingridients_url = "assets/files/ingridients.json"
  /* Variable that holds the loaded list of recipies. */
  recipie_list:any[];
  ingridients_list:any[];
  /* Variable that determines which recipie is currently showing */
  current_index:number = 5;

  toggledIngridientsList:number[] = [];

  /* Toggle Variables */
  filter_toggle = true;
  ingr_toggle = true;
  method_toggle = true;


  /*
  Functions
  ####################################################################################################
  */

  /* The consturctor fetches the recipies from the recipie.JSON using the fetchJSONService. It stores it in the recipe_list variable */
 constructor(private fetchJSONService: FetchJsonService) {
   // Fetches the recipies
    this.fetchJSONService.getPosts(this.recipies_url)
    .subscribe(
      (data: any[]) => {
        this.recipie_list = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
    // Fetches the Ingridients
    this.fetchJSONService.getPosts(this.ingridients_url)
    .subscribe(
      (data: any[]) => {
        this.ingridients_list = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  ngOnInit() {
  }
  
  /* Function which returns a random number between max and min variables */
  getRandomInt(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /* Function which sets the current_index to a random number within the allowed scope and different from previous current_index */
  randomRecipie() {
    var temp_number:number = this.current_index;
    // The function makes sure that it's not the same recipie as the current one
    while(temp_number == this.current_index) {
      temp_number = this.getRandomInt(0, this.recipie_list.length-1);
    }
    this.current_index = temp_number;
  }

  toggleIngridient(index:number) {
    var duplicate = false;
    for(let i = 0; i < this.toggledIngridientsList.length; i++) {
      if(index = this.toggledIngridientsList[i]) {
        duplicate = true;
        console.log('Index ' + index + ' was already in list, nothing added');
      }
    }
    if(duplicate == false) {
      this.toggledIngridientsList.push(index);
      console.log('Index ' + index + ' was not in list and is now added');
    }
    return duplicate;
  }
}
