import { Directive, Input, ElementRef, Renderer, HostListener } from '@angular/core';
import { StatusBar } from "@ionic-native/status-bar";

/**
 * Generated class for the HearBarColorDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[hearBarColor]' // Attribute selector
})
export class HearBarColorDirective {
  // @Input('hear-bar-color')
  // set condition(newCondition: boolean) {
  //   if (!newCondition) { // 创建模板对应的内嵌视图
  //     this.viewContainer.createEmbeddedView(this.templateRef);
  //   } else {
  //     this.viewContainer.clear();
  //   }
  // }
  //  *exeUnless="condition"
  @Input('hearBarColor')
  hearBarColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer, private statusBar: StatusBar) {
    console.log(elementRef)
    console.log('Hello HearBarColorDirective Directive');
    // this.color = elementRef.nativeElement.
  }

  ngOnInit() {
    console.log("ngOnInit")
    this.statusBar.styleLightContent();
  }


}
