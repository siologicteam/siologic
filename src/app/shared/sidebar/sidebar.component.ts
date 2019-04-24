import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/super-admin/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/super-admin/profile', title: 'User Profile',  icon: 'person', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public routesData = ROUTES;

  constructor() { }

  ngOnInit() {

  }
}
