import { Component, OnInit } from '@angular/core';
import { NavData } from '../../../api/nav-data';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  private navs: Array<any>= NavData;

  constructor() {
  }

  ngOnInit() {
  }

}
