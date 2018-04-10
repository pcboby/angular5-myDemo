import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-api-picker',
  templateUrl: './select-api-picker.component.html',
  styleUrls: ['./select-api-picker.component.scss']
})
export class SelectApiPickerComponent implements OnInit {

  @Input() model = '';

  constructor() { }

  ngOnInit() {
  }

}
