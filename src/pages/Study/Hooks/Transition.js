import React ,{useState,useTransition} from 'react'
import {List,Divider,Input} from 'antd'


export default function Transition() {
    const dataList=[
        '1.过渡更新(执行的优先级被降低)，减少重复渲染次数。',
        '2.与防抖比较类似，常用在远程收搜。',
        '3.用法: const [isPadding,startTransition] =useTransition()'
    ]
    const [value, setValue] = useState('');
  const [searchQuery, setSearchQuery] = useState([]);
  const [loading, startTransition] = useTransition();

  const handleChange = (e) => {
    setValue(e.target.value);
    // 延迟更新
    startTransition(() => {
      setSearchQuery(Array(20000).fill(e.target.value));
    });
  }

  return (
    <div>
         <List 
          bordered
          dataSource={dataList}
          header={<h3>useTransition的作用</h3>}
          renderItem={(item)=>(
            <List.Item>
                {item}
            </List.Item>
          )}
        />
        <Divider>示例</Divider>
        <>
        <Input value={value} onChange={handleChange} />
            {loading ? (
              <p>loading...</p>
            ) : (
              searchQuery.map((item, index) => <p key={index}>{item}</p>)
            )}

        </>
    </div>
  )
}
