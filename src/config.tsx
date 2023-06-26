export default (params:any) => {
  const {
    selectList,
    radioList,
    formVal
  } = params;
  return [
    {
      key: 'projectId',
      label: 'projectId',
      component: 'Input',
      hidden: true,
    },
    {
      key: 'name',
      label: 'name',
      component: 'Input',
      rules:[
        { required: true, message: 'Please input your username!' }
      ],
    },
    {
      key: 'name2',
      label: 'name2',
      component: 'Input',
      rules:[
        { required: true, message: 'Please input your username!' }
      ],
      visible:formVal.name==='dzp'
    },
    {
      key: 'sex',
      label: 'sex',
      component: 'Select',
      rules:[
        { required: true, message: 'Please input your sex!' }
      ],
      list:selectList
    },
    {
      key: 'radio',
      label: 'radio',
      component: 'Radio',
      rules:[
        { required: true, message: 'Please input your radio!' }
      ],
      list:radioList
    },
    {
      key: 'switch',
      label: 'switch',
      component: 'Switch',
      rules:[
        { required: true, message: 'Please input your switch!' }
      ],
    },
  ]
}
