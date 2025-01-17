import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardListComponent } from './components/card-list/card-list.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormsComponent,
    CardListComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
