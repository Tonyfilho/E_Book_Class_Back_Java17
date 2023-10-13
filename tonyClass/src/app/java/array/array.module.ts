import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayComponent } from './array.component';
import { JavaUtilArrayComponent } from './java-util-array/java-util-array.component';



@NgModule({
  declarations: [
    ArrayComponent,
    JavaUtilArrayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArrayModule { }
