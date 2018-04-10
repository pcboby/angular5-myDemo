// 系统导航菜单
export const cardNavmenu = {
  name: 'card-navmenu',
  code: 'card-navmenu',
  type: 'system',
  icon: 'fa fa-th-list',
  options: {
    mode: 'horizontal',
    backgroundColor: '#ffffff',
    textColor: '#303133',
    activeTextColor: '#409eff',
    selectIdx: 0,
    menuTrigger: 'hover',
    dataApi: ''
  },
  editors: [{
    key: 'dataApi',
    label: '数据服务',
    type: 'selectApiPicker',
    value: ''
  }, {
    key: 'mode',
    label: '模式',
    type: 'select',
    value: 'horizontal',
    options: {
      data: [{
        label: 'horizontal',
        value: 'horizontal'
      }, {
        label: 'vertical',
        value: 'vertical'
      }]
    }
  }, {
    key: 'menuTrigger',
    label: '子菜单打开的触发方式',
    type: 'select',
    value: 'hover',
    options: {
      data: [{
        label: 'click',
        value: 'click'
      }, {
        label: 'hover',
        value: 'hover'
      }]
    }
  }, {
    key: 'backgroundColor',
    label: '背景颜色',
    type: 'text',
    value: '#ffffff'
  }, {
    key: 'textColor',
    label: '文字颜色',
    type: 'text',
    value: '#303133'
  }, {
    key: 'activeTextColor',
    label: '当前激活的文字颜色',
    type: 'text',
    value: '#409eff'
  }]
};
// 默认平台页面布局容器卡片
export const containerLayout = {
  name: 'container-layout',
  code: 'container-layout',
  type: 'system',
  contents: [],
  icon: 'fa fa-window-restore'
};
// 均分分栏容器：container-columns
export const containerColumns = {
  name: 'container-columns',
  code: 'container-columns',
  type: 'system',
  contents: [
    [],
    []
  ],
  icon: 'fa fa-columns',
  class: 'wide',
  options: {
    row_style: 'padding: 1.5em;',
    row_gutter: 20,
    col_number: 2,
    col_space: 12
  },
  editors: [{
    key: 'col_number',
    label: '分栏个数',
    type: 'numberPicker',
    value: 2,
    max: 12,
    min: 1
  }, {
    key: 'col_space',
    label: '单行栏数',
    type: 'select',
    value: 12,
    options: {
      data: [{
        label: '每行1栏 (24/24)',
        value: 24
      }, {
        label: '每行2栏 (12/24)',
        value: 12
      }, {
        label: '每行3栏 (8/24)',
        value: 8
      }, {
        label: '每行4栏 (6/24)',
        value: 6
      }, {
        label: '每行6栏 (4/24)',
        value: 4
      }, {
        label: '每行8栏 (3/24)',
        value: 3
      }, {
        label: '每行12栏 (2/24)',
        value: 2
      }, {
        label: '每行24栏 (1/24)',
        value: 1
      }]
    }
  }, {
    key: 'row_gutter',
    label: '栏间距',
    type: 'slider',
    unit: 'px',
    min: 0,
    max: 40,
    value: 20
  }, {
    key: 'row_style',
    label: '分栏样式',
    type: 'textarea',
    value: 'padding:1.5em;'
  }]
};
// 自定义分栏容器：container-columns2
export const containerColumns2 = {
  name: 'container-columns2',
  code: 'container-columns2',
  type: 'system',
  contents: [
    [],
    []
  ],
  icon: 'fa fa-columns',
  class: 'wide',
  options: {
    row_style: 'padding: 1.5em;',
    row_gutter: 20,
    col_number: 2,
    col_spaces: [{
      value: 12
    }, {
      value: 12
    }]
  },
  editors: [{
    key: 'col_spaces',
    label: '分栏',
    type: 'columnPicker',
    value: [{
      value: 12
    }, {
      value: 12
    }],
    options: {
      data: [{
        label: '24/24',
        value: 24
      }, {
        label: '16/24',
        value: 16
      }, {
        label: '14/24',
        value: 14
      }, {
        label: '12/24',
        value: 12
      }, {
        label: '10/24',
        value: 10
      }, {
        label: '8/24',
        value: 8
      }, {
        label: '6/24',
        value: 6
      }, {
        label: '4/24',
        value: 4
      }, {
        label: '3/24',
        value: 3
      }, {
        label: '2/24',
        value: 2
      }, {
        label: '1/24',
        value: 1
      }]
    }
  }, {
    key: 'row_gutter',
    label: '栏间距',
    type: 'slider',
    unit: 'px',
    min: 0,
    max: 40,
    value: 20
  }, {
    key: 'row_style',
    label: '分栏样式',
    type: 'textarea',
    value: 'padding:1.5em;'
  }]
};
// 单块布局容器：container-panel
export const containerPanel = {
  name: 'container-panel',
  code: 'container-panel',
  type: 'system',
  contents: [],
  icon: 'fa fa-list-alt',
  class: 'wide',
  options: {
    head_open: true,
    head_title: '',
    body_style: ''
  },
  editors: [{
    key: 'head_open',
    type: 'switch',
    value: true
  }, {
    key: 'head_title',
    type: 'text',
    value: ''
  }, {
    key: 'body_style',
    type: 'textarea',
    value: ''
  }]
};
// 标准输入卡：card-input-group
export const cardInputGroup = {
  name: 'card-input-group',
  code: 'card-input-group',
  type: 'system',
  class: 'half',
  icon: 'fa fa-font',
  options: {
    type: 'text',
    label: '',
    placeholder: ''
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
    type: 'select',
    options: {
      data: [{
        label: '文本',
        value: 'text'
      }, {
        label: '密码',
        value: 'password'
      }, {
        label: '数字',
        value: 'number'
      }]
    },
    value: 'text'
  }]
};
// 标准页面卡：card-iframe
export const cardIframe = {
  name: 'card-iframe',
  code: 'card-iframe',
  type: 'system',
  class: 'ifrmae',
  icon: 'fa fa-globe',
  options: {
    src: 'about:blank'
  },
  editors: [{
    key: 'src',
    type: 'text',
    value: '',
    placeholder: 'http://'
  }]
};
// 系统容器卡片：all containers
export const containers: Array < any > = [containerLayout, containerColumns, containerColumns2, containerPanel];
// 系统普通卡片：all system cards
export const cards: Array < any > = [cardIframe, cardInputGroup, cardNavmenu];
// 所有卡片：all cards：
export const AllSystemCards: Array < any > = [...containers, ...cards];
