import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomComponent } from '../custom-component.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements CustomComponent {

  @Input() text: string;
  @Output() buttonClick = new EventEmitter();

  @Input() data: any;

  onClick() {
    this.buttonClick.emit();
  }
}
