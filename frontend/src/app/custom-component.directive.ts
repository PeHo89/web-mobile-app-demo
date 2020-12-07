import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[componentHost]',
})
export class CustomComponentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }
}
