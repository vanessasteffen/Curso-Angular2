import {Directive, HostListener, ElementRef, Renderer2, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  //muda de cor quando passa o mouse por cima para amarelo
  @HostListener('mouseenter') onMouseOver() {
    /* this._renderer.setStyle
     (this._elementRef.nativeElement,
       'background-color', 'yellow');*/
    this.backgroundColor = 'yellow';
  }

  //muda de cor quando sai de cima do que era para ser amarelo
  @HostListener('mouseleave') onMouseLeave() {
    /* this._renderer.setStyle
     (this._elementRef.nativeElement,
       'background-color', 'white');*/
    this.backgroundColor = 'white';
  }

  // @HostBinding('style.backgroundColor') backgroundColor: string | undefined;
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }
  private backgroundColor : string | undefined;

  constructor(
    private _elementRef: ElementRef,
    //private _renderer: Renderer2
  ) {
  }

}

