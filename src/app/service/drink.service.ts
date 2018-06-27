import { Injectable } from "@angular/core";
import { Http ,Headers} from "@angular/http";
import { Subject } from "rxjs";
import { Drink } from "src/app/entity/Drink";




@Injectable()
export class DrinkService{


    
    drink: Drink[];
    drinkSelezionatiSub= new Subject;
    drinkSelezionati: any=[];
 
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http:Http){}

    getDrink(){
        return this.http.get('http://localhost:8010/drink/getAll');
    }
}