import {
  EditorStoreService
} from './services/editor-store.service';
import {
  DrakeStoreService
} from './services';
import {
  AllSystemCards
} from './cards/cards';
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
  sourceModel: any = [];

  @Input()
  targetModel: any = [];

  @Input()
  set serviceApi(val){
    this.editorService.serviceApi = val;
  }
  get serviceApi() {
    return this.editorService.serviceApi;
  }

  // 集合：目标容器
  @Input()
  dropZones = ['web-design-target'];
  // 区域：展示容器
  @Input()
  dropZone = 'web-design-target';

  get selectModel() {
    return this.drakeService.getSelectModel();
  }

  get casCadeModel() {
    return this.drakeService.getSelectCascade();
  }



  constructor(public editorService: EditorStoreService, public drakeService: DrakeStoreService) {}


  ngOnInit() {
    this.sourceModel = [...AllSystemCards, ...this.sourceModel];
  }

}
