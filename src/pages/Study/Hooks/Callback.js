import React,{useState,memo,useCallback} from 'react'
import {Divider,Collapse,Button,Modal,message} from 'antd'


export default function Callback() {
  const [messageApi, contextHolder] = message.useMessage();

    const dataList=[
        {
            id:'1',
            title:'useCallback使用',
            children:[
              '1.父子组件函数式传参,使用useCallback配合memo,子组件收到的参数不变,自然也不会更新,从而减少了组件间不必要的更新。作用类似于类组件的shouldComponentUpdate。',
              '2.写法和useMemo类似,useCallback(fn,[n]),参数fn回调函数,参数n是依赖项'
            ]
        },
        {
            id:'2',
            title:'useCallback与useMemo的共同点:',
            children:[
              '1.useCallback和useMemo,接收的参数相同，第一个参数是回调函数，第二参数是依赖项。',
              '2.仅仅在依赖项发生变化的时候才重新render,也就是起到缓存的作用。'
            ]
        },
        {
            id:'3',
            title:'useCallback与useMemo的不同点:',
            children:[
              '1.useMemo 计算结是return 回来的值，主要用于缓存结果的值，场景:如需要计算状态',
              '2.useCallback 计算结果 return的是函数，主要用于缓存函数，场景：需要缓存函数，每个state变化都被重新render，为没有必要重新render组件添加。',
              '3.不要滥用。仅仅在减少重复render次数和缓存计算结果时使用'
            ]
        },
    ]
    const [isopen,setIsopen]=useState(false)
    const [count,setCount]=useState(0)
    const showModel=useCallback(()=>{
      console.log('-------open-------')
      return setIsopen(true)
    },[])
    const handleOk = useCallback(()=>{
      console.log('-------close-------')
      return setIsopen(false)
    },[]);

    const addCount=()=>{
      setCount(count+1)
      messageApi.open({
        type: 'success',
        content: 'count变化,子组件MemoModal被缓存,未重新render.',
        duration: 3,
      });
    }
  return (
    <div>
        <Divider orientation='left'>useCallback使用</Divider>
        <Collapse>
            {
                dataList.map((item)=>(
                  <Collapse.Panel header={item.title} key={item.id}>
                    {
                        item.children.map((Item,index)=>(
                            <p key={index}>{Item}</p>
                        ))
                    } <p></p>
                  </Collapse.Panel>
                ))
            }
            
        </Collapse>
        <Divider orientation='left'>示例</Divider>
        <div>
           {contextHolder}
           <Button type='primary' onClick={addCount}> count++---{count}</Button>
           <MemoModal isopen={isopen} handleOk={handleOk}  showModel={showModel}/>
        </div>
    </div>
  )
}

const MemoModal=memo((props)=>{
  console.log('-------MemoModal组件render------')
  const {isopen,handleOk,showModel}=props
  return (
    <>
      <Button type='primary' onClick={showModel} >打开modal</Button>
      <Modal title="Basic Modal" open={isopen} onCancel={handleOk} onOk={handleOk}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
})