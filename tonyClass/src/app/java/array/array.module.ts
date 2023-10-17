import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayComponent } from './array.component';
import { ArraysComponent } from './arrays/arrays.component';
import { JavaUtilArrayComponent } from './java-util-array/java-util-array.component';
import { RouterModule } from '@angular/router';
import { SeachInArrayComponent } from './seach-in-array/seach-in-array.component';
import { RefMemoryXValueTypeComponent } from './ref-memory-x-value-type/ref-memory-x-value-type.component';
import { VariableArgumentsComponent } from './variable-arguments/variable-arguments.component';
import { MultidimmentionalComponent } from './multidimmentional/multidimmentional.component';
import { TwodimentionalComponent } from './twodimentional/twodimentional.component';

const JAVA_ARRAY = [
  {path: "", component: ArrayComponent},
  {path: "arrays", component: ArraysComponent},
  {path: "java-util-array", component: JavaUtilArrayComponent},
  {path: "find-a-match-in-array", component: SeachInArrayComponent},
  {path: "ref-memory-x-value-type", component: RefMemoryXValueTypeComponent},
  {path: "variable-arguments", component: VariableArgumentsComponent},


];


@NgModule({
  declarations: [
    ArrayComponent,
    ArraysComponent,
    SeachInArrayComponent,
    RefMemoryXValueTypeComponent,
    VariableArgumentsComponent,
    MultidimmentionalComponent,
    TwodimentionalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(JAVA_ARRAY),
  ]
})
export class ArrayModule { }
