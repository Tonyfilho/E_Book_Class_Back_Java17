import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavaComponent } from './java.component';
import { ReferenceXObjectXInstanceXClassComponent } from './ooP-Part01/reference-x-object-x-instance-x-class/reference-x-object-x-instance-x-class.component';
import { RouterModule } from '@angular/router';

const JAVA_ROUTER = [
  {path: "", component: JavaComponent},
  {path: "OOP-Part01", component: ReferenceXObjectXInstanceXClassComponent},
  {path: "static-X-instance", component: ReferenceXObjectXInstanceXClassComponent}
];

@NgModule({
  declarations: [
    JavaComponent,
    ReferenceXObjectXInstanceXClassComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(JAVA_ROUTER),
  ]
})
export class JavaModule { }
