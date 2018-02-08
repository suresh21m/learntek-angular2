//# sourceMappingURL=order.module.js.map

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {orderDetailsComponent} from './order/order.component';
import {AppComponent} from './app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    orderDetailsComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: []
})

export class AppModule{}