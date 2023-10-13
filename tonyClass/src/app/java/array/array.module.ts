import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayComponent } from './array.component';
import { ArraysComponent as ArraysComponent } from './arrays/arrays.component';

const JAVA_ARRAY = [
  {path: "", component: ArrayComponent},
  {path: "array", component: ArraysComponent},


];

@NgModule({
  declarations: [
    ArrayComponent,
    ArraysComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArrayModule { }
