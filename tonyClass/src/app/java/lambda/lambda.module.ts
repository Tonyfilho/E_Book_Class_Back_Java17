import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LambdaComponent } from './lambda.component';
import { IntroductionLambdaComponent } from './introduction-lambda/introduction-lambda.component';
import { RouterModule } from '@angular/router';
import { LambdaSintaxComponent } from './lambda-sintax/lambda-sintax.component';
import { FunctionInterfacesConsulmerAndPredicateComponent } from './function-interfaces-consulmer-and-predicate/function-interfaces-consulmer-and-predicate.component';
import { FunctionInterfacesFunctionAndSupplierComponent } from './function-interfaces-function-and-supplier/function-interfaces-function-and-supplier.component';

const JAVA_LAMBDA = [
  {path: "", component: LambdaComponent},
  {path: "introduction", component: IntroductionLambdaComponent},
  {path: "lambda-sintax", component: LambdaSintaxComponent},
  {path: "lambda-func-interface-consulmer-predicate", component: FunctionInterfacesConsulmerAndPredicateComponent},


];


@NgModule({
  declarations: [
    LambdaComponent,
    IntroductionLambdaComponent,
    LambdaSintaxComponent,
    FunctionInterfacesConsulmerAndPredicateComponent,
    FunctionInterfacesFunctionAndSupplierComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(JAVA_LAMBDA)
  ]
})
export class LambdaModule { }
