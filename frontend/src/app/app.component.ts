import { Component,  OnInit } from '@angular/core';
import { HttpService } from './service/http/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  uiConfig = {} as any;
  userInputs = {} as any;
  loggedIn = false;

  constructor(private httpService: HttpService) {}

  async ngOnInit() {
    const response = await fetch('http://ec2-54-172-192-20.compute-1.amazonaws.com:3000/ui/login-form');
    this.uiConfig = await response.json();
  }

  async onSubmit(url: string): Promise<void> {
    this.loggedIn = await this.httpService.login(url, this.userInputs.username, this.userInputs.password);
  }

  setInput(key: number, value: string): void {
    this.userInputs[key] = value;
  }
}
