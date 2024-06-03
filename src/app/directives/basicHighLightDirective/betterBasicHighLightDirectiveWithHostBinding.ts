import {Directive, HostBinding, HostListener, OnInit, Input} from "@angular/core";

@Directive({
  selector: '[betterBasicHighLightDirectiveWithHostBinding]'
})
export class BetterBasicHighLightDirectiveWithHostBinding implements OnInit {
  @Input() defaultColor: string = "transparent"
  @Input() highlightColor: string = "#64a476"

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor

  ngOnInit(): void {
    this.defaultColor = this.defaultColor
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.defaultColor
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.highlightColor
  }

}
