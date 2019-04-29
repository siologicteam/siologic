import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevelopComponent } from './develop.component';
import { DevelopDashboardComponent } from './develop-dashboard/develop-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'developer', pathMatch: 'full' },
  { path: 'developer', component: DevelopComponent, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DevelopDashboardComponent },
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DevelopRoutingModule { }
