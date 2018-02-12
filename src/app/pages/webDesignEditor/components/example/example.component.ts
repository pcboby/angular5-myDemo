import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  targetBuilder: any[] = [{ name: 'Section', children: [], inputType: 'section', icon: 'section', class: 'wide' }];

  constructor() { }

  ngOnInit() {
  }

}
