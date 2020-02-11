import { NgModule } from '@angular/core';
import { EditorComponent } from './editor/editor.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EditorComponent
  ]
})
export class AngularSimplemdeModule { }
