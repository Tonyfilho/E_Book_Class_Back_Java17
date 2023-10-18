import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayListComponent } from './array-list.component';
import { RouterModule } from '@angular/router';
import { ArrayListExampleComponent } from './array-list-example/array-list-example.component';
import { ArrayXArrayListComponent } from './array-x-array-list/array-x-array-list.component';
import { ArrayXArraylistXLinkedlistComponent } from './array-x-arraylist-x-linkedlist/array-x-arraylist-x-linkedlist.component';
import { LinkedListComponent } from './linked-list/linked-list.component';

const JAVA_ARRAY_LIST = [
  {path: "", component: ArrayListComponent},
  {path: "arraylist-examples", component: ArrayListExampleComponent},
  {path: "array-x-arraylist", component: ArrayXArrayListComponent},
  {path: "array-x-arraylist-x-linkedList", component: ArrayXArraylistXLinkedlistComponent},
  {path: "linkedList", component: LinkedListComponent},



];



@NgModule({
  declarations: [
    ArrayListComponent,
    ArrayListExampleComponent,
    ArrayXArrayListComponent,
    ArrayXArraylistXLinkedlistComponent,
    LinkedListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(JAVA_ARRAY_LIST),
  ]
})
export class ArrayListModule { }
