import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myDnd',
  templateUrl: './myDnd.component.html',
  styleUrls: ['./myDnd.component.css']
})
export class MyDndComponent implements OnInit {
  sourceBuilderTools = [
    { name: 'Section', children: [], inputType: 'section', icon: 'section', class: 'wide' },
    { name: 'A String', inputType: 'string', icon: 'field-text', class: 'half' },
    { name: 'A Number', inputType: 'number', icon: 'field-numeric', class: 'half' }
  ];
  targetBuilderTools: any[] = [];
  builderDrag(e: any) {
    const item = e.value;
    item.data = item.inputType === 'number' ?
      (Math.random() * 100) | 0 :
      Math.random().toString(36).substring(20);
  }
  droppableItemClass = (item: any) => `${item.class} ${item.inputType}`;
  log(e: any) {
    console.log(e.type, e);
  }
  constructor() { }

  ngOnInit() {
  }

}
