import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/service/pizza.service';
import { User } from 'src/app/entity/User';
import { CarrelloComponent } from 'src/app/carrello/carrello.component';
import { Pizza } from 'src/app/entity/Pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {


  premuto= false;
  conta=0

  pizzeSelezionate: any=this.pizzaService.pizzeSelezionate;

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.onProva()
  }

  
 private pizze : any= [];
 private ordineCreato : any;
 private ingredienti : any= [];
 private ingredientiSlice: any=[];
 private ingredientiModifica: any= [];
 pizzaCopiata= new Pizza;
 

 
 cambia(i){
   this.conta= i;
   this.premuto=!this.premuto;
   console.log(i);
   
 }


 elimina(p, i, pizzaCopiata){
   console.log(pizzaCopiata);
  pizzaCopiata.ingredientiList.splice(i,1);
  p.tipoModifica= "R";
  pizzaCopiata.ordineModificaPizzaList.push(p);
  this.ingredientiModifica.push(this.pizzaCopiata);
  p.idPizzaAssociata= this.pizzaCopiata.id;
  
  

 }

 aggiungi(i,p){
  console.log(p);
  this.pizzaCopiata.ingredientiList.push(p);
  p.tipoModifica="A";
  this.pizzaCopiata.ordineModificaPizzaList.push(p);
  this.ingredientiModifica.push(this.pizzaCopiata);
  this.pizzaCopiata.prezzo+= p.prezzoExtra;
  p.idPizzaAssociata= this.pizzaCopiata.id;
  console.log(p.idPizzaAssociata);


 }
  onProva(){
    this.pizzaService.getPizze().subscribe(
      (response)=>{
          this.pizzaService.pizze=response.json();
          this.pizze= this.pizzaService.pizze;},
      (error)=>{console.log("---error.---"+error)}
    );
  }


  copiaPizza(p){

    this.pizzaCopiata= Object.assign({}, p);
    // this.pizzaCopiata.ingredientiList = p.ingredientiList;
    // this.pizzaCopiata.descrizione= p.descrizione;
    // this.pizzaCopiata.prezzo= p.prezzo;
    // this.pizzaCopiata.ordineModificaPizzaList=[];
    // this.pizzaCopiata.id= 6;

    // if( this.pizzaCopiata.descrizione=="MARGHERITA"){
    //   this.pizzaCopiata.descrizione= "MARGHERITA(MOD)";
    // }
    // else if( this.pizzaCopiata.descrizione=="BUFALA"){
    //   this.pizzaCopiata.descrizione= "BUFALA(MOD)";
    // }
    // else if( this.pizzaCopiata.descrizione=="4 STAGIONI"){
    //   this.pizzaCopiata.descrizione= "4 STAGIONI(MOD)";
    // }
    // else if( this.pizzaCopiata.descrizione=="PROSCIUTTO"){
    //   this.pizzaCopiata.descrizione= "PROSCIUTTO(MOD)";
    // }
    // else if( this.pizzaCopiata.descrizione=="DIAVOLA"){
    //   this.pizzaCopiata.descrizione= "DIAVOLA(MOD)";
    // }
    console.log(p);
    console.log(this.pizzaCopiata);
}


  pizzeSelezionate1(p){
    this.pizzaService.pizzeSelezionateSub.next(p);
  }

  ingredientiGet(){
    this.pizzaService.getIngredienti().subscribe(
    (response)=>{
      this.pizzaService.ingredienti=response.json();
      this.ingredienti= this.pizzaService.ingredienti;
      this.ingredientiSlice= this.pizzaService.ingredienti.slice();
      console.log(this.ingredienti);},
      (error)=>{console.log("---error.---"+error)}
    );}

 
}
