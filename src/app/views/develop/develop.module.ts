import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopRoutingModule } from './develop-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DevelopRoutingModule,
    SharedModule
  ]
})
export class DevelopModule { }
