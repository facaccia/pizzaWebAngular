import { Component, OnInit, ViewChild } from '@angular/core';


import { NgForm } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { User } from 'src/app/entity/User';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  @ViewChild('formRegistrazione')form: NgForm;

  private user: User= new User();

  constructor(private loginService: LoginService,
              private login: LoginComponent,
              private route : Router) { }


  ngOnInit() {
  }

  tornaLogin(){
    this.login.formRegistrazione= false;
    this.login.accesso= false;
  }

  registrazione(){

    let username:string= this.form.value.username;
    let numeroTelefono : string= this.form.value.numeroTelefono;
    let cognome:string= this.form.value.cognome;
    this.user.cognome= cognome;
    this.user.nome= username;
    this.user.telefono= numeroTelefono;

    this.loginService.registrazione(this.user).subscribe(
      (response)=>{console.log(response.json())
                  this.form.reset();
                  this.login.accesso=false
                  this.login.formRegistrazione=false}
    );

  }

}
