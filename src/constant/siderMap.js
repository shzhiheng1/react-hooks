import {UserOutlined,VideoCameraOutlined,UploadOutlined} from '@ant-design/icons'

export const siderMap=[
    {
        key: '/',
        icon: <UploadOutlined />,
        label: '首页',
    },
    {
        key: 'Study',
        icon: <VideoCameraOutlined />,
        label: '学习',
        children:[
          {
            key:'Study-Hooks',
            label:'Hooks相关',
            children:[
              {
                key:'/hooks/effect',
                label:'useEffect使用'
              },
              {
                key:'/hooks/memo',
                label:'useMemo使用'
              },
              {
                key:'/hooks/callback',
                label:'useCallback使用'
              },
              {
                key:'/hooks/ref',
                label:'useRef使用'
              },
              {
                key:'/hooks/context',
                label:'useContext使用'
              },
              {
                key:'/hooks/reducer',
                label:'useReducer使用'
              },
              {
                key:'/hooks/transition',
                label:'useTransition使用'
              },
              {
                key:'/hooks/id',
                label:'useId使用'
              },
            ]
          }
        ]
      },
    {
      key: 'About',
      icon: <UserOutlined />,
      label: '测试功能',
      children:[
        {
          key:'/about',
          label:'其他'
        }
      ]
    },
    
    
  ]

  