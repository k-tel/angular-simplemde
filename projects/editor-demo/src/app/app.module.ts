import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularSimplemdeModule } from 'projects/angular-simplemde/src/lib/angular-simplemde.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularSimplemdeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
