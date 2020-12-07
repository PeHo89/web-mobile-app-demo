import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() type: string;
  @Input() placeholder: string;
  @Input() text: string;
  @Output() userInput = new EventEmitter<string>();
}
