import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-layout-attrib',
  templateUrl: './layout-attrib.component.html',
  styleUrls: ['./layout-attrib.component.scss']
})
export class LayoutAttribComponent implements OnInit, OnChanges {
  _editors = [];
  editors = [];

  @Input() model: any = {};

  constructor() {}

  save(): void {
    this.model.editors = clone(this.editors);
  }
  reset(): void {
    this.editors = clone(this._editors);
    this.model.editors = clone(this._editors);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.editors = clone(this.model.editors);
    this._editors = clone(this.model.editors);
  }


}
function clone(obj) {
  let copy;

  // Handle the 3 simple types, and null or undefined
  if (null == obj || "object" != typeof obj) return obj;

  // Handle Date
  if (obj instanceof Date) {
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  // Handle Array
  if (obj instanceof Array) {
    copy = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = clone(obj[i]);
    }
    return copy;
  }

  // Handle Object
  if (obj instanceof Object) {
    copy = {};
    for (let attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
    }
    return copy;
  }

  throw new Error("Unable to copy obj! Its type isn't supported.");
}