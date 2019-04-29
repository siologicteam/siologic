import { Injectable } from '@angular/core';
import { RouteInfo } from '../interfaces/sidebar.interface';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public sidebarSuperAdmin: RouteInfo[] = [
    { path: '/super-admin/dashboard', title: 'Dashboard',  icon: 'dashboard', className: '' },
    { path: '/super-admin/admins', title: 'Admins',  icon: 'people', className: '' },
    { path: '/super-admin/clients', title: 'Clients',  icon: 'people', className: '' },
    { path: '/super-admin/managers', title: 'Managers',  icon: 'people', className: '' },
    { path: '/super-admin/developers', title: 'Developers',  icon: 'people', className: '' },
  ];

  public sidebarAdmin: RouteInfo[] = [
    { path: '/admin/dashboard', title: 'Dashboard',  icon: 'dashboard', className: '' },
  ];

  public sidebarClient: RouteInfo[] = [
    { path: '/client/dashboard', title: 'Dashboard',  icon: 'dashboard', className: '' },
  ];

  public sidebarManager: RouteInfo[] = [
    { path: '/manager/dashboard', title: 'Dashboard',  icon: 'dashboard', className: '' },
  ];

  public sidebarDevelop: RouteInfo[] = [
    { path: '/developer/dashboard', title: 'Dashboard',  icon: 'dashboard', className: '' },
  ];

  constructor() { }
}
