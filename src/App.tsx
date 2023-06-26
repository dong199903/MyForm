import React, { useEffect,useState } from "react";
import Forms from "./components/Forms/index";
import config from "./config";
function App() {

  const [formVal,setFormVal] = useState<any>({name:'dzp',projectId:1,sex:'lihe'})
  const [selectList,setSelectList] = useState<any>([])
  const [radioList,setRadioList] = useState<any>([])

  const submit = (v:Boolean,e:any) => {
    if(v) {
      console.log('最后的表单数据',e)
    }else{
      console.log('验证失败')
    }
  }
  useEffect(()=>{
    //模拟接口请求表单数据
    setTimeout(() => {
      setFormVal({
        ...formVal,name:'dzp100'
      })
      setSelectList([{label:'小米',value:'xiao'},{label:'大米',value:'big'}])
      setRadioList([{label:'man',value:'男'},{label:'women',value:'女'}])
    }, 3000);
  },[])
  return (
    <div className="App">
      <Forms 
        config={config({
          selectList,
          radioList,
          formVal
        })} 
        value={formVal} 
        setValue={setFormVal}
        submit={submit}
      >
      </Forms>
    </div>
  );
}
export default App;

