import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-api-picker',
  templateUrl: './api-picker.component.html',
  styleUrls: ['./api-picker.component.css']
})
export class ApiPickerComponent implements OnInit {
  @Input() model = [];

  constructor() { }

  ngOnInit() {
  }

}
