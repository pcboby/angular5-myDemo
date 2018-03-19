import {
  Component,
  OnInit,
  Input,
  ContentChild,
  TemplateRef
} from '@angular/core';
import {
  EditorStoreService
} from '../../services/editor-store.service';

@Component({
  selector: 'app-container-columns',
  templateUrl: './container-columns.component.html',
  styleUrls: ['./container-columns.component.scss']
})
export class ContainerColumnsComponent implements OnInit {

  /**
   * 卡片参数
   */

  @Input() model: any; // 卡片数据（必加）
  @Input() isEdit = true;
  @Input() showLabel = true;

  /**
   * 容器参数（含子容器是必加）
   */

  @Input() dropZone; // 容器名称
  @Input() template: TemplateRef < any > ; // 模板引入

  constructor(public editorService: EditorStoreService) {}

  ngOnInit() {}

}
