import React from 'react'
import {Layout,Menu} from 'antd'
import {useNavigate} from 'react-router-dom'
import { siderMap } from '../../constant/siderMap';
const { Sider } = Layout;


export default function Siders(props) {
    const {collapsed}=props
    const navigate = useNavigate();
    const handleClick=(e)=>{
        console.log('点击了',e.key)
        navigate(e.key,{state:{}})
    }
  return (
    <Sider className='app-sider' trigger={null} collapsible collapsed={collapsed}>
          <div className={collapsed?'app-logo-actived':'app-logo-default'}></div>
           <Menu
             theme='dark'
             mode='inline'
             defaultSelectedKeys={['/']}
             items={siderMap}
             onClick={handleClick}
           >
           </Menu>
        </Sider>
  )
}
