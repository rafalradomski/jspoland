import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appSpeak]'
})
export class SpeakDirective {

  @HostListener('mouseenter') speak(){
    console.log('speaking');
  }

}
