import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SuperAdminComponent } from './super-admin.component';

@NgModule({
  declarations: [SuperAdminComponent],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    SharedModule
  ]
})
export class SuperAdminModule { }
