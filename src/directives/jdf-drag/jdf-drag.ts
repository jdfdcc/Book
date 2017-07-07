import { Directive, ElementRef } from '@angular/core';

/**
 * Generated class for the JdfDragDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[jdfdrag]' // Attribute selector
})
export class JdfDragDirective {
  private canDrag = false;

  constructor(private ele: ElementRef) {
    console.log(this.ele)
  }

  ngOnInit() {
    let ele = this.ele.nativeElement, xCha, yCha;
    ele.addEventListener("mousedown", e => {
      // ele.setAttribute("position", "fixed");
      ele.style.position = "fixed";
      this.canDrag = true;
      xCha = e.clientX - ele.offsetLeft;
      yCha = e.clientY - ele.offsetTop;
      ele.addEventListener("mousemove", e => {
        if (this.canDrag) {
          ele.style.left = e.clientX - xCha + 'px'
          ele.style.top = e.clientY - yCha + 'px'
        }
      });
    });
    document.addEventListener("mouseup", e => {
      this.canDrag = false;
      console.log(e)
      ele.removeEventListener("mousemove", function () {
        alert(123)
      }, false)
    });
  }
}
