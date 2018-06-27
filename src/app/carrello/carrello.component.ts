import { Component, OnInit,OnChanges } from '@angular/core';
import { Pizza } from 'src/app/entity/Pizza';
import { PizzaComponent } from 'src/app/pizza/pizza.component';
import { PizzaService } from 'src/app/service/pizza.service';
import { Http } from '@angular/http/src/http';
import { User } from 'src/app/entity/User';
import { DrinkService } from 'src/app/service/drink.service';
import { CarrelloService } from 'src/app/service/carrello.service';
import { Drink } from 'src/app/entity/Drink';


@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit, OnChanges {


  
  constructor(private pizzaService:PizzaService, private drinkService: DrinkService, private carrelloService: CarrelloService) { }
  

  pizzaSelezionatePiene=false;
  private ordineCreato : any;
  private ordineArrivato: any;
  pizzeSelezionate: any=this.pizzaService.pizzeSelezionate;
  drinkSelezionati: any= this.drinkService.drinkSelezionati;
  prezzo:number=0 ;
  
  ngOnInit() {
    this.pizzaService.pizzeSelezionateSub.subscribe(
      (p:Pizza)=>{
        this.pizzaService.pizzeSelezionate.push(p);
        this.pizzaSelezionatePiene= true;
        this.prezzo+= p.prezzo;
      }
    )
    
    this.drinkService.drinkSelezionatiSub.subscribe(
      (d:Drink)=>{
        this.drinkService.drinkSelezionati.push(d);
        this.pizzaSelezionatePiene= true;
        this.prezzo+= d.prezzo;
      }
    )
  }

  ngOnChanges(){

    

    console.log("onChage"+this.pizzaSelezionatePiene);
    console.log("onChage"+this.pizzeSelezionate);
  }

  completaOrdine(){
    let customer: User = JSON.parse(sessionStorage.getItem('customer'));

    let statoOrdine= "RECEIVED";    
    this.carrelloService.creaOrdine(customer, this.pizzeSelezionate, this.drinkSelezionati, statoOrdine).subscribe(
      (response)=>{
          this.carrelloService.ordineArrivato=response.json();
          this.ordineArrivato= this.carrelloService.ordineArrivato;
          console.log(this.ordineArrivato);
          this.svuota()},
      (error)=>{console.log("---error.---"+error)}
    );;
  }


  svuota(){
    this.pizzaService.pizzeSelezionate.splice(0);
    this.drinkService.drinkSelezionati.splice(0);
    this.prezzo=0;
    this.pizzaSelezionatePiene= false;
  }

  elimina(p,i){
  
    this.pizzaService.pizzeSelezionate.splice(i,1);
    this.prezzo-= p.prezzo;
  }
  eliminaDrink(d,i){
    
      this.drinkService.drinkSelezionati.splice(i,1);
      this.prezzo-= d.prezzo;
    }

}
