import { Component, OnInit } from '@angular/core';
import { DrinkService } from 'src/app/service/drink.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {

  constructor(private drinkService: DrinkService) { }

  drink: any= [];

  drinkSelezionati: any=[];

  ngOnInit() {
    this.onProva(); 
  }


  onProva(){
    this.drinkService.getDrink().subscribe(
      (response)=>{
          this.drinkService.drink =response.json();
          this.drink= this.drinkService.drink;
          console.log(this.drink);},
      (error)=>{console.log("---error.---"+error)}
    );
  }



  drinkSelezionati1(d){
    this.drinkService.drinkSelezionatiSub.next(d);
    console.log(d);
  }

}
