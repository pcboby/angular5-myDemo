import {
  Injectable
} from '@angular/core';

@Injectable()
export class EditorStoreService {

  /**
   * 默认参数
   * @memberof EditorStoreService
   */
  public displayMode = 'TAEGET'; // 'CODE' or 'TAEGET'
  // 编辑区域显示内容：代码区 或 编辑区
  public optionMode = 'ATTRIB'; // 'ATTRIB' or 'SOURCE'
  // 属性栏显示状态：true显示，false不显示
  public showSilder = true;
  // 卡片信息标签显示状态：true显示，false不显示
  public showLabel = true;
  // 编辑器状态：true编辑状态，false演示状态
  public isEdit = true;
  // 编辑器显示状态：true全屏，false原大小
  public isFullscreen = false;

  getEditorValueBy(item: any, str: string) {
    if (item.options && item.editors) {
      for (let i = 0; i < item.editors.length; i++) {
        const e = item.editors[i];
        if (e.key === str) {
          if (e.value) {
            return e.value;
          }
          continue;
        }
      }
    }
    return item.options[str] || '{' + str + '}';
  }
  log(e: any) {
    console.log(e.type, e);
  }

  constructor() {}

}
