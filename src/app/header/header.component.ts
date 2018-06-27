import { Component, OnInit } from '@angular/core';
import { PizzaComponent } from 'src/app/pizza/pizza.component';
import { PizzaService } from 'src/app/service/pizza.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  private pizzaService: PizzaService;
  constructor() { }

  ngOnInit() {
  }

  onProva(){
    console.log("....")
    this.pizzaService.getPizze();

  }
}
