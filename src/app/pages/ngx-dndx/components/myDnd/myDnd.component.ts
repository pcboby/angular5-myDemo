import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-myDnd',
  templateUrl: './myDnd.component.html',
  styleUrls: ['./myDnd.component.css']
})
export class MyDndComponent implements OnInit {

  targetBuilder: any[] = [{ name: 'Section', children: [], inputType: 'section', icon: 'section', class: 'wide' }];
  constructor() {}

  ngOnInit() {}

}
