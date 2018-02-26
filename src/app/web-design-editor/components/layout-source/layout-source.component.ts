import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-layout-source',
  templateUrl: './layout-source.component.html',
  styleUrls: ['./layout-source.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutSourceComponent implements OnInit {

  @Input()
  model;

  @Input()
  dropZones;

  builderDrag(e: any) {
    const item = e.value;
    item.data = item.inputType === 'number' ? (Math.random() * 100) | 0 : Math.random().toString(36).substring(20);
  }
  droppableItemClass = (item: any) => `${item.class} ${item.inputType}`;
  constructor() {}

  ngOnInit() {}

}
