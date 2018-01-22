import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-universal-validator',
  templateUrl: './universal-validator.component.html',
  styleUrls: ['./universal-validator.component.css']
})
export class UniversalValidatorComponent implements OnInit {

  model: any = {
    whitespace: '',
    emptyString: '',
    isNumber: '',
    range: '',
    min: '',
    max: '',
    phone: '',
    phone2: '',
    countryCode: '',
    card: '',
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
