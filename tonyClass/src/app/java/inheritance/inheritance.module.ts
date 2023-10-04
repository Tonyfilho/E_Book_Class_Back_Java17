import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InheritanceComponent } from './inheritance.component';
import { RouterModule } from '@angular/router';

const INHERITANCE_ROUTER = [
  {path: '', component: InheritanceComponent}
];

@NgModule({
  declarations: [
    InheritanceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(INHERITANCE_ROUTER),
  ]
})
export class InheritanceModule { }
