import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayListComponent } from './array-list.component';
import { RouterModule } from '@angular/router';
import { ArrayListExampleComponent } from './array-list-example/array-list-example.component';
import { ArrayXArrayListComponent } from './array-x-array-list/array-x-array-list.component';

const JAVA_ARRAY_LIST = [
  {path: "", component: ArrayListComponent},
  {path: "arraylist-examples", component: ArrayListExampleComponent},
  {path: "array-x-arraylist", component: ArrayXArrayListComponent},



];



@NgModule({
  declarations: [
    ArrayListComponent,
    ArrayListExampleComponent,
    ArrayXArrayListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(JAVA_ARRAY_LIST),
  ]
})
export class ArrayListModule { }
