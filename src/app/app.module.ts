import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HoraService } from './_services/hora.service';
import { SalonService } from './_services/salon.service';
import { CursoService } from './_services/curso.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HoraService,
    SalonService,
    CursoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
