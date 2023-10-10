import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OopPart02Component } from './oop-part02.component';


const JAVA_OPP_PART02_ROUTER = [
  {path: "", component: OopPart02Component},];

@NgModule({
  declarations: [
    OopPart02Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(JAVA_OPP_PART02_ROUTER)
  ]
})
export class OoPPart02Module { }
