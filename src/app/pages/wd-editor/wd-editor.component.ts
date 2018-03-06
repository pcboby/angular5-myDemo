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
  targetData: any[] = [
    {
    name: 'container-card',
    code: 'container-card',
    cardTitle: '',
    icon: 'fa fa-tag',
    class: 'wide',
    editors: [{
      key: 'cardTitle',
      type: 'text',
      value: 'example title'
    }],
    children: [{
      name: 'form-group',
      code: 'form-group',
      class: 'half',
      inputType: 'text',
      inputLabel: '',
      inputPlaceholder: 'please input in here.',
      editors: [{
        key: 'inputLabel',
        type: 'text',
        value: '帐号'
      }, {
        key: 'inputPlaceholder',
        type: 'text',
        value: '帐号/用户名/邮箱'
      }, {
        key: 'inputType',
        type: 'text',
        value: 'text'
      }]
    }, {
      name: 'form-group',
      code: 'form-group',
      class: 'half',
      inputType: 'text',
      inputLabel: '',
      inputPlaceholder: 'please input in here.',
      editors: [{
        key: 'inputLabel',
        type: 'text',
        value: '密码'
      }, {
        key: 'inputPlaceholder',
        type: 'text',
        value: '请在这里输入密码'
      }, {
        key: 'inputType',
        type: 'text',
        value: 'password'
      }]
    }]
  }, {
    name: 'XXX-card',
    code: 'XXX-card'
  }
];
  sourceData: any[] = [{
      name: 'container-card',
      code: 'container-card',
      cardTitle: '',
      icon: 'fa fa-tag',
      class: 'wide',
      editors: [{
        key: 'cardTitle',
        type: 'text',
        value: ''
      }],
      children: []
    },
    {
      name: 'form-group',
      code: 'form-group',
      class: 'half',
      icon: 'fa fa-tag',
      inputType: 'text',
      inputLabel: '',
      inputPlaceholder: 'please input in here.',
      editors: [{
        key: 'inputLabel',
        type: 'text',
        value: ''
      }, {
        key: 'inputPlaceholder',
        type: 'text',
        value: ''
      }, {
        key: 'inputType',
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
