import { Component, OnInit, Input } from '@angular/core';
import { EditorStoreService } from '../../services/editor-store.service';

@Component({
  selector: 'app-card-error',
  templateUrl: './card-error.component.html',
  styleUrls: ['./card-error.component.css']
})
export class CardErrorComponent implements OnInit {

  /**
   * 卡片参数
   */

  @Input() model: any; // 卡片数据（必加）

  constructor(public editorService: EditorStoreService) { }

  ngOnInit() {
  }

}
