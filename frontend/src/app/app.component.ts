import { Component,  OnInit } from '@angular/core';
import { HttpService } from './serice/http/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private httpService: HttpService) {}

  async ngOnInit() {
    const response = await fetch('http://ec2-54-172-192-20.compute-1.amazonaws.com:3000/ui/login-form');
    const uiConfig = await response.json();
    console.log(uiConfig);
  }

  async login() {
    // this.loggedIn = await this.httpService.login(this.email, this.password);
  }
}
