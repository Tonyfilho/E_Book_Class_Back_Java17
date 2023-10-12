import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OopPart02Component } from './oop-part02.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { CompositionComponent } from './composition/composition.component';
import { PolymorphismComponent } from './polymorphism/polymorphism.component';
import { CastingWithClassComponent } from './casting-with-class/casting-with-class.component';


const JAVA_OPP_PART02_ROUTER = [
  {path: "", component: OopPart02Component},
  {path: "composition", component: CompositionComponent},
  {path: "encapsulation", component: EncapsulationComponent},
  {path: "polymorphism", component: PolymorphismComponent},
  {path: "casting-class", component: CastingWithClassComponent},



];

@NgModule({
  declarations: [
    OopPart02Component,
    EncapsulationComponent,
    CompositionComponent,
    PolymorphismComponent,
    CastingWithClassComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(JAVA_OPP_PART02_ROUTER)
  ]
})
export class OoPPart02Module { }
