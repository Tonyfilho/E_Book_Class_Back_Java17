import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenenicsComponent } from './genenics.component';
import { RouterModule } from '@angular/router';
import { GenericsBasicsComponent } from './generics-basics/generics-basics.component';

const JAVA_GENERICS= [
  {path: "", component: GenenicsComponent},
  {path: "generics-basic", component: GenericsBasicsComponent},
 
];


@NgModule({
  declarations: [
    GenenicsComponent,
    GenericsBasicsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(JAVA_GENERICS)
  ]
})
export class GerenicsModule { }
