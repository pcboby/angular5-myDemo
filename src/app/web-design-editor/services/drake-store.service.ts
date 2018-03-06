import {
  Injectable
} from '@angular/core';
import * as dragula from 'dragula';
import {
  DroppableDirective
} from '../directives/droppable.directive';
import {
  DraggableDirective
} from '../directives/draggable.directive';

@Injectable()
export class DrakeStoreService {

  /**
   * 默认参数
   * @memberof DrakeStoreService
   */
  public selectEl: any;
  private selectMap = new WeakMap < any, DraggableDirective > ();
  // 容器集
  private droppableMap = new WeakMap < any, DroppableDirective > ();
  // 卡片集
  private draggableMap = new WeakMap < any, DraggableDirective > ();
  // 拖放组件对像
  private dragulaOptions: dragula.DragulaOptions;
  private drake: dragula.Drake;
  /**
   * Creates an instance of DrakeStoreService.
   * @memberof DrakeStoreService
   */
  constructor() {
    this.dragulaOptions = this.createDrakeOptions();
    this.drake = dragula([], this.dragulaOptions);
    this.registerEvents();
  }

  /**
   * 方法
   * @param {DraggableDirective} draggable 
   * @memberof DrakeStoreService
   */
  registerSelect(draggable: DraggableDirective) {
    this.selectClear();
    this.selectEl = draggable.element;
    this.selectMap.set(this.selectEl, draggable);
  }
  selectClear() {
    this.selectEl = null;
    this.selectMap = new WeakMap < any, DraggableDirective > ();
  }
  // 选中内容测试
  selectTrace(draggable: DraggableDirective): boolean {
    return this.selectMap.has(draggable.element);
  }
  selectModel() {
    if (this.selectEl) {
      return this.selectMap.get(this.selectEl).model;
    }
    return {};
  }
  // 获取当前选中的内容
  // selectorModel() {
  //   if (this.selectEl) {

