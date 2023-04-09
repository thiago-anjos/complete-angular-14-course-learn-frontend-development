import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPaint]',
})
export class PaintDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  @Input()
  color: string = 'Yellow';

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = this.color;
  }
}
