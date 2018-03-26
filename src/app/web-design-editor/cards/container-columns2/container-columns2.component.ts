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
  selector: 'app-container-columns2',
  templateUrl: './container-columns2.component.html',
  styleUrls: ['./container-columns2.component.scss']
})
export class ContainerColumns2Component implements OnInit {

  /**
   * 卡片参数
   */

  @Input() model: any; // 卡片数据（必加）
  @Input() isEdit = true;
  @Input() showLabel = true;
  @Input()
  set colNumber(val: number) {
    this.setRows(val);
    // this.model.editors.col_number = val;
  }

  /**
   * 容器参数（含子容器是必加）
   */

  @Input() dropZone; // 容器名称
  @Input() template: TemplateRef<any>; // 模板引入



  /**
   *
   */
  get rowStyles(): string {
    const gutter = -this.editorService.getEditorValueBy(this.model, 'row_gutter') / 2;
    const styles = 'margin-left:' + gutter + 'px; margin-right: ' + gutter + 'px;';
    return styles + this.editorService.getEditorValueBy(this.model, 'row_style');
  }
  get colStyles(): string {
    const gutter = this.editorService.getEditorValueBy(this.model, 'row_gutter') / 2;
    return 'padding-left:' + gutter + 'px; padding-right: ' + gutter + 'px;';
  }
  constructor(public editorService: EditorStoreService) { }

  ngOnInit() { }

  setRows(v: number) {
    const n = this.model.contents.length;
    if (n < v) {
      for (let i = 0; i < v - n; i++) {
        this.model.contents.push([]);
      }
    } else {
      for (let i = n; i > v; i--) {
        this.model.contents.splice(i - 1, 1);
      }
    }

  }
}
