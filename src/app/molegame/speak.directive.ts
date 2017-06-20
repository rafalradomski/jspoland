import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSpeak]'
})
export class SpeakDirective {

  private element: ElementRef;
  private renderer: Renderer2;

  constructor(element: ElementRef, renderer: Renderer2){
    this.element = element;
    this.renderer = renderer;
  }

  ngOnInit(): void{
    this.renderer.listen("window","click", ()=> console.log('window click'))
  }

  @HostListener('mouseenter')
  public speak(){
    console.log('speaking');
    console.log(this.element.nativeElement);
    this.renderer.setStyle(
        this.element.nativeElement,
        'background-colour',
        'black'
    )
  }

}
