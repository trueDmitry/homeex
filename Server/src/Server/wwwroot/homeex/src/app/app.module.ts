import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ListOfAdresesComponent } from './list-of-adreses/list-of-adreses.component';
import { AdresItemComponent } from './adres-item/adres-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ListOfAdresesComponent,
    AdresItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
