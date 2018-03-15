import { Component, OnInit, Input } from '@angular/core';
import { EditorStoreService } from '../../services/editor-store.service';

@Component({
  selector: 'app-card-iframe',
  templateUrl: './card-iframe.component.html',
  styleUrls: ['./card-iframe.component.css']
})
export class CardIframeComponent implements OnInit {

  /**
   * 卡片参数
   */

  @Input() model: any; // 卡片数据（必加）

  constructor(public editorService: EditorStoreService) { }

  ngOnInit() {
  }

}
