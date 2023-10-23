import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifiersComponent } from './modifiers.component';
import { AbstractComponent } from './abstract/abstract.component';
import { RouterModule } from '@angular/router';
import { InterfaceComponent } from './interface/interface.component';

const JAVA_MODIFIER = [
  {path: "", component: ModifiersComponent},
  {path: "abstract", component: AbstractComponent},
  {path: "interface", component: InterfaceComponent},

];



@NgModule({
  declarations: [
    ModifiersComponent,
    AbstractComponent,
    InterfaceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(JAVA_MODIFIER)
  ]
})
export class ModifiersModule { }