  //     const item = this.selectMap.get(this.selectEl);
  //     return item.model;
  //   }
  //   return;
  // }
  // 注册容器
  register(droppable: DroppableDirective) {
    this.droppableMap.set(droppable.container, droppable);
    this.drake.containers.push(droppable.container);
  }
  // 移除容器
  remove(droppable: DroppableDirective) {
    this.droppableMap.delete(droppable.container);
    const idx = this.drake.containers.indexOf(droppable.container);
    if (idx > -1) {
      this.drake.containers.splice(idx, 1);
    }
  }
  // 注册卡
  registerDraggable(draggable: DraggableDirective) {
    // console.log('do registerDraggable', draggable);
    this.draggableMap.set(draggable.element, draggable);
  }
  // 移除卡
  removeDraggable(draggable: DraggableDirective) {
    // console.log('do removeDraggable', draggable);
    this.draggableMap.delete(draggable.element);
  }
  // 初始化组件参数
  createDrakeOptions(): dragula.DragulaOptions {
    const accepts = (el: any, target: any /*, source: any, sibling: any */ ) => {
      if (el.contains(target)) {
        return false;
      }
      const elementComponent = this.draggableMap.get(el);
      const targetComponent = this.droppableMap.get(target);
      if (elementComponent && targetComponent) {
        return elementComponent.dropZones.includes(targetComponent.dropZone);
      }
      return true;
    };

    const copy = (_: any, source: any) => {
      const sourceComponent = this.droppableMap.get(source);
      if (sourceComponent) {
        return sourceComponent.copy;
      }
      return false;
    };

    const moves = (el ? : any, source ? : any, handle ? : any, sibling ? : any) => {
      const elementComponent = this.draggableMap.get(el);
      if (elementComponent) {
        return elementComponent.moves(source, handle, sibling);
      }
      return true;
    };

    return {
      accepts,
      copy,
      moves,
      revertOnSpill: true
    };
  }
  // 注册事件
  registerEvents(): void {
    let dragElm: any;
    let draggedItem: any;
    // 当移动卡片时回调
    this.drake.on('drag', (el: any, source: any) => {
      // console.log('drakeOnDrag');
      draggedItem = undefined;
      dragElm = el;

      if (!el || !source) {
        return;
      }

      if (this.draggableMap.has(el)) {
        const elementComponent = this.draggableMap.get(el);
        draggedItem = elementComponent.model;

        elementComponent.drag.emit({
          type: 'drag',
          el,
          source,
          value: draggedItem
        });
      }

      if (this.droppableMap.has(source)) {
        const sourceComponent = this.droppableMap.get(source);
        this.dragulaOptions.removeOnSpill = sourceComponent.removeOnSpill;

        sourceComponent.drag.emit({
          type: 'drag',
          el,
          source,
          sourceComponent,
          value: draggedItem
        });
      }
    });
    // 卡片放下（松开鼠标键时）时回调
    this.drake.on('drop', (el: any, target: any, source: any) => {
      // console.log('drakeOnDrop');
      if (this.droppableMap.has(target)) {
        const targetComponent = this.droppableMap.get(target);
        let dropElmModel = draggedItem;

        if (this.droppableMap.has(source)) {
          const sourceComponent = this.droppableMap.get(source);

          const sourceModel = sourceComponent.model;
          const targetModel = targetComponent.model;

          const dropIndex = Array.prototype.indexOf.call(target.children, el);
          const dragIndex = (sourceModel && draggedItem) ? sourceModel.indexOf(draggedItem) : -1;

          if (dropIndex > -1 && targetModel) {
            if (dragIndex > -1 && sourceModel && target === source) {
              sourceModel.splice(dropIndex, 0, sourceModel.splice(dragIndex, 1)[0]);
            } else {

              if (el.parentNode === target) {
                target.removeChild(el);
              }

              const copy = !sourceModel || (dragElm !== el);
              if (copy) {
                dropElmModel = JSON.parse(JSON.stringify(dropElmModel));
              } else {
                if (el.parentNode !== source) {
                  // add element back, let angular remove it
                  source.appendChild(el);
                }
                sourceModel.splice(dragIndex, 1);
              }
              targetModel.splice(dropIndex, 0, dropElmModel);
            }
          }
        }

        targetComponent.drop.emit({
          type: 'drop',
          el,
          source,
          value: dropElmModel
        });
      }
    });

    // 删除卡片时回调
    this.drake.on('remove', (el: any, container: any, source: any) => {
      // console.log('drakeOnRemove');
      if (this.droppableMap.has(source)) {
        const sourceComponent = this.droppableMap.get(source);
        const sourceModel = sourceComponent.model;

        const dragIndex = (draggedItem && sourceModel) ? sourceModel.indexOf(draggedItem) : -1;

        if (dragIndex > -1) {
          if (el.parentNode !== source) {
            // add element back, let angular remove it
            source.appendChild(el);
          }
          sourceModel.splice(dragIndex, 1);
        }

        sourceComponent.remove.emit({
          type: 'remove',
          el,
          container,
          source,
          value: draggedItem
        });
      }
    });

    // 无差异容器时回调
    this.drake.on('cancel', (el: any, container: any, source: any) => {
      // console.log('drakeOnCancel');
      if (this.droppableMap.has(container)) {
        const containerComponent = this.droppableMap.get(container);
        containerComponent.cancel.emit({
          type: 'cancel',
          el,
          container,
          source,
          value: draggedItem
        });
      }
    });

    // 移入容器时回调
    this.drake.on('over', (el: any, container: any, source: any) => {
      // console.log('drakeOnOver');
      if (this.droppableMap.has(container)) {
        const containerComponent = this.droppableMap.get(container);
        containerComponent.over.emit({
          type: 'over',
          el,
          container,
          source,
          value: draggedItem
        });
      }
    });
    // 移出容器时回调
    this.drake.on('out', (el: any, container: any, source: any) => {
      // console.log('drakeOnOut');
      if (this.droppableMap.has(container)) {
        const containerComponent = this.droppableMap.get(container);
        containerComponent.out.emit({
          type: 'out',
          el,
          container,
          source,
          value: draggedItem
        });
      }
    });

  }
}
