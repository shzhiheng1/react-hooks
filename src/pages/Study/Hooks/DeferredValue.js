import React, { useState,useEffect,useDeferredValue } from 'react'
import {List,Divider,Input} from 'antd'
import {useDebounce} from 'ahooks'

export default function DeferredValue() {
  const data=[
    '1.允许用户推迟屏幕更新优先级不高部分,即延迟更新和useTransition功能类似。',
    '2.React应用实时更新和js单线程特性导致页面卡顿,使用useDefferredValue可以避免这个问题。',
    '3.基本用法:const deferredValue = useDeferredValue(value)。'
  ]
  const [text,setText]=useState('')
  // 使用延迟更新deferredValue
  const deferredText=useDeferredValue(text)
  // 使用防抖useDebounce
  const debounceText=useDebounce(text,{wait:3000})
  return (
    <div>
       <List
          bordered
          dataSource={data}
          header={<h3>useDefferredValue的使用</h3>}
          renderItem={(item)=>(
            <List.Item>{item}</List.Item>
          )}
       />
       <Divider>示例</Divider>
       <Input value={text} onChange={(e)=>setText(e.target.value)}></Input>
       <h3>1.使用useDefferredValue延迟更新</h3>
       <Child text={deferredText} />
       <h3>2.使用useDebounce防抖</h3>
       <Child text={debounceText} />
    </div>
  )
}

function Child(props) {
  const [list,setList]=useState([])
  const [count,setCount]=useState(0)
  useEffect(()=>{
    setCount(count+1);
    setTimeout(()=>{
       setList([
        {name: props.text, value: Math.random()},
        {name: props.text, value: Math.random()},
        {name: props.text, value: Math.random()},
        {name: props.text, value: Math.random()},
        {name: props.text, value: Math.random()},
       ])
    },500)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props.text])
  return(
    <>
       <p>我被更新{count}次</p>
       <ul>
           {list.map((item,index)=>(
             <li key={index}>名字：{item.name}，值{item.value}</li>
           ))}
       </ul>
    </>
  )
}
