import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  //quando passar o mouse fica amarelo ou outra cor
  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  //quando passar o mouse fica branco
  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
  }
  //quando passar o mouse ficara amarelo e quando sair fica branco
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }
  private backgroundColor : string | undefined;

  @Input()defaultColor: string = 'white';
  @Input()highlightColor: string = 'orange';

  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
}
