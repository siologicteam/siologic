import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckAuthGuard implements CanActivate {

  constructor(
    private _router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const role = localStorage.getItem('role');
    if (role === 'SUPER_ADMIN') {
      this._router.navigate(['/super-admin']);
    } else if (role === 'ADMIN') {
      this._router.navigate(['/admin']);
    } else if (role === 'CLIENT') {
      this._router.navigate(['/client']);
    } else if (role === 'MANAGER') {
      this._router.navigate(['/manager']);
    } else if (role === 'DEVELOP') {
      this._router.navigate(['/develop']);
    }
    return true;
  }
}
