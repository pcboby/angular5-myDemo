import {
  Directive,
  Input,
  Output,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  EventEmitter,
  Renderer2
} from '@angular/core';

import {
  DrakeStoreService
} from '../services/drake-store.service';

// 初始化时，记录载入的容器ID序号
let i = 10000;

function getNextId() {
  return i++;
}

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective implements OnInit, OnDestroy, AfterViewInit {
  /**
   * 默认参数
   * @memberof DroppableDirective
   */
  defaultZone: string;
  _dropZone: string;
  /**
   * 接收/返回
   * @memberof DroppableDirective
   */
  // 数据
  @Input() model: any;
  // 复制模式
  @Input() copy = false;
  // 是否能移动
  @Input() removeOnSpill = false;
  // 容器名称
  @Input() appDroppable: string;
  // 置入时回调
  @Output()
  drop: EventEmitter < any > = new EventEmitter < any > ();
  // 移动时回调
  @Output()
  drag: EventEmitter < any > = new EventEmitter < any > ();
  // 经过时回调
  @Output()
  over: EventEmitter < any > = new EventEmitter < any > ();
  // 移出容器时回调
  @Output()
  out: EventEmitter < any > = new EventEmitter < any > ();
  // 移除时回调
  @Output()
  remove: EventEmitter < any > = new EventEmitter < any > ();
  // 取消时回调（移动后无变化）
  @Output()
  cancel: EventEmitter < any > = new EventEmitter < any > ();

  // 设置/获取容器
  @Input()
  get dropZone(): string {
    return this._dropZone || this.appDroppable || this.defaultZone;
  }
  set dropZone(val: string) {
    this._dropZone = val;
  }
  // 获取容器对像
  get container(): any {
    return this.el.nativeElement;
  }

  /**
   * Creates an instance of DroppableDirective.
   * @param {ElementRef} el
   * @param {Renderer2} renderer
   * @param {DrakeStoreService} drakesService
   * @memberof DroppableDirective
   */
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private drakesService: DrakeStoreService
  ) {}

  ngOnInit(): void {
    this.defaultZone = `@@DefaultDropZone-${getNextId()}@@`;
    this.drakesService.registerDroppable(this);
  }

  ngAfterViewInit(): void {
    this.drop.subscribe(() => {
      // console.log('@@@@@@@@@@droppableDrop', this);
    });
    this.drag.subscribe(() => {
      // console.log('@@@@@@@@@@droppableDrag', this);
    });
    this.cancel.subscribe(() => {
      // console.log('@@@@@@@@@@droppableCancel', this);
    });
    this.remove.subscribe(() => {
      // console.log('@@@@@@@@@@droppableRemove', this);
    });
    this.over.subscribe(() => {
      // console.log('@@@@@@@@@@droppableOver', this);
      this.renderer.addClass(this.container, 'gu-over');
    });
    this.out.subscribe(() => {
      // console.log('@@@@@@@@@@droppableOut', this);
      this.renderer.removeClass(this.container, 'gu-over');
    });
  }

  ngOnDestroy(): void {
    this.drakesService.removeDroppable(this);
  }
}
