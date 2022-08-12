import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[alert]',
})
export class AlertDirective implements AfterViewInit {
  constructor(private element: ElementRef) {}
  ngAfterViewInit(): void {
    this.element.nativeElement.style.color = 'red';
    this.element.nativeElement.style.fontSize = '1.5rem';
    this.element.nativeElement.innerText += '!';
  }
}
