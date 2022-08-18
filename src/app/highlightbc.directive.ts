import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightbc]'
})
export class HighlightbcDirective {

  constructor(private el:ElementRef) { }

  @Input() defaultColor = '';
  @Input() appHighLight = '';

  @HostListener('mouseenter') onMouseEnter(){
     this.highLight(this.appHighLight || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highLight('green');
 }

  private highLight(color:string)
  {
    this.el.nativeElement.style.background = color;
  }

}
