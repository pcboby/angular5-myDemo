import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsex',
  templateUrl: './collapsex.component.html',
  styleUrls: ['./collapsex.component.css']
})
export class CollapsexComponent implements OnInit {
  isCollapsed = false;

  collapsed(event: any): void {
    console.log(event);
  }

  expanded(event: any): void {
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
