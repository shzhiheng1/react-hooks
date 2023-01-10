import React,{useState,useContext,createContext} from 'react'
import {Divider,List,Button} from 'antd'

   // 1.创建content
const CountContext=createContext()
export default function Context() {
    const data=[
        '1.实现跨组件传递数据,实现数据共享。',
        '2.useContext:解决组件间传值的问题，',
        '3.redux:统一管理应用状态，',
        '4.所以，我们可以使用useContext结合useReducer来模拟一个小型的redux，但是不能取代redux。'
    ]
    const steps=[
        '第一步:创建:const CountContext=createContext()上下文对象。',
        '第二步: 父组件中提供数据:CountContext.Provider',
        '第三步:子组件中接收数据:const count=useContext(CountContext)'
    ]

    const [count,setCount]=useState(0)
    const handleClick=()=>{
        setCount(count+1)
    }
 
  return (
    <div>
       <Divider>useContext使用</Divider>
       <List
         bordered
         header={<h2>useContext作用</h2>}
         dataSource={data}
         renderItem={(item)=>(
            <List.Item>
                {item}
            </List.Item>
         )}
       ></List>
       <List
         bordered
         header={<h2>useContext用法</h2>}
         dataSource={steps}
         renderItem={(item)=>(
            <List.Item>
                {item}
            </List.Item>
         )}
       ></List>
       <Divider>示例</Divider>
       <div>
           <p>父组件数量：{count}</p>
           <Button type='primary' onClick={handleClick}>点击加1</Button>
           {/* 第二步.提供数据*/}
           <CountContext.Provider value={count}>
              <Person />
           </CountContext.Provider>
       </div>
    </div>
  )
}

const Person=()=>{
    return (
       <Child />
    )
}
const Child=()=>{
    // 第三步接收数据
    const count=useContext(CountContext)
    return (
        <div>孙组件接收爷组件的传递的数量{count}</div>
    )
}
