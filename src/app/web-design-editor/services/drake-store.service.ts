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
  // public selectModel: any = {};
  // public cascodeModel = [];
  private cascadePath = [];
  private selectModel = {};
  private selectElm: any;
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
    this.selectElm = draggable.element;
    this.selectModel = draggable.model;
    this.selectMap = new WeakMap < any, DraggableDirective > ();
    this.selectMap.set(this.selectElm, draggable);
    this.updateCascade(this.selectElm);
  }
  removeSelect() {
    this.selectMap.delete(this.selectElm);
    this.selectElm = undefined;
    this.cascadePath = [];
    this.selectModel = {};
  }
  // 测试是否被选中
  changeSelect(draggable: DraggableDirective) {
    return draggable.model === this.selectModel;
  }
  // 获取选中的数据
  getSelectModel() {
    return this.selectModel;
  }
  // 获取选中的路径
  getSelectCascade() {
    return this.cascadePath;
  }
  // 更新选中的路径
  updateCascade(c: any) {
    const v = [];
    while (c) {
      if (c.hasAttribute && c.hasAttribute('appdraggable')) {
        if (this.draggableMap.has(c)) {
          v.unshift(this.draggableMap.get(c).model.name);
        }
      }
      c = c.parentNode;
    }
    this.cascadePath = v;
  }

  // 注册容器
  registerDroppable(droppable: DroppableDirective) {
    this.droppableMap.set(droppable.container, droppable);
    this.drake.containers.push(droppable.container);
  }
  // 移除容器
  removeDroppable(droppable: DroppableDirective) {
    this.droppableMap.delete(droppable.container);
    const idx = this.drake.containers.indexOf(droppable.container);
    if (idx > -1) {
      this.drake.containers.splice(idx, 1);
    }
  }
  // 注册卡
  registerDraggable(draggable: DraggableDirective) {
    this.draggableMap.set(draggable.element, draggable);
    if (draggable.model === this.selectModel) {
      setTimeout(() => {
        this.registerSelect(draggable);
      }, 50);
    }
  }
  // 移除卡
  removeDraggable(draggable: DraggableDirective) {
    this.draggableMap.delete(draggable.element);
    if (draggable.element === this.selectElm) {
      setTimeout(() => {
        this.removeSelect();
      }, 0);
    }
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
      // 如果有容器支持
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
      if (this.droppableMap.has(source)) {
        const sourceComponent = this.droppableMap.get(source);
        const sourceModel = sourceComponent.model;

        const dragIndex = (draggedItem && sourceModel) ? sourceModel.indexOf(draggedItem) : -1;

        // 当移出的内容与选中的内容相同时，清空选中的结构数据
        // if (draggedItem === this.selectModel) {
        //   this.removeSelect();
        // }

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
