export interface ISidebarInterface {
  url: string;
  title: string;
  icon: string;
}

export class SidebarClass implements ISidebarInterface {
  public url: string;
  public title: string;
  public icon: string;
  constructor(data?: ISidebarInterface) {
    this.url = data.hasOwnProperty('url') ? data.url : '';
    this.title = data.hasOwnProperty('title') ? data.title : '';
    this.icon = data.hasOwnProperty('icon') ? data.icon : '';
  }
}
