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
  // 列表：可选卡片源
  @Input()
  sourceModel;

  @Input()
  targetModel;

  // 集合：目标容器
  @Input()
  dropZones = ['web-design-target'];
  // 区域：展示容器
  @Input()
  dropZone = 'web-design-target';

  constructor() {}

  ngOnInit() {}

}
