import { Ingredienti } from "src/app/entity/Ingredienti";

export class Pizza {

    id: number;
    descrizione:string;
	ingredientiList: Ingredienti [];
	prezzo: number;
    ordineModificaPizzaList: Ingredienti[];
  
  constructor(){}
  
      }