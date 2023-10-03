import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavaComponent } from './java.component';
import { ReferenceXObjectXInstanceXClassComponent } from './ooP-Part01/reference-x-object-x-instance-x-class/reference-x-object-x-instance-x-class.component';
import { RouterModule } from '@angular/router';
import { StaticXInstanceComponent } from './ooP-Part01/static-x-instance/static-x-instance.component';
import { OoPPart01Component } from './ooP-Part01/ooP-Part01.component';
import { StaticXInstanceMethodsComponent } from './ooP-Part01/static-x-instance-methods/static-x-instance-methods.component';


const JAVA_ROUTER = [
  {path: "", component: JavaComponent},
  {path: "ooP-Part01", component: OoPPart01Component},
  {path: "ooP-Part01/static-X-instance", component: StaticXInstanceComponent},
  {path: "ooP-Part01/static-X-methods", component: StaticXInstanceMethodsComponent},
  {path: "ooP-Part01/reference-x-object-x-instance-x-class", component: ReferenceXObjectXInstanceXClassComponent},
];

@NgModule({
  declarations: [
    JavaComponent,
    ReferenceXObjectXInstanceXClassComponent,
    StaticXInstanceComponent,
    OoPPart01Component,
    StaticXInstanceMethodsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(JAVA_ROUTER),
  ]
})
export class JavaModule { }
