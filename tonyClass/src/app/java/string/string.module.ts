import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockAndFormattingComponent } from './block-and-formatting/block-and-formatting.component';
import { StringComponent } from './string.component';
import { RouterModule } from '@angular/router';
import { AllAboutStringComponent } from './all-about-string/all-about-string.component';
import { StringManipulationMethodsComponent } from './string-manipulation-methods/string-manipulation-methods.component';

const JAVA_STRING_ROUTER = [
  {path: "", component: StringComponent},
  {path: "block-and-formatting", component: BlockAndFormattingComponent},
  {path: "all-about-the-string", component: AllAboutStringComponent},
  {path: "string-manipulation-methods", component: StringManipulationMethodsComponent},

];

@NgModule({
  declarations: [
    BlockAndFormattingComponent,
    StringComponent,
    AllAboutStringComponent,
    StringManipulationMethodsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(JAVA_STRING_ROUTER)
  ]
})
export class StringModule { }
