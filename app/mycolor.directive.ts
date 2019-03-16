import { Directive, ElementRef, HostListener, Input } from '@angular/core';



@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

   @Input('appMycolor') selectedColor;

   @Input() defaultColor;


  constructor(private el: ElementRef) {
  }

  private changeColor(color: string) {
    this.el.nativeElement.style.color = color;
  }

  @HostListener('mouseenter') onMouseEnter() {

      if ( this.selectedColor) {
        this.changeColor(this.selectedColor );
      } else {
        this.changeColor(this.defaultColor || 'red');
      }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(null);
  }

}
