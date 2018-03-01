import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  Output,
  EventEmitter
} from '@angular/core';
@Component({
  selector: 'app-layout-source',
  templateUrl: './layout-source.component.html',
  styleUrls: ['./layout-source.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutSourceComponent implements OnInit {

@Input()
isEdit = true;

  @Input()
  model;

  @Input()
  dropZones;


  @Output()
  drag: EventEmitter < any > = new EventEmitter < any > ();

  // builderDrag(e: any) {
  //   const item = e.value;
  //   item.data = item.code === 'number' ? (Math.random() * 100) | 0 : Math.random().toString(36).substring(20);
  // }
  droppableItemClass = (item: any) => `${item.class}`;
  constructor() {}

  ngOnInit() {}

}
