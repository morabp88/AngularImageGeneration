import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[inputStyle]'
})
export class InputstyleDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  /*@HostListener('focusin') OnFocusIn(){

    }

  @HostListener('focusout') OnFocusOut(){

    }*/
}
