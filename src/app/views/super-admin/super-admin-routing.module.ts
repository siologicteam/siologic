import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminComponent } from './super-admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'super-admin', pathMatch: 'full' },
  { path: 'super-admin', component: SuperAdminComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: SuperAdminComponent },
      { path: 'user-profile', component: SuperAdminComponent },
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
export class SuperAdminRoutingModule { }
