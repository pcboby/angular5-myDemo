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

  private scriptMap = new WeakMap<any, string>();

  registerScript(urls: any , scripts: string) {
    this.scriptMap.set(urls, scripts);
  }
  removeScript(urls: any) {
    this.scriptMap.delete(urls);
  }

  /**
   *
   */
  // tslint:disable-next-line:member-ordering
  public ATTRIB_FORM_SIZE = 'mini';

  getEditorValueBy(item: any, str: string) {
    if (item.options && item.editors) {
      for (let i = 0; i < item.editors.length; i++) {
        const e = item.editors[i];
        if (e.key === str) {
          if (e !== undefined) {
            return e.value;
          }
          continue;
        }
      }
    }
    return item.options[str] || '';
  }
  clone(obj: any): any {
    let copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || 'object' !== typeof obj) {
      return obj;
    }

    // Handle Date
    if (obj instanceof Date) {
      copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
      copy = [];
      for (let i = 0, len = obj.length; i < len; i++) {
        copy[i] = this.clone(obj[i]);
      }
      return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
      copy = {};
      for (const attr in obj) {
        if (obj.hasOwnProperty(attr)) {
          copy[attr] = this.clone(obj[attr]);
        }
      }
      return copy;
    }

    throw new Error('Unable to copy obj! Its type isn\'t supported.');
  }
  log(e: any) {
    console.log(e.type, e);
  }

  randomString(len) {
    len = len || 32;
    const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    const maxPos = $chars.length;
    let cod = '';
    for (let i = 0; i < len; i++) {
      cod += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return cod;
  }

  constructor() {}

}
