import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InheritanceComponent } from './inheritance.component';
import { RouterModule } from '@angular/router';
import { Part01Component } from './part01/part01.component';

const INHERITANCE_ROUTER = [
  {path: '', component: InheritanceComponent},
  {path: 'part01', component: Part01Component},
];

@NgModule({
  declarations: [
    InheritanceComponent,
    Part01Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(INHERITANCE_ROUTER),
  ]
})
export class InheritanceModule { }
