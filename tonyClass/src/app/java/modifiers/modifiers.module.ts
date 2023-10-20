import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifiersComponent } from './modifiers.component';
import { AbstractComponent } from './abstract/abstract.component';
import { RouterModule } from '@angular/router';

const JAVA_MODIFIER = [
  {path: "", component: ModifiersComponent},
  {path: "abstract", component: AbstractComponent},

];



@NgModule({
  declarations: [
    ModifiersComponent,
    AbstractComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(JAVA_MODIFIER)
  ]
})
export class ModifiersModule { }
