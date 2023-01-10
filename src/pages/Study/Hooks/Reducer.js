import React,{useReducer,useContext,createContext} from 'react'
import {Divider,List,Form,Button,Input,Radio,Space,message} from 'antd'


const ContextNumber=createContext()

export default function Reducer() {
    const [messageApi,contextHolder]=message.useMessage();
    const data=[
        '1.useReducer是useState的替代方案。是useState在复杂场景的使用。',
        '2.useState + useContext 结合实现 redux 数据管理效果。',
        '3.使用方法: const [state, dispatch] = useReducer(reducer, initialState);'
    ]
    const plainOptions=['汉族','其他']
    //1.定义 initialState
    const initFormData={
        name:'',
        age:18,
        ethnicity:'汉族'
    }
    // 2.定义reducer
    const reducer=(state,action)=>{
        switch (action.type) {
            // 更新
            case 'update':
                return {...state,...action.formData}  
                //重置
            case 'reset':
                return initFormData        
            default:
                throw new Error();
        }
    }
    // 使用useReducer
    const [formData,dispatch]=useReducer(reducer,initFormData)
    // 重置
    const onReset=()=>{
        dispatch({type:'reset'})
    }
    // 提交
    const onCommit=()=>{
        messageApi.info('提交结果为：'+JSON.stringify(formData))
    }
    /**************实例二**************/ 
    const store={
        n: 0,
        m: 0,
        p: 0,
    }
    const reducerNumbers=(state,action)=>{
       switch (action.type) {
        case 'setN':
            return {...state,n:state.n+action.number}   
        case 'setM':
            return {...state,m:state.m+action.number}   
        case 'setP':
            return {...state,p:state.p+action.number}       
        default:
            throw new Error()
       }
    }
    const [stateNumbers,dispatchNumbers]=useReducer(reducerNumbers,store)
  return (
    <div>
        {contextHolder}
        <Divider>useReducer使用</Divider>
        <List
           bordered
           dataSource={data}
           header={<h2>useReducer作用和用法</h2>}
           renderItem={(item)=>(
            <List.Item>{item}</List.Item>
           )}
        ></List>
        <Divider>示例1.作用类似于useState</Divider>
        <Form     
        >
        <Form.Item
            label="姓名："      
        >
            <Input value={formData.name} onChange={(e)=>{
                dispatch({type:'update',formData:{name:e.target.value}})
            }}/>
        </Form.Item>

        <Form.Item
            label="年龄："
        >
            <Input type='number' value={formData.age} onChange={(e)=>{
                dispatch({type:'update',formData:{age:e.target.value}})
            }}
            />
        </Form.Item>

        <Form.Item
            label="民族："
        >
            <Radio.Group options={plainOptions}  value={formData.ethnicity} onChange={
                (e)=>{
                    dispatch({type:'update',formData:{ethnicity:e.target.value}})
                }
            }
            />
        </Form.Item>

        <Form.Item>
            <Space>
                <Button type="primary" onClick={onCommit} >
                    提交
                </Button>
                <Button onClick={onReset}>
                    重置
                </Button>
            </Space>
            
        </Form.Item>
        </Form>
    {JSON.stringify(formData)}
    <Divider>示例2.useState + useContext 结合实现 redux 数据管理效果</Divider>
       <div>
          <ContextNumber.Provider value={{stateNumbers,dispatchNumbers}}>
            <N />
            <M />
            <P />
          </ContextNumber.Provider>
       </div>
    </div>
  )
}

// 用于测试的各个组件
function N() {
    const {stateNumbers,dispatchNumbers}=useContext(ContextNumber)
    return(
        <div>
            <h3>N组件</h3>
            <p>{JSON.stringify(stateNumbers)}</p>
            <Button onClick={()=>{
                dispatchNumbers({type:'setN',number:1})
            }}>N+1</Button>
            <Divider dashed/>
        </div>
    )
}
function M() {
    const {stateNumbers,dispatchNumbers}=useContext(ContextNumber)
    return(
        <div>
            <h3>M组件</h3>
            <p>{JSON.stringify(stateNumbers)}</p>
            <Button onClick={()=>{
                dispatchNumbers({type:'setM',number:2})
            }}>M+2</Button>
            <Divider dashed/>
        </div>
    )
}
function P() {
    const {stateNumbers,dispatchNumbers}=useContext(ContextNumber)
    return(
        <div>
            <h3>P组件</h3>
            <p>{JSON.stringify(stateNumbers)}</p>
            <Button onClick={()=>{
                dispatchNumbers({type:'setP',number:3})
            }}>P+3</Button>
        </div>
    )
}