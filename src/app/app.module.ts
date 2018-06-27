import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaService } from 'src/app/service/pizza.service';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/login/login.component';

import { RegistrazioneComponent } from 'src/app/login/registrazione/registrazione.component';
import { DropdownDirective } from 'src/app/condivisa/dropdown.directive';
import { LoginService } from 'src/app/service/login.service';
import { DrinkComponent } from './drink/drink.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { DrinkService } from 'src/app/service/drink.service';
import { CarrelloService } from 'src/app/service/carrello.service';


@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    HeaderComponent,
    LoginComponent,
    RegistrazioneComponent,
    DropdownDirective,
    DrinkComponent,
    CarrelloComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
        
  ],
  providers: [PizzaService, LoginService, DrinkService, CarrelloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
