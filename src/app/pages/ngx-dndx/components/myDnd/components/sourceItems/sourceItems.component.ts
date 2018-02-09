import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-sourceItems',
  templateUrl: './sourceItems.component.html',
  styleUrls: ['./sourceItems.component.css']
})
export class SourceItemsComponent implements OnInit {
  sourceBuilder = [
    { name: 'Section', children: [], inputType: 'section', icon: 'section', class: 'wide' },
    { name: 'A String', inputType: 'string', icon: 'field-text', class: 'half' },
    { name: 'A Number', inputType: 'number', icon: 'field-numeric', class: 'half' }
  ];
  builderDrag(e: any) {
    const item = e.value;
    item.data = item.inputType === 'number' ?
      (Math.random() * 100) | 0 :
      Math.random().toString(36).substring(20);
  }
  droppableItemClass = (item: any) => `${item.class} ${item.inputType}`;
  constructor() {}

  ngOnInit() {}

}
