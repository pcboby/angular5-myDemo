import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-wd-editor',
  templateUrl: './wd-editor.component.html',
  styleUrls: ['./wd-editor.component.css']
})
export class WdEditorComponent implements OnInit {
  // targetData: any[] = [];
  targetData: any[] = [{
    name: 'container-panel',
    code: 'container-panel',
    icon: 'fa fa-tag',
    class: 'wide',
    options: {
      title: ''
    },
    editors: [{
      key: 'title',
      type: 'text',
      value: 'example title'
    }],
    contents: [{
      name: 'card-input-group',
      code: 'card-input-group',
      class: 'half',
      options: {
        label: '',
        type: 'text',
        placeholder: ''
      },
      editors: [{
        key: 'label',
        type: 'text',
        value: '帐号'
      }, {
        key: 'placeholder',
        type: 'text',
        value: '帐号/用户名/邮箱'
      }, {
        key: 'type',
        type: 'select',
        options: [{
          label: '文本',
          value: 'text'
        }, {
          label: '密码',
          value: 'password'
        }, {
          label: '数字',
          value: 'number'
        }],
        value: 'text'
      }]
    }, {
      name: 'card-input-group',
      code: 'card-input-group',
      class: 'half',
      options: {
        type: 'text',
        label: '',
        placeholder: ''
      },
      editors: [{
        key: 'label',
        type: 'text',
        value: '密码'
      }, {
        key: 'placeholder',
        type: 'text',
        value: '请在这里输入密码'
      }, {
        key: 'type',
        type: 'select',
        options: [{
          label: '文本',
          value: 'text'
        }, {
          label: '密码',
          value: 'password'
        }, {
          label: '数字',
          value: 'number'
        }],
        value: 'password'
      }]
    }]
  }, {
    name: 'XXX-card',
    code: 'XXX-card'
  }];
  sourceData: any[] = [];

  // log(e: any) {
  //   console.log(e.type, e);
  // }
  constructor() {}

  ngOnInit() {}

}
