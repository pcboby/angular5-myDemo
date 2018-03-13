import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layout-cascade',
  templateUrl: './layout-cascade.component.html',
  styleUrls: ['./layout-cascade.component.scss']
})
export class LayoutCascadeComponent implements OnInit {

  @Input() model = [];

  constructor() { }

  ngOnInit() {
  }

}
