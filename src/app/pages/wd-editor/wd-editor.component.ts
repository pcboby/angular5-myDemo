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
    cardTitle: '',
    icon: 'fa fa-tag',
    class: 'wide',
    editors: [{
      key: 'cardTitle',
      type: 'string',
      value: 'example title'
    }],
    children: [{
      name: 'form-input-control',
      code: 'form-input-control',
      class: 'half',
      inputType: 'text',
      inputLabel: '',
      inputPlaceholder: 'please input in here.',
      editors: [{
        key: 'inputLabel',
        type: 'string',
        value: '帐号'
      }, {
        key: 'inputPlaceholder',
        type: 'string',
        value: '帐号/用户名/邮箱'
      }, {
        key: 'inputType',
        type: 'string',
        value: 'text'
      }]
    }, {
      name: 'form-input-control',
      code: 'form-input-control',
      class: 'half',
      inputType: 'text',
      inputLabel: '',
      inputPlaceholder: 'please input in here.',
      editors: [{
        key: 'inputLabel',
        type: 'string',
        value: '密码'
      }, {
        key: 'inputPlaceholder',
        type: 'string',
        value: '请在这里输入密码'
      }, {
        key: 'inputType',
        type: 'string',
        value: 'password'
      }]
    }]
  },{
    name: 'XXX-card',
    code: 'XXX-card'
  }];
  sourceData: any[] = [{
      name: 'container-card',
      code: 'container-card',
      cardTitle: '',
      icon: 'fa fa-tag',
      class: 'wide',
      editors: [{
        key: 'cardTitle',
        type: 'string',
        value: ''
      }],
      children: []
    },
    {
      name: 'form-input-control',
      code: 'form-input-control',
      class: 'half',
      icon: 'fa fa-tag',
      inputType: 'text',
      inputLabel: '',
      inputPlaceholder: 'please input in here.',
      editors: [{
        key: 'inputLabel',
        type: 'string',
        value: ''
      }, {
        key: 'inputPlaceholder',
        type: 'string',
        value: ''
      }, {
        key: 'inputType',
        type: 'string',
        value: ''
      }]
    }
  ];

  log(e: any) {
    console.log(e.type, e);
  }
  constructor() {}

  ngOnInit() {}

}
