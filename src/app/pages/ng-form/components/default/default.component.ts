import {
  Component,
  OnInit
} from '@angular/core';
import {
  Hero
} from './hero';
import { LookupPowers } from '../../../../../api/lookup-powers';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  powers = LookupPowers;

  model = new Hero( 'Dr IQ', this.powers[0].id, 'Chuck Overstreet');

  onSubmit() {}


  newHero() {
    this.model = new Hero( 'aaaa', this.powers[1].id, 'Chuck Overstreet');
  }


  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] && form.controls['name'].value; // Dr. IQ
  }

  /////////////////////////////

  constructor() {}

  ngOnInit() {}
}
