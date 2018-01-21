import { LookupPowers } from './../../../../../api/lookup-powers';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name.directive';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  powers = LookupPowers;

  hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };

  heroForm: FormGroup;

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      alterEgo: new FormControl(this.hero.alterEgo),
      power: new FormControl(this.hero.power, Validators.required)
    });
  }

  get name() {
    return this.heroForm.get('name');
  }

  get power() {
    return this.heroForm.get('power');
  }
}
