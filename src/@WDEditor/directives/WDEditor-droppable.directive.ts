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
import { WDEditorStoreService } from '../services';

let i = 10000;

function getNextId() {
  return i++;
}

@Directive({
  selector: '[WDEditorDroppable]'
})
export class DroppableDirective implements OnInit, OnDestroy, AfterViewInit {
  @Input() model: any;
  @Input() copy = false;
  @Input() removeOnSpill = false;
  @Input() WDEditorDroppable: string;

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

  get container(): any {
    return this.el.nativeElement;
  }

  @Input()
  get dropZone(): string {
    return this._dropZone || this.WDEditorDroppable || this.defaultZone;
  }
  set dropZone(val: string) {
    this._dropZone = val;
  }

  defaultZone: string;
  _dropZone: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private storeService: WDEditorStoreService
  ) {}

  ngOnInit(): void {
    this.defaultZone = `@@DefaultDropZone-${getNextId()}@@`;
    this.storeService.register(this);
  }

  ngAfterViewInit(): void {
    this.over.subscribe(() => {
      this.renderer.addClass(this.container, 'gu-over');
    });
    this.out.subscribe(() => {
      this.renderer.removeClass(this.container, 'gu-over');
    });
  }

  ngOnDestroy(): void {
    this.storeService.remove(this);
  }
}
