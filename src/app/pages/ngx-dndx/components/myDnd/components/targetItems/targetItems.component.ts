import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-targetItems',
  templateUrl: './targetItems.component.html',
  styleUrls: ['./targetItems.component.css']
})
export class TargetItemsComponent implements OnInit {

  @Input()
  $targetBuilder;

  targetBuilder: any[] = [];
  droppableItemClass = (item: any) => `${item.class} ${item.inputType}`;
  log(e: any) {
    console.log(e.type, e);
  }
  constructor() {}

  ngOnInit() {
    this.targetBuilder = this.$targetBuilder;
  }

}
