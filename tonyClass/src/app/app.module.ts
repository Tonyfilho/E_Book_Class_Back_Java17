import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_header/header.component';
import { FooterComponent } from './_footer/footer.component';


import { BodyComponent } from './_body/body.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './_auth/auth-interceptor.service';
import { AuthModule } from './_auth/auth.module';
import { JavaModule } from './java/java.module';
import { InheritanceModule } from './java/inheritance/inheritance.module';
import { StringModule } from './java/string/string.module';
import { OoPPart02Module } from './java/oop-part02/oop-part02.module';
import { CastingModule } from './java/casting/casting.module';
import { ArrayModule } from './java/array/array.module';
import { ArrayListModule } from './java/array-list/array-list.module';
import { ModifiersModule } from './java/modifiers/modifiers.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,




  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    JavaModule,
    InheritanceModule,
    StringModule,
    OoPPart02Module,
    CastingModule,
    ArrayModule,
    ArrayListModule,
    ModifiersModule,





    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  exports: [

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
