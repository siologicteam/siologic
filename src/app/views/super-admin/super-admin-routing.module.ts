import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminComponent } from './super-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminsComponent } from './admins/admins.component';
import { ClientsComponent } from './clients/clients.component';
import { ManagersComponent } from './managers/managers.component';
import { DevelopersComponent } from './developers/developers.component';

const routes: Routes = [
  { path: '', redirectTo: 'super-admin', pathMatch: 'full' },
  { path: 'super-admin', component: SuperAdminComponent, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'admins', component: AdminsComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'managers', component: ManagersComponent },
    { path: 'developers', component: DevelopersComponent },
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
