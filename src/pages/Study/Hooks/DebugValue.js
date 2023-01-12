import React,{useState,useDebugValue} from 'react'
import {Divider,Button} from 'antd'


export default function DebugValue() {
    const [count,setCount]=useMyCount(10)
  return (
    <div>
        <h3>uesDebugValue作用</h3>
        <p>可用于在 React 开发者工具中显示自定义 hook 的标签，便于调试</p>
        <p>不推荐你向每个自定义 Hook 使用 useDebugValue，只有自定义 Hook 被复用时才最有意义。</p>
        <Divider>示例</Divider>
        <Button onClick={()=>setCount()}>自定义hook:{count}</Button>
    </div>
  )
}

// 自定义hook
function useMyCount(num) {
    const [count,setCount]=useState(num||0)
    useDebugValue('测试自定义hook');
    const myCount=()=>{
        setCount(count+2)
    }
    return [count,myCount]
}
