import { Injectable } from "@angular/core";
import { PizzaComponent } from "src/app/pizza/pizza.component";
import { Http ,Headers} from "@angular/http";
import { Ordine } from "src/app/entity/Ordine";
import { Subject } from "rxjs";
import { Pizza } from "src/app/entity/Pizza";


@Injectable()
export class PizzaService{

    private pizza:PizzaComponent;
   

    
    pizze: any= [];
    ingredienti: any= [];
    pizzeSelezionate: any= [];
    pizzeSelezionateSub= new Subject;
 
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http:Http){}

    getPizze(){
        
        return this.http.get('http://localhost:8010/pizze/getAll');
    }

    getIngredienti(){
        return this.http.get('http://localhost:8010/ingredienti/getAll');
    }
    
    
}
