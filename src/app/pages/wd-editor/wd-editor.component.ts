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
      "name": "container-columns",
      "code": "container-columns",
      "icon": "fa fa-columns",
      "class": "wide",
      "options": {
        "row_style": "padding: 1.5em;",
        "col_number": 2,
        "col_space": 12,
        "row_gutter": 20
      },
      "editors": [{
          "key": "col_number",
          "label": "分栏个数",
          "type": "numberPicker",
          "value": 3,
          "max": 12,
          "min": 1
        },
        {
          "key": "col_space",
          "label": "单行栏数",
          "type": "select",
          "value": 8,
          "options": [{
              "label": "每行一栏",
              "value": 24
            },
            {
              "label": "每行二栏",
              "value": 12
            },
            {
              "label": "每行三栏",
              "value": 8
            },
            {
              "label": "每行四栏",
              "value": 6
            },
            {
              "label": "每行六栏",
              "value": 4
            },
            {
              "label": "每行八栏",
              "value": 3
            },
            {
              "label": "每行十二栏",
              "value": 2
            },
            {
              "label": "每行二十四栏",
              "value": 1
            }
          ]
        },
        {
          "key": "row_gutter",
          "label": "栏间距",
          "type": "slider",
          "unit": "px",
          "min": 0,
          "max": 40,
          "value": 20
        },
        {
          "key": "row_style",
          "label": "分栏样式",
          "type": "textarea",
          "value": "padding:0;"
        }
      ],
      "contents": [
        [{
          "name": "card-input-group",
          "code": "card-input-group",
          "class": "half",
          "icon": "fa fa-font",
          "options": {
            "type": "text",
            "label": "",
            "placeholder": ""
          },
          "editors": [{
              "key": "label",
              "type": "text",
              "value": ""
            },
            {
              "key": "placeholder",
              "type": "text",
              "value": ""
            },
            {
              "key": "type",
              "type": "select",
              "options": [{
                  "label": "文本",
                  "value": "text"
                },
                {
                  "label": "密码",
                  "value": "password"
                },
                {
                  "label": "数字",
                  "value": "number"
                }
              ],
              "value": "text"
            }
          ]
        }],
        [{
          "name": "card-input-group",
          "code": "card-input-group",
          "class": "half",
          "icon": "fa fa-font",
          "options": {
            "type": "text",
            "label": "",
            "placeholder": ""
          },
          "editors": [{
              "key": "label",
              "type": "text",
              "value": ""
            },
            {
              "key": "placeholder",
              "type": "text",
              "value": ""
            },
            {
              "key": "type",
              "type": "select",
              "options": [{
                  "label": "文本",
                  "value": "text"
                },
                {
                  "label": "密码",
                  "value": "password"
                },
                {
                  "label": "数字",
                  "value": "number"
                }
              ],
              "value": "text"
            }
          ]
        }],
        [{
          "name": "card-input-group",
          "code": "card-input-group",
          "class": "half",
          "icon": "fa fa-font",
          "options": {
            "type": "text",
            "label": "",
            "placeholder": ""
          },
          "editors": [{
              "key": "label",
              "type": "text",
              "value": ""
            },
            {
              "key": "placeholder",
              "type": "text",
              "value": ""
            },
            {
              "key": "type",
              "type": "select",
              "options": [{
                  "label": "文本",
                  "value": "text"
                },
                {
                  "label": "密码",
                  "value": "password"
                },
                {
                  "label": "数字",
                  "value": "number"
                }
              ],
              "value": "text"
            }
          ]
        }]
      ]
    },
    {
      "name": "container-panel",
      "code": "container-panel",
      "icon": "fa fa-tag",
      "class": "wide",
      "options": {
        "title": ""
      },
      "editors": [{
        "key": "title",
        "type": "text",
        "value": "example title"
      }],
      "contents": [{
          "name": "card-input-group",
          "code": "card-input-group",
          "class": "half",
          "options": {
            "label": "",
            "type": "text",
            "placeholder": ""
          },
          "editors": [{
              "key": "label",
              "type": "text",
              "value": "帐号"
            },
            {
              "key": "placeholder",
              "type": "text",
              "value": "帐号/用户名/邮箱"
            },
            {
              "key": "type",
              "type": "select",
              "options": [{
                  "label": "文本",
                  "value": "text"
                },
                {
                  "label": "密码",
                  "value": "password"
                },
                {
                  "label": "数字",
                  "value": "number"
                }
              ],
              "value": "text"
            }
          ]
        },
        {
          "name": "card-input-group",
          "code": "card-input-group",
          "class": "half",
          "options": {
            "type": "text",
            "label": "",
            "placeholder": ""
          },
          "editors": [{
              "key": "label",
              "type": "text",
              "value": "密码"
            },
            {
              "key": "placeholder",
              "type": "text",
              "value": "请在这里输入密码"
            },
            {
              "key": "type",
              "type": "select",
              "options": [{
                  "label": "文本",
                  "value": "text"
                },
                {
                  "label": "密码",
                  "value": "password"
                },
                {
                  "label": "数字",
                  "value": "number"
                }
              ],
              "value": "password"
            }
          ]
        }
      ]
    },
    {
      "name": "XXX-card",
      "code": "XXX-card"
    }
  ];
  sourceData: any[] = [];

  // log(e: any) {
  //   console.log(e.type, e);
  // }
  constructor() {}

  ngOnInit() {}

}
