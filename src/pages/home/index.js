import React, { useState, useEffect } from 'react'
import { Input, Menu, Radio } from 'antd'
import { BellOutlined } from '@ant-design/icons'
import { useRequest } from 'ahooks'
import { getTrendList } from '../../services'
import { Item, Footer } from '../../component'
import './index.less'

const menu = (
  <Menu className='menu'>
    <Menu.Item key='0'>
      <a href='http://www.alipay.com/'>个人中心</a>
    </Menu.Item>
    <Menu.Item key='1'>
      <a href='http://www.taobao.com/'>个人设置</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key='3'>退出登录</Menu.Item>
  </Menu>
)

function Home() {
  const [visible, setVisible] = useState(false)
  const [trendList, setTrendList] = useState([])
  const [scenes] = useState(['阿里职场圈', '新零售事业部', '薪资待遇', '工作氛围', '大厂裁员', '内部八卦', '职位招聘'])

  const data = [
    {
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      name: 'xcc',
      time: new Date(),
      isAgree: false,
      content: '今天提拖群翁群翁群翁翁群翁群翁群翁群哇大所大所大多群二群翁王企鹅群翁群翁群翁群翁群翁群翁群翁群翁群翁群翁群翁群翁群翁群翁群无',
      comment: 100,
      like: 666,
    }
  ]

  const { run } = useRequest(getTrendList, {
    manual: true,
    onSuccess(data) {
      setTrendList(data)
    }
  })

  useEffect(() => {
    const query = { 'pageSize': 15, 'pageNum': 1, 'keyword': '' }
    run(query)
  }, [])

  return (
    <div className='page-layout-home'>
      <nav className='header'>
        <div className='header-content'>
          <div className='header-logo'>xxx</div>
          <div className='header-search'>
            <Input className='search' placeholder='搜企业' />
          </div>
          <div className='header-operat'>
            <div className='home'>首页</div>
            <div className='news'>
              <BellOutlined />
            </div>
            <div className='user'>
              <div onClick={() => setVisible(!visible)}>
                <img className='avator' src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                <span>Leao</span>
              </div>
              {visible ? (
                <div className='menu'>
                  <div className='item'>个人信息</div>
                  <div className='item'>注册/登录</div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
      <main className='content'>
        <div className='tags'>
          <Radio.Group value={0}>
            {scenes.map((item, i) => {
              return <Radio.Button value={i}>{item}</Radio.Button>
            })}
          </Radio.Group>
        </div>
        {data.map(item => {
          return <Item {...item} />
        })}
      </main>
      <Footer />
    </div>
  )
}

export default Home
