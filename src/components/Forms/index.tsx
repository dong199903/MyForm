import React,{ useEffect,useRef } from "react";
import {Form,Input,Radio,Select,Switch,Button} from "antd";
type Props = {
  config:Array<any>
  value:any//表单数据
  setValue:(e:any)=>void
  submit:(e:any,v?:any)=>void
} & Partial<{
  children:React.ReactNode
}>

const Forms = (props:Props) => {
  const { config,value,setValue,submit } = props;
  const formRef = useRef<any>()

  //获取form初始化数据
  useEffect(()=>{
    formRef.current?.setFieldsValue(value);
  },[value])

  //form提交后验证通过
  const onFinish = (values: any) => {
    submit(true,value)
  };

  //form提交后验证失败
  const onFinishFailed = (errorInfo: any) => {
    submit(false)
  };

  //form重置
  const reset = () => {
    formRef.current?.resetFields();
    setValue({})
  }

  //根据配置数组->生产Form.item
  const makeComponent = (com:string,list:Array<any>):React.ReactNode => {
    switch (com) {
      case 'Input':
        return <Input></Input>
      case 'Select':
        return (
          <Select>
            {list.map(item=>(
              <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
            ))}
          </Select>
        )
      case 'Radio':
        return (
          <Radio.Group>
            { list.map(item=>(
              <Radio key={item.value} value={item.value}>{item.label}</Radio>
            ))}
          </Radio.Group>
        )
      case 'Switch':
        return (
          <Switch/>
        )
      default :
        return null;
    }
  }


  return (
    <Form 
      ref={formRef} 
      onValuesChange={e=>{
        setValue({...value,...e})
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <>
      { config.length>0 && config.map(item=>{
        const {
          key,
          label,
          component,
          hidden,
          list,
          rules,
          visible
        } = item;
        let isHasVisible = Object.keys(item).includes('visible')
        if(!isHasVisible || isHasVisible && visible)
        return (
          <Form.Item 
            label={label}
            key={key}
            name={key}
            hidden={hidden}
            rules={rules}
          >
            {makeComponent(component,list)}
          </Form.Item>
        )
      })}
      <Form.Item>
        <Button 
          onClick={()=>{
            formRef.current.submit()
          }}
        >
          提交
        </Button>
        <Button onClick={reset}>重置</Button>
      </Form.Item>
      </>
    </Form>
  )
}
export default Forms;