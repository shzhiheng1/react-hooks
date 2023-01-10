import './App.css';
import {Route,Routes} from 'react-router-dom'
import routers from './routers'
import React,{useState} from 'react'
import {Layout,Button} from 'antd'
import {MenuFoldOutlined,MenuUnfoldOutlined} from '@ant-design/icons'
import Siders from './Components/Siders'
import './Components/Siders/index.css'
const { Header,Content ,Footer} = Layout;
function App() {
  const [collapsed,setCollapsed] =useState(false)
    const toggleCollapsed=()=>{
      setCollapsed(!collapsed)
    }
  return (
    <div className="App">
       <Layout style={{minHight:'100vh'}}>
      {/* 左边栏 */}
         <Siders collapsed={collapsed}/>
         {/* 中间 */}
         <Layout>
          {/* 头部 */}
          <Header className='app-layout-header'>
             <Button type='primary' onClick={toggleCollapsed}>
                {collapsed?<MenuUnfoldOutlined/>:<MenuFoldOutlined />}
             </Button>
          </Header>
          {/* 内容 */}
          <Content className='app-layout-content'>
                <Routes>
                {
                    routers.map((item,index)=>{
                      return (
                        <Route key={index} exact path={item.path} element={<item.component></item.component>}></Route>
                      )
                    })
                  }
                </Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2022 Created by  石先生</Footer>
         </Layout>
    </Layout>
    </div>
  );
}

export default App;
