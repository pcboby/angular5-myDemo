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
  WDEditorStoreService
} from '../services';
import {
  DroppableDirective
} from './WDEditor-droppable.directive';

@Directive({
  selector: '[WDEditorDraggable]'
})
export class DraggableDirective implements OnInit, OnDestroy {


  @Input() WDEditorDraggable: string[];
  @Input() model: any;

  @Input()
  get dropZones(): any {
    return this._dropZones || this.WDEditorDraggable || this._parentDropzones;
  }
  set dropZones(val: any) {
    this._dropZones = val;
  }

  @Input('moves')
  _moves = true;


  handles: any[] = [];

  get hasHandle() {
    return !!this.handles.length;
  }

  @Output()
  drag: EventEmitter < any > = new EventEmitter < any > ();

  dragDelay = 200; // milliseconds
  dragDelayed = true;

  touchTimeout: any;

  get element(): any {
    return this.el.nativeElement;
  }

  _dropZones: string[];
  _parentDropzones: string[];

  constructor(
    private el: ElementRef,
    private storeService: WDEditorStoreService,
    private droppableDirective: DroppableDirective,
  ) {}

  // From: https://github.com/bevacqua/dragula/issues/289#issuecomment-277143172
  @HostListener('touchmove', ['$event'])
  onMove(e: Event) {
    if (!this._moves || this.dragDelayed) {
      e.stopPropagation();
      clearTimeout(this.touchTimeout);
    }
  }

  @HostListener('touchstart', ['$event'])
  onDown() {
    if (this._moves) {
      this.touchTimeout = setTimeout(() => {
        this.dragDelayed = false;
      }, this.dragDelay);
    }
  }

  @HostListener('touchend', ['$event'])
  onUp() {
    if (this._moves) {
      clearTimeout( < number > this.touchTimeout);
      this.dragDelayed = true;
    }
  }

  ngOnInit(): void {
    this.update();
  }

  update(): void {
    this._parentDropzones = [this.droppableDirective.dropZone];
    this.storeService.registerDraggable(this);
    this.updateElements();
  }

  ngOnDestroy(): void {
    this.storeService.removeDraggable(this);
  }

  updateElements(): void {
    const nativeElement = this.el.nativeElement;
    const handles: NodeList = nativeElement.querySelectorAll('[WDEditordraghandle]');
    this.handles = Array.from(handles).filter((h: any) => findFirstDraggableParent(h) === nativeElement);

    function findFirstDraggableParent(c: any) {
      while (c.parentNode) {
        c = c.parentNode;
        if (c.hasAttribute && c.hasAttribute('WDEditordraggable')) {
          return c;
        }
      }
    }
  }

  canMove(source ?: any, handle ?: any, sibling ?: any): boolean {
    if (typeof this._moves === 'boolean') return this._moves;
    if (typeof this._moves === 'function') return this._moves(this.model, source, handle, sibling);
    return true;
  }

  moves(source: any, handle: any, sibling: any): boolean {
    if (!this.canMove(source, handle, sibling)) return false;

    return this.hasHandle ?
      this.handles.some(h => handelFor(handle, h)) :
      true;

    function handelFor(c: any, p: any) {
      if (c === p) return true;
      while ((c = c.parentNode) && c !== p); // tslint:disable-line
      return !!c;
    }
  }

  ngDoCheck(): void {
    this.updateElements();
  }

}
