import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavaComponent } from './java.component';
import { ReferenceXObjectXInstanceXClassComponent } from './ooP-Part01/reference-x-object-x-instance-x-class/reference-x-object-x-instance-x-class.component';
import { RouterModule } from '@angular/router';
import { StaticXInstanceComponent } from './ooP-Part01/static-x-instance/static-x-instance.component';

const JAVA_ROUTER = [
  {path: "", component: JavaComponent},
  {path: "OOP-Part01", component: ReferenceXObjectXInstanceXClassComponent},
  {path: "static-X-instance", component: StaticXInstanceComponent}
];

@NgModule({
  declarations: [
    JavaComponent,
    ReferenceXObjectXInstanceXClassComponent,
    StaticXInstanceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(JAVA_ROUTER),
  ]
})
export class JavaModule { }
