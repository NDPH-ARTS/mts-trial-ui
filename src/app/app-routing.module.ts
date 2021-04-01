import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignedSitesPageComponent } from './assigned-sites-page/assigned-sites-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {
  AuthGuardService as AuthGuard
} from './services/auth-guard.service';
import {VersionsViewComponent} from "./components/versions-view/versions-view.component";

const routes: Routes = [
  { path: 'landing', component: LandingPageComponent },
  { path: 'assigned-sites', component: AssignedSitesPageComponent, canActivate: [AuthGuard] },
  { path: 'versions', component: VersionsViewComponent },
  { path: '**', redirectTo: 'landing'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
