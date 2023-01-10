import React,{useEffect,useState,useLayoutEffect} from 'react'
import { Typography,List,Button} from 'antd';
const { Title,Text } = Typography;


export default function Effect() {
  const effectList=[
   'useEffect 在浏览器渲染完成后执行',
   ' 一、作为 componentDidMount 使用，[] 作第二个参数，首次进入页面触发。',
   '二、可以作为componentDidUpdate 使用，[n]可指定依赖，依赖首次进入页面和依赖项更新时触发',
   '三、可以作为 componentWillUnmount 使用，通过 return 一个函数，组件变化包括销毁前触发，但不包括首次',
   '四、第二个参数不传，componentDidMount和componentDidUpdate，首次和任何state变化都会触发',
   '注意：React v18版本以后React.StrictMode严格模式下的dev开发环境,useEffect会触发两次,生成环境只执行一次，不喜欢可以注释掉'
   ]
   const layouteffectList=[
      'useEffect 在浏览器渲染完成后执行,不会阻塞DOM的更新',
      'useLayoutEffect 在浏览器渲染前执行,会阻塞DOM的更新',
      'useEffect当改变屏幕内容时可能会产生闪烁',
      'useLayoutEffect不会产生闪烁',
      '注意：useLayoutEffect总是比useEffect先执行,useLayoutEffect里的任务最好影响了Layout,为了用户体验，优先使用useEffect'
   ]

   let [count,setCount]=useState(0)
   useEffect(()=>{
     console.log('-----componentDidMount---')
   },[])
   useEffect(()=>{
    console.log('-----componentDidMount和依赖项count变化时触发---')
  },[count])
  useEffect(()=>{
    console.log('-----第二参数未传，任何state变化都会触发。---')
  })
  useEffect(()=>{
    return () => {
      console.log("------componentWillUnmount----");
    }; 
  })

  useLayoutEffect(()=>{
    console.log('-------useLayoutEffect-------')
  })
  const handleClick=()=>{
    setCount(count+1)
  }
  return (
    <div>
        <Title level={2}>useEffect作用:可以在生命周期中执行副作用操作</Title>
        <List
          header={<div>用途</div>}
          bordered
        >
          {
            effectList.map((item,index)=>{
              return (
                index===effectList.length-1?
                <List.Item key={index}><Text  type='danger'>{item}</Text></List.Item>:
                <List.Item key={index}><Text type="success">{item}</Text></List.Item>
              )
            })
          }

        </List>
        <div style={{marginTop:'10px',marginBottom:'10PX'}}>
           <Button type='primary' onClick={handleClick}>加一{count}</Button>
        </div>
        <List
          dataSource={layouteffectList}
          header={<Title level={3}>useEffect与useLayoutEffect区别</Title>}
          bordered
          renderItem={(item) => (
              <List.Item>
                {item}
              </List.Item>
            )}
        />

    </div>
  )
}
