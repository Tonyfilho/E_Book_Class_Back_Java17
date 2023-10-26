import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LambdaComponent } from './lambda.component';
import { IntroductionLambdaComponent } from './introduction-lambda/introduction-lambda.component';
import { RouterModule } from '@angular/router';
import { LambdaSintaxComponent } from './lambda-sintax/lambda-sintax.component';

const JAVA_LAMBDA = [
  {path: "", component: LambdaComponent},
  {path: "introduction", component: IntroductionLambdaComponent},
  {path: "lambda-sintax", component: LambdaSintaxComponent},


];


@NgModule({
  declarations: [
    LambdaComponent,
    IntroductionLambdaComponent,
    LambdaSintaxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(JAVA_LAMBDA)
  ]
})
export class LambdaModule { }
