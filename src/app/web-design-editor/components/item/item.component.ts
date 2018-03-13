import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  HostBinding
} from '@angular/core';

import {
  ContainerComponent
} from '../container/container.component';
import {
  DraggableDirective
} from '../../directives/draggable.directive';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemComponent implements OnInit {

  /**
   * 默认参数
   *
   * @memberof ItemComponent
   */
  _copy = false;
  _dropZone: any;
  _dropZones: any;
  _droppableItemClass: any;
  _removeOnSpill = false;
  data: any;

  /**
   * 接收/返回参数
   *
   * @memberof ItemComponent
   */
  @Input() isEdit = true;
  // 卡标签状态
  @Input() showLabel = true;
  // 卡数据
  @Input() model: any;
  // 目标容器
  @Input()
  get dropZone() {
    return this._dropZone || this.container.dropZone;
  }
  set dropZone(val) {
    this._dropZone = val;
  }
  // 来源容器
  @Input()
  get dropZones() {
    return this._dropZones || this.container.dropZones;
  }
  set dropZones(val) {
    this._dropZones = val;
  }
  // 放置后卡片的样式
  @Input()
  get droppableItemClass() {
    return this._droppableItemClass || this.container.droppableItemClass;
  }
  set droppableItemClass(val) {
    this._droppableItemClass = val;
  }
  // 是否能删除（移除）
  @Input()
  get removeOnSpill() {
    return typeof this._removeOnSpill === 'boolean' ? this._removeOnSpill : this.container.removeOnSpill;
  }
  set removeOnSpill(val) {
    this._removeOnSpill = val;
  }
  // 是否能复制到目标容器
  @Input()
  get copy() {
    return typeof this._copy === 'boolean' ? this._copy : this.container.copy;
  }
  set copy(val) {
    this._copy = val;
  }

  // 梆定样式：根据当前不同的状态梆定样式
  @HostBinding('class')
  get classString() {
    const itemClass = (typeof this.droppableItemClass === 'function') ?
      this.droppableItemClass(this.model) :
      this.droppableItemClass;

    const classes = ['card-item', itemClass || ''];
    if (this.moveDisabled) {
      classes.push('move-disabled');
    }
    if (this.hasHandle) {
      classes.push('has-handle');
    }
    if (this.isSelected) {
      classes.push('gu-selected');
    }
    return classes.join(' ');
  }

  // 有单独的拖动区
  get hasHandle(): boolean {
    return this.draggableDirective.hasHandle;
  }
  // 是否禁止拖动
  get moveDisabled(): boolean {
    return !this.draggableDirective.canMove();
  }
  // 是否为选中
  get isSelected(): boolean {
    return this.draggableDirective.isSelected;
  }
  // 返回数据对像的类型：array表示卡集，object表示单卡
  get type() {
    if (Array.isArray(this.model)) {
      return 'array';
    }
    return typeof this.model;
  }

  // 初始
  constructor(
    public container: ContainerComponent,
    public draggableDirective: DraggableDirective
  ) {}
  // 完成
  ngOnInit() {
    this.data = {
      model: this.model,
      type: this.type,
      dropZone: this.dropZone,
      template: this.container.template
    };
  }
}
