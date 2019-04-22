import { Injectable } from '@angular/core';
import { ISidebarInterface } from '../interfaces/sidebar.interface';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public sidebarSuperAdmin: ISidebarInterface[] = [
    {
      url: '/super-admin/dashboard',
      title: 'Dashboard',
      icon: ''
    }
  ];

  public sidebarAdmin: ISidebarInterface[] = [
    {
      url: '/admin/dashboard',
      title: 'Dashboard',
      icon: ''
    }
  ];

  public sidebarClient: ISidebarInterface[] = [
    {
      url: '/client/dashboard',
      title: 'Dashboard',
      icon: ''
    }
  ];

  public sidebarManager: ISidebarInterface[] = [
    {
      url: '/manager/dashboard',
      title: 'Dashboard',
      icon: ''
    }
  ];

  public sidebarDevelop: ISidebarInterface[] = [
    {
      url: '/develop/dashboard',
      title: 'Dashboard',
      icon: ''
    }
  ];

  constructor() { }
}
