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
  public selectModel: any = {};
  public cascodeModel = [];
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
    this.selectModel = draggable.model;
    console.log('registerSelect!!!!', draggable.element);
    this.updateCascade(draggable.element);
  }

  updateCascade(c: any) {
    const v = [];
    while (c) {
      if (c.hasAttribute && c.hasAttribute('appdraggable')) {
        console.log('updateCascade@@@@@', c, this.draggableMap, this.droppableMap);
        v.unshift(this.draggableMap.get(c).model.name);
      }
      c = c.parentNode;
    }
    this.cascodeModel = v;
  }

  // registerSelect(draggable: DraggableDirective) {
  //   this.selectModel = draggable.model;
  // }
  // revomeSelect(draggable: DraggableDirective) {
  //   if (this.hasSelect(draggable)) {
  //     this.selectModel = {};
  //   }
  // }
  // 选中的内容中是否包含
  // hasSelect(draggable: DraggableDirective): boolean {
  //   return this.selectModel === draggable.model;
  // }
  // 注册容器
  registerDroppable(droppable: DroppableDirective) {
    // console.log('$$$registerDroppable',droppable);
    this.droppableMap.set(droppable.container, droppable);
    this.drake.containers.push(droppable.container);
  }
  // 移除容器
  removeDroppable(droppable: DroppableDirective) {
    // console.log('$$$removeDroppable',droppable);
    this.droppableMap.delete(droppable.container);
    const idx = this.drake.containers.indexOf(droppable.container);
    if (idx > -1) {
      this.drake.containers.splice(idx, 1);
    }
  }
  // 注册卡
  registerDraggable(draggable: DraggableDirective) {
    // console.log('$$$registerDraggable', draggable);
    this.draggableMap.set(draggable.element, draggable);
  }
  // 移除卡
  removeDraggable(draggable: DraggableDirective) {
    // console.log('$$$removeDraggable');
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

    const moves = (el ?: any, source ?: any, handle ?: any, sibling ?: any) => {
      const elementComponent = this.draggableMap.get(el);
      // console.log('######',elementComponent);
      if (elementComponent) {
        return elementComponent.moving(source, handle, sibling);
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
      console.log('drakeOnDrag');
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
      console.log('drakeOnDrop');
      // 如果有容器支持
      if (this.droppableMap.has(target)) {
        const targetComponent = this.droppableMap.get(target);
        let dropElmModel = draggedItem;

        if (this.droppableMap.has(source)) {
          // console.log('@@@has:',el,target,source);
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
              // setTimeout(() => {
              //   this.updateCascade(dragElm);
              // }, 110);
            }
          }
        }

        // console.log('$#$#$#',this.draggableMap);

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
      console.log('drakeOnRemove');
      if (this.droppableMap.has(source)) {
        const sourceComponent = this.droppableMap.get(source);
        const sourceModel = sourceComponent.model;

        const dragIndex = (draggedItem && sourceModel) ? sourceModel.indexOf(draggedItem) : -1;

        // 当移出的内容与选中的内容相同时，清空选中的结构数据
        if (draggedItem === this.selectModel) {
          this.selectModel = {};
          this.cascodeModel = [];
        }

        // 删除数据中选中的内容
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
      console.log('drakeOnCancel');
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
      console.log('drakeOnOver');
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
      console.log('drakeOnOut',el, this.draggableMap.has(el));
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
