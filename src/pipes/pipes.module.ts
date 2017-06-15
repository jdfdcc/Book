/**
 * Created by root on 17-5-12.
 */
import { NgModule } from '@angular/core';
import { IntToTimePipe } from "../pipes/int-to-time/int-to-time";
// import { OrderByPipe } from "../pipes/order-by/order-by";

@NgModule({
  declarations: [
    IntToTimePipe,
  ],
  imports: [],
  exports:[IntToTimePipe],
  providers: []
})
export class PipesModule { }
