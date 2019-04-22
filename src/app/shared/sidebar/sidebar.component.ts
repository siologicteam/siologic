import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';

// declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/super-admin/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/super-admin/user-profile', title: 'User Profile',  icon: 'person', class: '' },
  { path: '/super-admin/table-list', title: 'Table List',  icon: 'content_paste', class: '' },
  { path: '/super-admin/super-admin/typography', title: 'Typography',  icon: 'library_books', class: '' },
  { path: '/super-admin/icons', title: 'Icons',  icon: 'bubble_chart', class: '' },
  { path: '/super-admin/maps', title: 'Maps',  icon: 'location_on', class: '' },
  { path: '/super-admin/notifications', title: 'Notifications',  icon: 'notifications', class: '' },
  { path: '/super-admin/upgrade', title: 'Upgrade to PRO',  icon: 'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  constructor() { }

  ngOnInit() {

  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

}
