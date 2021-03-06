import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignedSitesPageComponent } from './assigned-sites-page/assigned-sites-page.component';
import { AdminSitesPageComponent } from './admin-sites-page/admin-sites-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {
  AuthGuardService as AuthGuard
} from './services/auth-guard.service';
import {AboutViewComponent} from './components/about-view/about-view.component';


const routes: Routes = [
  { path: 'landing', component: LandingPageComponent },
  { path: 'assigned-sites', component: AssignedSitesPageComponent, canActivate: [AuthGuard] },
  { path: 'admin-sites', component: AdminSitesPageComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutViewComponent },
  { path: '**', redirectTo: 'landing'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
