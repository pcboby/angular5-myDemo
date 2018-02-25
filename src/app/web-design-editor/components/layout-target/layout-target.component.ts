import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-layout-target',
  templateUrl: './layout-target.component.html',
  styleUrls: ['./layout-target.component.css']
})
export class LayoutTargetComponent implements OnInit {

  @Input()
  $targetBuilder;

  droppableItemClass = (item: any) => `${item.class} ${item.inputType}`;
  log(e: any) {
    console.log(e.type, e);
  }
  constructor() {}

  ngOnInit() {}

}
