import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicTableComponent } from './music-table/music-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MusicFormComponent } from './music-form/music-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicTableComponent,
    MusicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule //listar o HttpCliente para poder puxar as informações do Db.Json para dentro do music-Table.Component.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
