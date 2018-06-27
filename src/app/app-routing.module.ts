import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { PizzaComponent } from "src/app/pizza/pizza.component";
import { LoginComponent } from "src/app/login/login.component";
import { DrinkComponent } from "src/app/drink/drink.component";



const appRoutes : Routes= [
    {path:'', redirectTo:'/', pathMatch:'full'},
    {path:'', component: LoginComponent},
   
    {path:'pizze', component:PizzaComponent },
    {path:'drink', component:DrinkComponent },

]

@NgModule({

    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}