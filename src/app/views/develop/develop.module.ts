import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopRoutingModule } from './develop-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DevelopComponent } from './develop.component';
import { DevelopDashboardComponent } from './develop-dashboard/develop-dashboard.component';

@NgModule({
  declarations: [DevelopComponent, DevelopDashboardComponent],
  imports: [
    CommonModule,
    DevelopRoutingModule,
    SharedModule
  ]
})
export class DevelopModule { }
