import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-buttonx',
  templateUrl: './buttonx.component.html',
  styleUrls: ['./buttonx.component.css']
})
export class ButtonxComponent implements OnInit {
  singleModel = '1';
  disabled = false;
  checkModel: any = { left: false, middle: true, right: false };
  radioModel = 'Middle';
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      left: false,
      middle: true,
      right: false
    });
  }

}
