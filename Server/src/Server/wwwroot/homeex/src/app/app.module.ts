import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ListOfAddressComponent } from './list-of-address/list-of-address.component';
import { AddressItemComponent } from './address-item/address-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ListOfAddressComponent,
    AddressItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
