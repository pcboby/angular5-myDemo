import { Component, OnInit } from '@angular/core';

const navDatas = [{
  title: 'Home',
  routerLink: '/dashboard'
}, {
  title: 'Elements',
  routerLink: '/elements'
}, {
  title: 'NgBootstrap',
  routerLink: '/ngBootstrap'
}, {
  title: 'NgxBootstrap',
  routerLink: '/ngxBootstrap'
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
