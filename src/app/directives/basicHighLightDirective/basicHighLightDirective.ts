import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: '[basicHighLightDirective]'
})

export class BasicHighLightDirective implements OnInit {
  constructor(private elementRef: ElementRef ) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "#d59bfa"
  }
}
