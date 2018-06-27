import { User } from "src/app/entity/User";
import { Pizza } from "src/app/entity/Pizza";
import { Stato } from "src/app/entity/Stato";
import { Drink } from "src/app/entity/Drink";

export class Ordine {

    id: number;
    customer: User;
    ordinePizzeEntity: Pizza [];
    ordineBevandeEntity:Drink[];
    nome: string;
    telefono: string;
    indirizzoConsegna:string;
    cognome:string;
    extraDeliveryPrice:number;
    date: Date;
    lastModifyTime:Date;
    state:Stato;



  constructor(){}
  
      }