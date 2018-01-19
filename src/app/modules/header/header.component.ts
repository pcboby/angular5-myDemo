import { Component, OnInit } from '@angular/core';

const navDatas = [{
  title: 'Home',
  routerLink: '/dashboard'
}, {
  title: 'Bootstrap',
  routerLink: '/bootstrap'
}, {
  title: 'NgBootstrap',
  routerLink: '/ngBootstrap'
}, {
  title: 'NgxBootstrap',
  routerLink: '/ngxBootstrap'
}, {
  title: 'NgCharts',
  routerLink: '/ngCharts'
}, {
  title: 'Example',
  routerLink: '/example'
}];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  private navs: Array<any>= navDatas;

  constructor() {
  }

  ngOnInit() {
  }

}
