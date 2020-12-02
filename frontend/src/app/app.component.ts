import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  htmlTemplate: string;
  email: string;
  password: string;

  // static true because of using element in ngOnInit
  @ViewChild('template', {static: true}) public template: ElementRef;

  async ngOnInit() {
    const result = await fetch('http://ec2-54-157-129-199.compute-1.amazonaws.com:3000/ui/login-form');
    // const result = await fetch('http://localhost:3000/ui/login-form');

    if (result.ok) {
      this.htmlTemplate = await result.text();

      this.htmlTemplate = this.htmlTemplate.concat('<p>E-Mail Eingabe: <span id="email-input-value"></span> (displayed within HTML Template from server)</p>');

      // doesn't work
      // this.htmlTemplate = this.htmlTemplate.replace('input id="email-input"', 'input [(ngModel)]="email" id="email-input"');
      // this.htmlTemplate = this.htmlTemplate.concat('<p>E-Mail Eingabe: {{ email }}</p>');
      //
      // this.htmlTemplate = this.htmlTemplate.replace('button id', 'button (click)="login()" id');

      setTimeout(() => {
        document.querySelector('#login-button').addEventListener('click', this.login.bind(this));
        document.querySelector('#email-input').addEventListener('input', this.changeEmail.bind(this));
      }, 500);

    } else {
      this.htmlTemplate = '<p>Error while loading HTML template from server</p>';
    }
  }

  changeEmail(event) {
    this.email = event.target.value;
    document.querySelector('#email-input-value').innerHTML = this.email;
  }

  login() {
    console.log('Button loaded from server clicked!');
  }

  test() {
    console.log('Button created in Angular clicked!');
  }
}
