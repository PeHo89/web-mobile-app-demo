import { Component, ComponentFactoryResolver, OnInit, Type, ViewChild } from '@angular/core';
import { HttpService } from './service/http/http.service';
import { CustomComponentDirective } from './custom-component.directive';
import { CustomComponent } from './custom-component.interface';
import { LabelComponent } from './label/label.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  uiConfig = {} as any;
  uiConfigExtended = {} as any;
  userInputs = {} as any;
  loggedIn = false;

  @ViewChild(CustomComponentDirective, {static: true})
  componentHost: CustomComponentDirective;

  constructor(
    private httpService: HttpService,
    private componentFactoryResolver: ComponentFactoryResolver
  ){}

  async ngOnInit() {
    let response = await fetch('http://ec2-54-172-192-20.compute-1.amazonaws.com:3000/ui/login-form');
    this.uiConfig = await response.json();

    response = await fetch('http://ec2-54-172-192-20.compute-1.amazonaws.com:3000/ui/login-form-extended');
    this.uiConfigExtended = await response.json();

    this.loadComponent();
  }

  async onSubmit(url: string): Promise<void> {
    this.loggedIn = await this.httpService.login(url, this.userInputs.username, this.userInputs.password);
  }

  setInput(key: number, value: string): void {
    this.userInputs[key] = value;
  }

  loadComponent() {
    const viewContainerRefOne = this.componentHost.viewContainerRef;
    viewContainerRefOne.clear();

    let component: Type<any>;

    if (this.uiConfig.parts[0].label) {
      component = LabelComponent;

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
      const componentRef = viewContainerRefOne.createComponent<LabelComponent>(componentFactory);
      componentRef.instance.text = this.uiConfig.parts[0].label.text;
      componentRef.instance.data = ' label';

    } else if (this.uiConfig.parts[2].input) {
      component = InputComponent;

    } else if (this.uiConfig.parts[0].button) {
      component = ButtonComponent;
    }
  }

  getTemplate(part: any) {
    return Object.keys(part)[0];
  }
}
