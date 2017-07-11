import { Directive } from '@angular/core';
import { ViewController, App } from 'ionic-angular';

/**
 * Generated class for the AuthDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[auth]' // Attribute selector
})
export class AuthDirective {

  constructor(private app: App) {
    console.log("auth")
    app.getRootNav().push("LoginPage");
  }

}
