import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UniversalValidators, CreditCardValidators, EmailValidators, PasswordValidators, PhoneValidators } from 'ngx-validators';
import { min } from 'rxjs/operator/min';
import { max } from 'rxjs/operator/max';
import { isNumber } from 'util';

@Component({
  selector: 'app-reactive-validator',
  templateUrl: './reactive-validator.component.html',
  styleUrls: ['./reactive-validator.component.css']
})
export class ReactiveValidatorComponent implements OnInit {

  form: FormGroup;
  noWhitespace: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.noWhitespace
  ]));

  noEmptyString: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.noEmptyString
  ]));

  min: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.min(5)
  ]));

  max: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.max(10)
  ]));

  isNumber: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.isNumber
  ]));

  isInRange: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.isInRange(3, 6)
  ]));

  maxLength: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.maxLength(5)
  ]));

  minLength: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.minLength(3)
  ]));

  creditcard: FormControl = new FormControl('', Validators.compose([CreditCardValidators.isCreditCard]));

  email: FormControl = new FormControl('', Validators.compose([EmailValidators.normal]));

  password: FormControl = new FormControl('', Validators.compose([
    // Validators.required,
    PasswordValidators.repeatCharacterRegexRule(4),
    PasswordValidators.alphabeticalCharacterRule(1),
    PasswordValidators.digitCharacterRule(1),
    PasswordValidators.lowercaseCharacterRule(1),
    PasswordValidators.uppercaseCharacterRule(1),
    PasswordValidators.specialCharacterRule(1)
  ]));
  confirmPassword: FormControl = new FormControl('');

  countryCode: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    PhoneValidators.isValidRegionCode
  ]));
  possiblePhone: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    PhoneValidators.isPossibleNumberWithReason('ZZ')
  ]));
  phone: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    PhoneValidators.isPhoneNumber('ZZ')
  ]));

  constructor(protected _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      'noWhitespace': this.noWhitespace,
      'noEmptyString': this.noEmptyString,
      'min': this.min,
      'max': this.max,
      'isNumber': this.isNumber,
      'isInRange': this.isInRange,
      'maxLength': this.maxLength,
      'minLength': this.minLength,
      'creditcard': this.creditcard,
      'email': this.email,
      'newPassword': this.password,
      'confirmPassword': this.confirmPassword,
      'possiblePhone': this.possiblePhone,
      'phone': this.phone,
      'countryCode': this.countryCode
    });
    this.form.setValidators(PasswordValidators.mismatchedPasswords()); 
    this.countryCode.valueChanges.subscribe(data => {
      this.phone.setValidators(
        Validators.compose([
          Validators.required,
          PhoneValidators.isPhoneNumber(data)
        ])
      );
      this.possiblePhone.setValidators(
        Validators.compose([
          Validators.required,
          PhoneValidators.isPossibleNumberWithReason(data)
        ])
      );
      this.phone.updateValueAndValidity();
    });
  }
  getHintClass(formName: string, errorId: string): string {
    if (this.form.controls[formName].hasError('required')) {
      return 'text-grey';
    } else if (this.form.controls[formName].hasError(errorId)) {
      return 'text-error';
    } else if (!this.form.controls[formName].hasError(errorId)) {
      return 'text-success';
    }

  }

}
