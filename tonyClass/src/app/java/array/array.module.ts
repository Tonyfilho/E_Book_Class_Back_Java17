import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayComponent } from './array.component';
import { ArraysComponent } from './arrays/arrays.component';
import { JavaUtilArrayComponent } from './java-util-array/java-util-array.component';
import { RouterModule } from '@angular/router';

const JAVA_ARRAY = [
  {path: "", component: ArrayComponent},
  {path: "arrays", component: ArraysComponent},
  {path: "java-util-array", component: JavaUtilArrayComponent},


];


@NgModule({
  declarations: [
    ArrayComponent,
    ArraysComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(JAVA_ARRAY),
  ]
})
export class ArrayModule { }
