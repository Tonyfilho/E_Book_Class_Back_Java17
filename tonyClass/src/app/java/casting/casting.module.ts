import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastingComponent } from './casting.component';
import { TestingRuntimeComponent } from './testing-runtime/testing-runtime.component';
import { CastingWithClassComponent } from './casting-with-class/casting-with-class.component';
import { RouterModule } from '@angular/router';


const JAVA_ROUTER_CASTING = [
  {path: "", component: CastingComponent}, 
  {path: "testing-runtime", component: TestingRuntimeComponent},
  {path: "casting-class", component: CastingWithClassComponent},
 
];


@NgModule({
  declarations: [
    CastingComponent, 
    TestingRuntimeComponent,
    CastingWithClassComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(JAVA_ROUTER_CASTING),
  ]
})
export class CastingModule { }
