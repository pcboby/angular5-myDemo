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
      name: 'card-input-group',
      code: 'card-input-group',
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
      name: 'container-columns',
      code: 'container-columns',
    icon: 'fa fa-columns',
      class: 'wide',
      options: {
        columnClass: 'col-6'
      },
      editors: [{
        key: 'columnClass',
        type: 'text',
        value: ''
      }],
      contents: [
        [],
        []
      ]
    },
    {
      name: 'container-panel',
      code: 'container-panel',
      icon: 'fa fa-list-alt',
      class: 'wide',
      options: {
        title: '',

      },
      editors: [{
        key: 'title',
        type: 'text',
        value: ''
      }],
      contents: []
    },
    {
      name: 'card-input-group',
      code: 'card-input-group',
      class: 'half',
      icon: 'fa fa-font',
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
      name: 'card-iframe',
      code: 'card-iframe',
      class: 'ifrmae',
      icon: 'fa fa-globe',
      options: {
        url: 'about:blank'
      },
      editors: [{
        key: 'url',
        type: 'text',
        value: '',
        placeholder: 'http://...'
      }]
    }
  ];

  // log(e: any) {
  //   console.log(e.type, e);
  // }
  constructor() {}

  ngOnInit() {}

}
