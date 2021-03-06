import React, { useState } from 'react'
import { Space, Avatar, Tag, Form, Button, Input } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons'
import './index.less'

const { TextArea } = Input

const IconText = ({ icon, text, onClick }) => (
  <Space onClick={onClick}>
    {React.createElement(icon)}
    {text}
  </Space>
)

const Title = ({ name, isAgree }) => (
  <div className='title'>
    <span>{name}</span>
    <Tag className='tag'>{isAgree ? '匿名' : '认证'}</Tag>
  </div>
)

const Text = ({ content }) => (
  <p className='text'>{content}</p>
)

const Btns = ({ like, agreeNums }) => (
  <div className='btns'>
    <IconText icon={LikeOutlined} text={like} key='list-vertical-like-o' />
    <IconText icon={StarOutlined} text={agreeNums ? '查看回复' : '回复'} key='list-vertical-message' />
  </div>
)

const data = [
  {
    'id': 7,
    'proposalId': 4,
    'username': '杭州职友4',
    'type': 1,
    'content': '评论xxxx2',
    'agreeNums': 0,
    'isAgree': false
  },
  {
    'id': 6,
    'proposalId': 4,
    'username': '杭州职友4',
    'type': 1,
    'content': '评论xxxx1',
    'agreeNums': 0,
    'isAgree': false
  },
  {
    'id': 5,
    'proposalId': 4,
    'username': '杭州职友4',
    'type': 1,
    'content': '评论xxxx',
    'agreeNums': 1,
    'isAgree': false,
    'replies': [
      {
        'id': 4,
        'username': '杭州职友4',
        'respondId': 5,
        'pid': 2,
        'content': '回复回复',
        'agreeNums': 0,
        'isAgree': false
      },
      {
        'id': 3,
        'username': '杭州职友4',
        'respondId': 5,
        'pid': 2,
        'content': '回复回复',
        'agreeNums': 0,
        'isAgree': false
      },
      {
        'id': 2,
        'username': '杭州职友4',
        'respondId': 5,
        'pid': 0,
        'content': '回复评论',
        'agreeNums': 0,
        'isAgree': false
      }
    ]
  }
]

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType='submit' loading={submitting} onClick={onSubmit} type='primary'>
        发布
      </Button>
    </Form.Item>
  </>
)

function Item(props) {
  const [id, setId] = useState(null)
  const [replyId, setReplyId] = useState(null)
  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='trend-item'>
      <Avatar src={props.avatar || ''} className='avatar' />
      <div className='content'>
        <Title {...props} />
        <div className='time'>{`${props.time} 发布`}</div>
        <Text {...props} />
        <Btns {...{ comment: 100, like: 88, agreeNums: 3 }} />
        <div className='comment'>
          <div className='comment-header'>
            <div className='comment-header-title'>123条评论</div>
            <div className='comment-header-options'>
              <span>时间倒序</span>
              |
              <span>热评倒序</span>
            </div>
          </div>
          <div className='comment-content'>
            {data.map(item => {
              return (
                <div className='item'>
                  <div className='item-meta'>
                    <Title {...{ name: item.username, isAgree: item.isAgree }} />
                    <div>10分钟前</div>
                  </div>
                  <Text {...{ content: item.content }} />
                  <div className='btns'>
                    <IconText icon={LikeOutlined} text='88' key='list-vertical-like-o' />
                    <IconText icon={StarOutlined} text={item.agreeNums ? '查看回复' : '回复'} onClick={() => item.agreeNums ? setId(item.id) : null} key='list-vertical-message' />
                  </div>
                  {item.id === id ? (
                    <div className='replie'>
                      {item.replies?.map(list => {
                        return (
                          <div className='reply'>
                            <div className='text'>{`${list.username}: ${list.content}`}</div>
                            <div className='footer'>
                              <div className='btns'>
                                <IconText icon={LikeOutlined} text='88' key='list-vertical-like-o' />
                                <IconText icon={StarOutlined} text={isEdit ? '取消回复' : '回复'} onClick={() => setReplyId(list.id)} key='list-vertical-message' />
                              </div>
                              <div>10分钟前</div>
                            </div>
                            {replyId === list.id ? (
                              <Editor />
                            ) : null}
                          </div>
                        )
                      })}
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
