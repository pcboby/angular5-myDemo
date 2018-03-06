import {
  EditorStoreService
} from './services/editor-store.service';
import {
  DrakeStoreService
} from './services';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-web-design-editor',
  templateUrl: './web-design-editor.component.html',
  styleUrls: ['./web-design-editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WebDesignEditorComponent implements OnInit {

  /**
   * 默认参数
   * @memberof WebDesignEditorComponent
   */




  /**
   * 接收/返回
   * @memberof WebDesignEditorComponent
   */
  @Input()
  sourceModel:any;

  @Input()
  targetModel:any;

  // 集合：目标容器
  @Input()
  dropZones = ['web-design-target'];
  // 区域：展示容器
  @Input()
  dropZone = 'web-design-target';



  get selectModel() {
    return this.drakeService.selectModel();
  }

  constructor(public editorService: EditorStoreService, public drakeService: DrakeStoreService) {}

  ngOnInit() {}

}
