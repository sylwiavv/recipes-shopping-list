import {Directive, ElementRef, HostListener, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[betterBasicHighLightDirective]'
})

export class BetterBasicHighLightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private render: Renderer2) {
  }

  ngOnInit() {
    this.render.setStyle(this.elementRef.nativeElement, 'background-color', '#7ac2b6')
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.render.setStyle(this.elementRef.nativeElement, 'background-color', '#069182')
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.render.setStyle(this.elementRef.nativeElement, 'background-color', '#7ac2b6')
  }
}
