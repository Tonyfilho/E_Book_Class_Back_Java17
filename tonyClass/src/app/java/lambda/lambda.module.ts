import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LambdaComponent } from './lambda.component';
import { IntroductionLambdaComponent } from './introduction-lambda/introduction-lambda.component';
import { RouterModule } from '@angular/router';

const JAVA_LAMBDA = [
  {path: "", component: LambdaComponent},
  {path: "introduction", component: IntroductionLambdaComponent},
  

];


@NgModule({
  declarations: [
    LambdaComponent,
    IntroductionLambdaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(JAVA_LAMBDA)
  ]
})
export class LambdaModule { }
