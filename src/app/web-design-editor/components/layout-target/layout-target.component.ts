import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-layout-target',
  templateUrl: './layout-target.component.html',
  styleUrls: ['./layout-target.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutTargetComponent implements OnInit {

  @Input()
  model;

  @Input()
  dropZone;

  droppableItemClass = (item: any) => `${item.class} ${item.inputType}`;
  log(e: any) {
    console.log(e.type, e);
  }
  constructor() {}

  ngOnInit() {}

}
