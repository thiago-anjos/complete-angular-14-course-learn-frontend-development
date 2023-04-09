import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPaint]',
})
export class PaintDirective {
  constructor(private elementRef: ElementRef) {}

  @Input()
  color: string = 'Yellow';

  @HostListener('mouseover') onMouseOver() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('mouseout') onMouseOut() {
    this.elementRef.nativeElement.style.backgroundColor = 'pink';
  }
}
