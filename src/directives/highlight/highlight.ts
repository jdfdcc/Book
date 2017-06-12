import { Directive, ElementRef, HostListener } from '@angular/core';
/**
 * Generated class for the HighlightDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseenter') onMouseEnter() {
    console.log("mouseenter")
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log("mouseenter")
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
