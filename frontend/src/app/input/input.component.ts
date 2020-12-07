import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomComponent } from '../custom-component.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements CustomComponent {

  @Input() type: string;
  @Input() placeholder: string;
  @Input() text: string;
  @Output() userInput = new EventEmitter<string>();

  @Input() data: any;
}
