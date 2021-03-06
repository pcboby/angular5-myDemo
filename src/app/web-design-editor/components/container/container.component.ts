import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  ViewEncapsulation,
  ContentChild,
  TemplateRef,
  ViewChild,
  EventEmitter,
} from '@angular/core';

import {
  DroppableDirective
} from '../../directives/droppable.directive';

let i = 0;

function getNextId() {
  return i++;
}

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContainerComponent implements OnInit, AfterViewInit {
  /**
   * 默认参数
   *
   * @memberof ContainerComponent
   */
  _dropZones: string[];
  _defaultZones: string[];
  /**
   * 接收/返回参数
   *
   * @memberof ContainerComponent
   */
  @Input() model: any;
  @Input() showLabel = true;
  @Input() isEdit = true;
  @Input() copy = false;
  @Input() removeOnSpill = false;
  @Input() droppableItemClass: string | ((o: any) => any);

  @Input() dropZone = `@@DefaultDropZone-${getNextId()}@@`;

  @Input()
  get dropZones() {
    return this._dropZones || this._defaultZones;
  }
  set dropZones(val) {
    this._dropZones = val;
  }

  @Input()
  moves: (model: any, source: any, handle: any, sibling: any) => boolean;

  // @Input() classes: any = {};
  // @Input() dragulaOptions: any;

  @Input()
  @ContentChild(TemplateRef)
  template: TemplateRef < any > ;

  @Input()
  @ViewChild(DroppableDirective)
  droppable: any;

  @Output()
  drop: EventEmitter < any > = new EventEmitter < any > ();

  @Output()
  drag: EventEmitter < any > = new EventEmitter < any > ();

  @Output()
  over: EventEmitter < any > = new EventEmitter < any > ();

  @Output()
  out: EventEmitter < any > = new EventEmitter < any > ();

  @Output()
  remove: EventEmitter < any > = new EventEmitter < any > ();

  @Output()
  cancel: EventEmitter < any > = new EventEmitter < any > ();


  ngOnInit() {
    this._defaultZones = [this.dropZone];
  }

  ngAfterViewInit() {
    this.droppable.drag.subscribe((v: any) => this.drag.emit(v));
    this.droppable.drop.subscribe((v: any) => this.drop.emit(v));
    this.droppable.over.subscribe((v: any) => this.over.emit(v));
    this.droppable.out.subscribe((v: any) => this.out.emit(v));
    this.droppable.remove.subscribe((v: any) => this.remove.emit(v));
    this.droppable.cancel.subscribe((v: any) => this.cancel.emit(v));
  }
}
