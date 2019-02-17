import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', loadChildren: './views/landing/landing.module#LandingModule' },
  { path: '', loadChildren: './views/admin/admin.module#AdminModule' },
  { path: '', loadChildren: './views/user/user.module#UserModule' },
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
