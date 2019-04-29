import { Component, OnInit } from '@angular/core';
import { RouteInfo } from '../../interfaces/sidebar.interface';
import { SidebarService } from '../../services/sidebar.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public routesData: RouteInfo[];

  constructor(
    private _sidebarService: SidebarService
  ) { }

  ngOnInit() {
    const role = localStorage.getItem('role');
    if (role === 'SUPER_ADMIN') {
      this.routesData = this._sidebarService.sidebarSuperAdmin;
    } else if (role === 'ADMIN') {
      this.routesData = this._sidebarService.sidebarAdmin;
    } else if (role === 'CLIENT') {
      this.routesData = this._sidebarService.sidebarClient;
    } else if (role === 'MANAGER') {
      this.routesData = this._sidebarService.sidebarManager;
    } else if (role === 'DEVELOPER') {
      this.routesData = this._sidebarService.sidebarDevelop;
    }
  }
}
