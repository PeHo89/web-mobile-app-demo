import { Component, Input } from '@angular/core';
import { CustomComponent } from '../custom-component.interface';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements CustomComponent {

  @Input() text: string;

  @Input() data: any;
}
