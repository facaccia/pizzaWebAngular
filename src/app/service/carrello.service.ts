import { Injectable } from "@angular/core";
import { Http ,Headers} from "@angular/http";
import { Subject } from "rxjs";
import { Drink } from "src/app/entity/Drink";
import { Ordine } from "src/app/entity/Ordine";




@Injectable()
export class CarrelloService{


    ordineArrivato: Ordine;
 
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http:Http){}


    creaOrdine(customer, pizzeSelezionate, drinkSelezionati, statoOrdine){
        
                let ordine: Ordine = new Ordine;
                ordine.customer= customer;
                ordine.ordinePizzeEntity= pizzeSelezionate;
                ordine.ordineBevandeEntity= drinkSelezionati;
                ordine.state= statoOrdine;
                console.log(ordine);
               
                return this.http.post("http://localhost:8010/ordine/createOrder",  ordine, {headers : this.headers})
            };
}