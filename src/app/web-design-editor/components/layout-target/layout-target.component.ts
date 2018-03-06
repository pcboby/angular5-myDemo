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
  isEdit = true;
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
  constructor() {}

  ngOnInit() {}

  droppableItemClass = (item: any) => `${item.class}`; //  ${item.type}
  getEditorValueBy(item: any, str: string) {
    if (item.editors) {
      for (let i = 0; i < item.editors.length; i++) {
        const e = item.editors[i];
        if (e.key === str) {
          if (e.value) {
            return e.value;
          }
          continue;
        }
      }
    }
    return item[str] || '{' + str + '}';
  }
  log(e: any) {
    console.log(e.type, e);
  }

}
