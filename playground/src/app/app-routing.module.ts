import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KonzolaComponent } from './konzola/konzola.component';
import { KonzolaStartComponent } from './konzola/konzola-start/konzola-start.component';
import { KonzolaDetaljiComponent } from './konzola/konzola-detalji/konzola-detalji.component';
import { KonzolaIzmenaComponent } from './konzola/konzola-izmena/konzola-izmena.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';
import { RezervacijeComponent } from './rezervacije/rezervacije.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/konzole', pathMatch: 'full' },
  { path: 'konzole', component: KonzolaComponent, children: [
    { path: '', component: KonzolaStartComponent },
    { path: 'new', component: KonzolaIzmenaComponent, canActivate: [AuthGuard] },
    { path: ':id', component: KonzolaDetaljiComponent },
    { path: ':id/edit', component: KonzolaIzmenaComponent, canActivate: [AuthGuard] },
  ] },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'rezervacije', component: RezervacijeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
