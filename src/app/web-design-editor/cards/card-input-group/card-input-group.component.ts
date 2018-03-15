import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  EditorStoreService
} from '../../services/editor-store.service';

@Component({
  selector: 'app-card-input-group',
  templateUrl: './card-input-group.component.html',
  styleUrls: ['./card-input-group.component.css']
})
export class CardInputGroupComponent implements OnInit {

  /**
   * 卡片参数
   */

  @Input() model: any; // 卡片数据（必加）

  constructor(public editorService: EditorStoreService) {}

  ngOnInit() {}

}
