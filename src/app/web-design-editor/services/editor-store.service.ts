import {
  Injectable
} from '@angular/core';

@Injectable()
export class EditorStoreService {
  // 编辑区域显示内容：代码区 或 编辑区
  public editorView = 'TAEGET'; // 'CODE' or 'TAEGET'
  // 属性栏显示状态：true显示，false不显示
  public openSilder = true;
  // 卡片信息标签显示状态：true显示，false不显示
  public openCardLabel = true;
  // 编辑器状态：true编辑状态，false演示状态
  public isEdit = true;

  constructor() {}

}
