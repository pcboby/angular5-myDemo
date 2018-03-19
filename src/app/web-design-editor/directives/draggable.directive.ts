import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  OnInit
} from '@angular/core';

import {
  DroppableDirective
} from './droppable.directive';
import {
  DrakeStoreService
} from '../services/drake-store.service';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective implements OnInit, OnDestroy {
  /**
   * 默认参数
   * @memberof DraggableDirective
   */
  handles: any[] = [];
  dragDelay = 200; // milliseconds
  dragDelayed = true;
  touchTimeout: any;
  _moves: any;
  _isEdit = true;
  _dropZones: string[];
  _parentDropzones: string[];
  /**
   * 接收/返回
   * @memberof DraggableDirective
   */
  // 移动的卡片名称
  @Input() appDraggable: string[];
  // 卡片数据
  @Input() model: any;
  // 设置/获取容器
  @Input()
  get dropZones(): any {
    return this._dropZones || this.appDraggable || this._parentDropzones;
  }
  set dropZones(val: any) {
    this._dropZones = val;
  }
  // 是否可移动
  @Input()
  get moves(): boolean {
    return this._moves;
  }
  set moves(val: boolean) {
    this._moves = val;
  }
  // 是否可编辑
  @Input()
  get isEdit(): boolean {
    return this._isEdit;
  }
  set isEdit(val: boolean) {
    this._isEdit = val;
  }
  @Output()
  drag: EventEmitter < any > = new EventEmitter < any > ();


  // 是否有独立的拖动区
  get hasHandle() {
    return !!this.handles.length;
  }
  // 是否被选中
  get isSelected() {
    return this.drakesService.changeSelect(this);
  }

  // 返回卡对像
  get element(): any {
    return this.el.nativeElement;
  }

  // 帧听移动
  @HostListener('touchmove', ['$event'])
  onMove(e: Event) {
    if (!this._moves || this.dragDelayed) {
      e.stopPropagation();
      clearTimeout(this.touchTimeout);
    }
  }
  // 帧听按下并拖动
  @HostListener('touchstart', ['$event'])
  onDown() {
    if (this._moves) {
      this.touchTimeout = setTimeout(() => {
        this.dragDelayed = false;
      }, this.dragDelay);
    }
  }
  // 帧听松开
  @HostListener('touchend', ['$event'])
  onUp() {
    if (this._moves) {
      clearTimeout( < number > this.touchTimeout);
      this.dragDelayed = true;
    }
  }
  // 帧听点击
  @HostListener('click', ['$event'])
  onClick(e: Event) {
    console.log('click elmt',e);
    e.stopPropagation();
    if (this._isEdit && !this.drakesService.changeSelect(this)) {
      console.log('do click')
      this.drakesService.registerSelect(this);
    }
  }

  /**
   * Creates an instance of DraggableDirective.
   * @param {ElementRef} el
   * @param {DrakeStoreService} drakesService
   * @param {DroppableDirective} droppableDirective
   * @memberof DraggableDirective
   */
  constructor(
    private el: ElementRef,
    private drakesService: DrakeStoreService,
    private droppableDirective: DroppableDirective,
  ) {}


  ngOnInit(): void {
    this.update();
  }

  update(): void {
    this._parentDropzones = [this.droppableDirective.dropZone];
    this.drakesService.registerDraggable(this);
    this.updateElements();
  }


  updateElements(): void {
    const nativeElement = this.el.nativeElement;
    const handles: NodeList = nativeElement.querySelectorAll('[appDragHandle]');
    this.handles = Array.from(handles).filter((h: any) => findFirstDraggableParent(h) === nativeElement);

    function findFirstDraggableParent(c: any) {
      while (c.parentNode) {
        c = c.parentNode;
        if (c.hasAttribute && c.hasAttribute('appdraggable')) {
          return c;
        }
      }
    }
  }

  canMove(source ?: any, handle ?: any, sibling ?: any): boolean {
    if (typeof this._moves === 'boolean') {
      return this._moves;
    }
    if (typeof this._moves === 'function') {
      return this._moves(this.model, source, handle, sibling);
    }
    return true;
  }

  moving(source: any, handle: any, sibling: any): boolean {
    if (!this.canMove(source, handle, sibling)) {
      return false;
    }

    return this.hasHandle ?
      this.handles.some(h => handelFor(handle, h)) :
      true;

    function handelFor(c: any, p: any) {
      if (c === p) {
        return true;
      }
      while ((c = c.parentNode) && c !== p); // tslint:disable-line
      return !!c;
    }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck(): void {
    // console.log('&&&&ngDoCheck')
    this.updateElements();
  }
  ngOnDestroy(): void {
    this.drakesService.removeDraggable(this);
  }
}
