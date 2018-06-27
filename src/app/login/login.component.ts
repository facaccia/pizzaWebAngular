import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HeaderComponent } from 'src/app/header/header.component';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

import { Router } from '@angular/router';
import { User } from 'src/app/entity/User';
import { LoginService } from 'src/app/service/login.service';
import { CarrelloComponent } from 'src/app/carrello/carrello.component';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnChanges {

  @ViewChild('form')form: NgForm;

  accesso:boolean= this.accessoService();
  customer:User;
  formRegistrazione:boolean= this.accessoRegistrazione();
  private headerComponent:HeaderComponent;
  constructor(private loginService:LoginService, private route: Router) { }
  user :User= new User;
  
  

  ngOnInit() {
    console.log(this.accesso);
  }
  
  
  login(){
   let username:string= this.form.value.username;
   let numeroTelefono : string= this.form.value.numeroTelefono;
   this.user.nome= username;
   this.user.telefono= numeroTelefono;

   

    
    // this.loginService.login(this.user);
    
    this.loginService.login2(this.user).subscribe(
      (response)=>{ 
              this.loginService.customer= response.json();
              console.log(this.loginService.customer);
              this.decidi(this.loginService.customer)
            },
      (error)=>{console.log("---error.---"+error)}
      );
    };
  

    decidi(customer){
      if (this.loginService.customer.nome!==null)
      {
      this.loginService.accesso= true;
      this.route.navigate(["/pizze"]);
      sessionStorage.setItem("customer", JSON.stringify(customer));
      console.log("App compo "+this.loginService.accesso);
      
      }else{
      document.getElementById("errore").innerHTML="Password o Username sbagliati" 
    }}


    ngOnChanges(){
    }


    logout(){
      console.log(this.accesso);
    }


     accessoService(){
      return this.loginService.accesso;
    }

    accessoRegistrazione(){
      return this.loginService.formRegistrazione;
    }
    

    registrazione(){
      this.accesso= true;
      this.formRegistrazione=true;
    }

}
