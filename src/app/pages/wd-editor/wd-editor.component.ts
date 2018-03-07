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
  targetData: any[] = [{
    name: 'container-card',
    code: 'container-card',
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
    children: [{
      name: 'control-input-group',
      code: 'control-input-group',
      class: 'half',
      options: {
        type: 'text',
        label: '',
        placeholder: 'please input in here.'
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
        type: 'text',
        value: 'text'
      }]
    }, {
      name: 'control-input-group',
      code: 'control-input-group',
      class: 'half',
      options: {
        type: 'text',
        label: '',
        placeholder: 'please input in here.'
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
        type: 'text',
        value: 'password'
      }]
    }]
  }, {
    name: 'XXX-card',
    code: 'XXX-card'
  }];
  sourceData: any[] = [{
      name: 'container-column',
      code: 'container-column',
      icon: 'fa fa-tag',
      class: 'wide',
      options: {
        colCls: 'col-6'
      },
      editors: [{
        key: 'colCls',
        type: 'text',
        value: ''
      }],
      children: [
        [],
        []
      ]
    },
    {
      name: 'container-card',
      code: 'container-card',
      icon: 'fa fa-tag',
      class: 'wide',
      options: {
        title: '',

      },
      editors: [{
        key: 'title',
        type: 'text',
        value: ''
      }],
      children: []
    },
    {
      name: 'control-input-group',
      code: 'control-input-group',
      class: 'half',
      icon: 'fa fa-tag',
      options: {
        type: 'text',
        label: '',
        placeholder: 'please input in here.'

      },
      editors: [{
        key: 'label',
        type: 'text',
        value: ''
      }, {
        key: 'placeholder',
        type: 'text',
        value: ''
      }, {
        key: 'type',
        type: 'text',
        value: ''
      }]
    }, {
      name: 'control-iframe',
      code: 'control-iframe',
      class: 'ifrmae',
      icon: 'fa fa-tag',
      options: {
        src: 'about:blank'
      },
      editors: [{
        key: 'src',
        type: 'text',
        value: ''
      }]
    }
  ];

  // log(e: any) {
  //   console.log(e.type, e);
  // }
  constructor() {}

  ngOnInit() {}

}
