import React, { useId,useState } from 'react'
import {Card,Divider,Button} from 'antd'

export default function Id() {
    const id=useId()
    const num=Math.random()
    const [count,setCount]=useState(0)
  return (
    <>
        <Card title="useId使用"  >
            <p>作用: 解决客服端和服务端渲染生成无法生成唯一和稳定的id的问题。</p>
            <p>解决重新渲染Math.random()产生一个新值的问题。</p>
            <p>用法: <code>const id = useId();</code></p>
        </Card>
        <Divider>示例</Divider>
        <>
           <label htmlFor={id}>你们公司使用react吗?</label>
           <input id={id} type='checkbox' name='react' />
           <Button onClick={()=>setCount(count+1)}>点击加+{count}</Button>
           <p>useId值为:{id}</p>
           <p>Math.random()值为:{num}</p>
        </>
    </>
  )
}
