import React,{useState,useRef,useEffect} from 'react'
import {Typography,List,Divider,Button,Space} from 'antd'

export default function Ref() {
    const dataList=[
        '1.保存一个值在整个生命周期中不变。',
        '2.重新赋值ref.current不会触发重新渲染。',
        '3.react中通过useRef获取页面DOM元素。'
    ]
    const [like,setLike]=useState(0)
    const likeRef=useRef(0)//定义ref值。
    const addLike=()=>{
        setLike(like+1);
    }
    const getLikeRef=()=>{
        // 2.重新赋值ref.current不会触发重新渲染
        likeRef.current=likeRef.current+1;
        console.log(likeRef)
    }
    console.log('-------渲染-----')
    const refDom=useRef(null);
    useEffect(()=>{
        document.title='useRef的使用'
        console.log('refDom',refDom.current)
    })
  return (
    <div>
        <Typography.Title>useRef使用</Typography.Title>
        <List 
          bordered
          dataSource={dataList}
          header={<h3>useRef的作用</h3>}
          renderItem={(item)=>(
            <List.Item>
                {item}
            </List.Item>
          )}
        />
       <Divider>示例</Divider>
       <Space>
          <Button type='primary' onClick={addLike}>点赞{like}</Button>
          <Button type='primary' onClick={getLikeRef}>获取likeRef</Button>
          <p ref={refDom}>获取DOM元素{like}</p>
       </Space>
    </div>
  )
}
