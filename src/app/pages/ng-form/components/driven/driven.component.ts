import { LookupPowers } from './../../../../../api/lookup-powers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driven',
  templateUrl: './driven.component.html',
  styleUrls: ['./driven.component.css']
})
export class DrivenComponent implements OnInit {
  powers = LookupPowers;
  hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };

  constructor() {}

  ngOnInit() {}
}
