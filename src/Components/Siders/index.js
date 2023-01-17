import React, {useState,useEffect} from 'react'
import {Layout,Menu} from 'antd'
import {useNavigate,useLocation} from 'react-router-dom'
import { siderMap } from '../../constant/siderMap';
const { Sider } = Layout;


export default function Siders(props) {
    const {collapsed}=props
    const [pathname,setPathname]=useState('/')
    // const [openKeys,setOpenKeys]=useState(['/'])
    const navigate = useNavigate();
    const handleClick=(e)=>{
        console.log('点击了',e.key)
        navigate(e.key,{state:{}})
    }
    // 获取当前路由
    const location=useLocation()
    // console.log('--location----',location)
    // 根据当前路由找到打开的菜单
    // const getItem=(data)=>{
    //   console.log('-------进入-------')
    //     for (let index = 0; index < data.length; index++) {
    //       const oItem = data[index];
    //       if(oItem.key===location.pathname){
    //           return [oItem.key]
    //       }else{
    //         if(oItem.children&&oItem.children.length){
    //           const result = getItem(oItem.children)
    //           if(result){
    //             return [oItem.key].concat(result)
    //           }
    //         }
    //       }
          
    //     }
    // }
    useEffect(()=>{
      setPathname(location.pathname)
      // const opens=getItem(siderMap)
      // setOpenKeys(opens)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[location.pathname])
  return (
    <Sider className='app-sider' trigger={null} collapsible collapsed={collapsed}>
          <div className={collapsed?'app-logo-actived':'app-logo-default'}></div>
           <Menu
             theme='dark'
             mode='inline'
             defaultSelectedKeys={['/']}
             items={siderMap}
             onClick={handleClick}
             selectedKeys={[pathname]}
            //  openKeys={openKeys}
            //  defaultOpenKeys={['/']}
           >
           </Menu>
        </Sider>
  )
}
