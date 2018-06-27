import { Component } from '@angular/core';
import { LoginComponent } from 'src/app/login/login.component';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private login: LoginService){}

}
