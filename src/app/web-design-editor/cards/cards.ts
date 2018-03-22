// container-columns
export const containerColumns = {
  name: 'container-columns',
  code: 'container-columns',
  icon: 'fa fa-columns',
  class: 'wide',
  options: {
    row_style: 'padding: 1.5em;',
    col_number: 2,
    col_space: 12,
    row_gutter: 20
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
    options: [{
      label: '每行一栏',
      value: 24
    }, {
      label: '每行二栏',
      value: 12
    }, {
      label: '每行三栏',
      value: 8
    }, {
      label: '每行四栏',
      value: 6
    }, {
      label: '每行六栏',
      value: 4
    }, {
      label: '每行八栏',
      value: 3
    }, {
      label: '每行十二栏',
      value: 2
    }, {
      label: '每行二十四栏',
      value: 1
    }]
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
  }],
  contents: [
    [],
    []
  ]
};
// container-panel
export const containerPanel = {
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
};
// card-input-group
export const cardInputGroup = {
  name: 'card-input-group',
  code: 'card-input-group',
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
};
// card-iframe
export const cardIframe = {
  name: 'card-iframe',
  code: 'card-iframe',
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
// all containers
export const containers: Array < any > = [containerColumns, containerPanel];
// all system cards
export const cards: Array < any > = [cardIframe, cardInputGroup];
// all cards
export const AllSystemCards: Array < any > = [...containers, ...cards];
