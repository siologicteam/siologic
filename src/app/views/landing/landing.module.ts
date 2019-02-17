import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { ProjectComponent } from './project/project.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [LandingComponent, ProjectComponent, TeamComponent],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
