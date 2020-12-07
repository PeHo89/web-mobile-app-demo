import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SafeHtml } from './safe-html.pipe';
import {FormsModule} from '@angular/forms';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { LabelComponent } from './label/label.component';
import { CustomComponentDirective } from './custom-component.directive';

@NgModule({
  declarations: [
    AppComponent,
    SafeHtml,
    InputComponent,
    ButtonComponent,
    LabelComponent,
    CustomComponentDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
