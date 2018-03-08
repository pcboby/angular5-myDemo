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
  public openSilder = true;
  // 卡片信息标签显示状态：true显示，false不显示
  public showLabel = true;
  // 编辑器状态：true编辑状态，false演示状态
  public isEdit = true;

  constructor() {}

}
