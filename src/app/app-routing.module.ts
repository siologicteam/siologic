import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', loadChildren: './views/landing/landing.module#LandingModule' },
  { path: '', loadChildren: './views/auth/auth.module#AuthModule' },
  { path: '', loadChildren: './views/super-admin/super-admin.module#SuperAdminModule' },
  { path: '', loadChildren: './views/admin/admin.module#AdminModule' },
  { path: '', loadChildren: './views/client/client.module#ClientModule' },
  { path: '', loadChildren: './views/manager/manager.module#ManagerModule' },
  { path: '', loadChildren: './views/develop/develop.module#DevelopModule' },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
