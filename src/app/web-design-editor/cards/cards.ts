// container-columns
export const containerColumns = {
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
    url: 'about:blank'
  },
  editors: [{
    key: 'url',
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
