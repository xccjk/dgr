import React from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import './index.less'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-title'>你关注的都在这里</div>
      <div className='logo'>打工人</div>
      <Avatar shape='square' className='code' size={70} icon={<UserOutlined />} />
      <div className='desc'>浙江省杭州市西湖区</div>
    </footer>
  )
}

export default Footer
