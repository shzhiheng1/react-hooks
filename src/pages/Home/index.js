import React from 'react'
import { Image ,Typography,Card} from 'antd';
import './index.css'

const {Title} = Typography

export default function Home() {
  return (
    <>
        <Card
          hoverable
          className='home-card'
          cover={<Image alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Title level={3}>欢迎学习react</Title>
        </Card>
       
    </>
  )
}
