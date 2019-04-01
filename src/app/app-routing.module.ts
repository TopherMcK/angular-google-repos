import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: '', redirectTo: '/welcome', pathMatch: 'full'},
    {path: 'welcome', component: LandingComponent, data: {
        page: 'welcome'
    }},
    {path: 'home', component: HomeComponent, data: {
        page: 'home'
    }},
    {path: '**', redirectTo: '/welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
