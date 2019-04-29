import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SuperAdminComponent } from './super-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminsComponent } from './admins/admins.component';
import { ClientsComponent } from './clients/clients.component';
import { ManagersComponent } from './managers/managers.component';
import { DevelopersComponent } from './developers/developers.component';

@NgModule({
  declarations: [
    SuperAdminComponent,
    DashboardComponent,
    AdminsComponent,
    ClientsComponent,
    ManagersComponent,
    DevelopersComponent
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    SharedModule
  ]
})
export class SuperAdminModule { }
