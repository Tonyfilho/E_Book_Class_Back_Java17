import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenenicsComponent } from './genenics.component';
import { RouterModule } from '@angular/router';
import { GenericsBasicsComponent } from './generics-basics/generics-basics.component';
import { ComparableXComparatorComponent } from './comparable-x-comparator/comparable-x-comparator.component';

const JAVA_GENERICS= [
  {path: "", component: GenenicsComponent},
  {path: "generics-basic", component: GenericsBasicsComponent},
  {path: "comparable-x-comparator", component: ComparableXComparatorComponent},
 
];


@NgModule({
  declarations: [
    GenenicsComponent,
    GenericsBasicsComponent,
    ComparableXComparatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(JAVA_GENERICS)
  ]
})
export class GerenicsModule { }
