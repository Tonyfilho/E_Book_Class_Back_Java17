import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InheritanceComponent } from './inheritance.component';
import { RouterModule } from '@angular/router';
import { Part01Component } from './part01/part01.component';
import { Part02Component } from './part02/part02.component';
import { Part03Component } from './part03/part03.component';

const INHERITANCE_ROUTER = [
  {path: '', component: InheritanceComponent},
  {path: 'part01', component: Part01Component},
  {path: 'part02', component: Part02Component},
];

@NgModule({
  declarations: [
    InheritanceComponent,
    Part01Component,
    Part02Component,
    Part03Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(INHERITANCE_ROUTER),
  ]
})
export class InheritanceModule { }
