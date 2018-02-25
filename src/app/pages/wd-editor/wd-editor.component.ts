import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wd-editor',
  templateUrl: './wd-editor.component.html',
  styleUrls: ['./wd-editor.component.css']
})
export class WdEditorComponent implements OnInit {
  targetBuilder: any[] = [{ name: 'sectionBox', children: [], inputType: 'section', icon: 'fa fa-tag', class: 'wide' }];
  sourceBuilder: any[] = [
    { name: 'sectionBox', children: [], inputType: 'section', icon: 'fa fa-tag', class: 'wide' },
    { name: 'A String', inputType: 'string', icon: 'fa fa-tag', class: 'half' },
    { name: 'A Number', inputType: 'number', icon: 'fa fa-tag', class: 'half' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
