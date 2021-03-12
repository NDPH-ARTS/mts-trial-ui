import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignedSitesPageComponent } from './assigned-sites-page/assigned-sites-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {
  AuthGuardService as AuthGuard
} from './services/auth-guard.service';

const routes: Routes = [
  { path: 'landing', component: LandingPageComponent },
  { path: 'assigned-sites', component: AssignedSitesPageComponent, canActivate: [AuthGuard] },  
  { path: '**', redirectTo: 'landing'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
