import {
  EditorStoreService
} from '../../services/editor-store.service';
import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-layout-target',
  templateUrl: './layout-target.component.html',
  styleUrls: ['./layout-target.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutTargetComponent implements OnInit {

  /**
   * 接收/返回
   * @memberof LayoutTargetComponent
   */
  @Input()
  isEdit = false;
  @Input()
  showLabel = true;
  @Input()
  model;
  @Input()
  dropZone;

  /**
   * Creates an instance of LayoutTargetComponent.
   * @memberof LayoutTargetComponent
   */
  constructor(public editorService: EditorStoreService) {}

  ngOnInit() {}

  droppableItemClass = (item: any) => `${item.class}`; //  ${item.type}


}
