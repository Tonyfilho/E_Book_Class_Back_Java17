import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InheritanceComponent } from './inheritance.component';
import { RouterModule } from '@angular/router';
import { Part01Component } from './part01/part01.component';
import { Part02Component } from './part02/part02.component';
import { Part03Component } from './part03/part03.component';
import { JavaLangObjectComponent } from './java-lang-object/java-lang-object.component';
import { InherintanceExampleComponent } from './inherintance-example/inherintance-example.component';
import { ThisXSuperComponent } from './this-x-super/this-x-super.component';

const INHERITANCE_ROUTER = [
  {path: '', component: InheritanceComponent},
  {path: 'part01', component: Part01Component},
  {path: 'part02', component: Part02Component},
  {path: 'part03', component: Part03Component },
  {path: 'inheritance', component: InherintanceExampleComponent },
  {path: 'java-lang-object', component: JavaLangObjectComponent },
  {path: 'this-x-super', component: ThisXSuperComponent },
];

@NgModule({
  declarations: [
    InheritanceComponent,
    Part01Component,
    Part02Component,
    Part03Component,
    JavaLangObjectComponent,
    InherintanceExampleComponent,
    ThisXSuperComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(INHERITANCE_ROUTER),
  ]
})
export class InheritanceModule { }
