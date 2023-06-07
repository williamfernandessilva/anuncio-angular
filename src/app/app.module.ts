import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnuncioComponent } from './anuncio/anuncio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FixoComponent } from './fixo/fixo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnuncioComponent,
    FixoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
