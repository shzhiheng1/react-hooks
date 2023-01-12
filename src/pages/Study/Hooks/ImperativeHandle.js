import React,{forwardRef,useImperativeHandle,useRef} from 'react'
import {List,Divider,Input, Button} from 'antd'

export default function ImperativeHandle() {
    const data=[
        '1.作用:将子组件仅使用DOM的通过ref暴露给父组件实例。减少子组件DOM暴露。',
        '2.常用forwardRef 一起使用,子组件使用forwardRef包装自己,允许作为函数组件的自己使用ref。',
        '3.useImperativeHandle(ref,()=>({fn:()=>{}})),第一参数ref对象,第二参数返回方法',
        '3.使用步骤:',
        'a.父组件使用useRef(或createRef)创建一个ref对象,将这个ref对象赋给子组件的ref属性.',
        'b.子组件使用forwardRef包装自己，允许作为函数组件的自己使用ref',
        'c.父组件使用创建的ref对象的current属性获取子组件暴露出的状态或方法。'
    ]
    const fancyInputRef=useRef()
    const clickHandle=()=>{
        fancyInputRef.current.focus()
    }
  return (
    <div>
        <List 
           dataSource={data}
           bordered
           header={<h3>useImperativeHandle使用</h3>}
           renderItem={(item)=>(
            <List.Item>{item}</List.Item>
           )}
        >
        </List>
        <Divider>示例</Divider>
        <Button onClick={clickHandle}>父组件调用子组件的方法</Button>
        <FancyInput ref={fancyInputRef} />
    </div>
  )
}

// 子组件
const FancyInput=forwardRef((props,ref)=>{
    const inputRef=useRef();
    useImperativeHandle(ref,()=>{
        return {
            focus:()=>{
                inputRef.current.focus();
            }
        }
    })
    return(
        <Input  ref={inputRef}/>
    )
})


