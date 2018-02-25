import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layout-code',
  templateUrl: './layout-code.component.html',
  styleUrls: ['./layout-code.component.css']
})
export class LayoutCodeComponent implements OnInit {

  @Input()
  $targetBuilder;

  constructor() { }

  ngOnInit() {
  }

}
