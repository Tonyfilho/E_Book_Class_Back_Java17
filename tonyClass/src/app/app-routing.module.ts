import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat'






import { BodyComponent } from './_body/body.component';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './_auth/auth-guard';



const routes: Routes = [
  { path: '', redirectTo: 'body', pathMatch: 'full' },
  { path: 'body', component: BodyComponent },
  { path: 'java', loadChildren: () => import('./java/java.module').then(module => module.JavaModule), canActivate: [AuthGuard]},
   { path: 'java/inheritance', loadChildren: () => import('./java/inheritance/inheritance.module').then(module => module.InheritanceModule), canActivate: [AuthGuard] },
   { path: 'java/string', loadChildren: () => import('./java/string/string.module').then(module => module.StringModule), canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./_auth/auth.module').then(module => module.AuthModule) },
  { path: '**', redirectTo: 'body' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
