import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[alert2]',
})
export class Alert2Directive implements AfterViewInit {
  @Input('alert2')
  color?: string;

  constructor(private element: ElementRef) {}

  ngAfterViewInit(): void {
    this.element.nativeElement.style.color =
      this.color == '' ? 'green' : this.color;
    this.element.nativeElement.style.fontSize = '1.5rem';
    this.element.nativeElement.innerText += '!';
  }
}
