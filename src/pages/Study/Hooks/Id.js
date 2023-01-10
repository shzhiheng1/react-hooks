import React, { useId } from 'react'
import {Card,Divider} from 'antd'

export default function Id() {
    const id=useId()
    console.log('-----id----',id)
  return (
    <>
        <Card title="useId使用"  >
            <p>作用: 解决客服端和服务端渲染生成无法生成唯一和稳定的id的问题。</p>
            <p>用法: <code>const id = useId();</code></p>
        </Card>
        <Divider>示例</Divider>
        <>
           <label htmlFor={id}>你们公司使用react吗?</label>
           <input id={id} type='checkbox' name='react' />
        </>
    </>
  )
}
