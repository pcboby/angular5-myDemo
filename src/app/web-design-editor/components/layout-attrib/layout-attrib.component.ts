import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-layout-attrib',
  templateUrl: './layout-attrib.component.html',
  styleUrls: ['./layout-attrib.component.scss']
})
export class LayoutAttribComponent implements OnInit {

  @Input()
  model: any;

  constructor() {}

  ngOnInit() {}

}
