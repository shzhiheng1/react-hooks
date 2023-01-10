import React,{useMemo, memo,useState} from 'react'
import {Typography,List,Divider,Form,Input,InputNumber,Card} from 'antd'



export default function Memo() {
    const memoList=[
        '1.作用类似于Vue中的计算属性,用于缓存，优化性能',
        '2.useMemo主要用来解决使用React hooks产生的无用渲染的性能问题,用来做缓存用',
        '3.useMemo使用场景,只有依赖项发生变化时,重新计算,否则使用缓存的值,类似于Vue中的计算属性',
        '4.结构:useMemo(fn, arr),第一个参数是函数,第二个参数是数组,用于添加依赖项。为空数组[],fn只执行一次',
        '5.memo的作用:当数据变化时,重新渲染,即使子组件数据没有变化,子组件也重新渲染。memo将子组件封装起来,让子组件只有在变化的时候才重新渲染。'
    ]
    const [data]=useState([
        {id:'1',name:'test1'},
        {id:'2',name:'test2'},
        {id:'3',name:'test3'},
        {id:'4',name:'test4'},
    ])
    const [name,setName]=useState('')
    const [age,setAge]=useState(0)
    const handleChange=(e)=>{
       setName(e.target.value)
    }
    const ageChange=(value)=>{
        setAge(value)
    }
    const getList=useMemo(()=>{
        console.log('-----getList重新计算--------')
       return data.filter(item =>{
        if(item.name.includes(name)){
            return item
        }else{
            return ''
        }
       })
    },[name,data])

    const nameAge=useMemo(()=>{
       console.log('-------年龄重新计算------age')
       return `${age}岁`
    },[age])
  return (
    <div>
        <Typography.Title level={2}>
          useMemo的基本使用
        </Typography.Title>
        <List 
           dataSource={memoList}
           bordered
           header={<h3>useMemo的基本用法</h3>}
           renderItem={(item)=>(
            <List.Item>{item}</List.Item>
           )}
        />
       <Divider>示例</Divider>
       <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
       >
      <Form.Item
        label="过滤"
        name="username"
      >
        <Input onChange={(e)=>handleChange(e)} />
      </Form.Item>
      <Form.Item
        label="年龄"
      >
        <InputNumber defaultValue={age} onChange={ageChange} />
      </Form.Item>
    </Form>
    <p>{nameAge}</p>
    <Child2  getList={getList}/>
    </div>
  )
}


function Child(props) {
    console.log('------子组件渲染-------')
    const {getList}=props
    return (
        <div>
            <Card style={{ width: '100%' }}>
                {getList.map(item=>(
                    <p key={item.id}>{item.name}</p>
                ))}
            </Card>
        </div>
    )
}
// 缓存子组件
const Child2=memo(Child)