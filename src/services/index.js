import { request } from '../utils/request'

/**
 * 注册
 */
export function getRegister (params) {
  return request.post('/user/register', { ...params })
}

/**
 * 登录
 */
export function getUserInfo (params) {
  return request.post('/user/login', { ...params })
}

/**
 * 退出登录
 */
export function getLogout (params) {
  return request.post('/user/logout', { ...params })
}

/**
 * 获取用户信息
 */
export function getUsers (params) {
  return request.post('/user/get', { ...params })
}

/**
 * 获取用户昵称、头像等画像信息
 */
export function getUsersInfo (params) {
  return request.post('/user/info/get', { ...params })
}

/**
 * 文件上传，表单提交
 */
export function getUpload (params) {
  return request.post('/file/upload', { ...params })
}

/**
 * 用户画像信息编辑
 */
export function getUsersEdit (params) {
  return request.post('/user/info/edit', { ...params })
}

/**
 * 获取用户匿名信息
 */
export function getUsersAnonymity (params) {
  return request.post('/user/anonymity/get', { ...params })
}

/**
 * 发布动态
 */
export function getProposalAdd (params) {
  return request.post('/proposal/add', { ...params })
}


/**
 * 获取动态列表
 */
export function getTrendList (params) {
  return request.post('/proposal/page', { ...params })
}

/**
 * 评论动态
 */
export function getRespondAdd (params) {
  return request.post('/respond/add', { ...params })
}

/**
 * 点赞
 */
export function getAgreeCommit (params) {
  return request.post('/agree/commit', { ...params })
}

/**
 * 评论列表
 */
export function getRespondPage (params) {
  return request.post('/respond/page', { ...params })
}

/**
 * 回复
 */
export function getReplyAdd (params) {
  return request.post('/reply/add', { ...params })
}
