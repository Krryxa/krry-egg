import { Service } from 'egg'
import { UserInfoType } from '../type'

/**
 * UserService Service
 */
export default class UserService extends Service {
  /**
   * 获取信息
   * @param user - user info
   */
  public async handleUserInfo(user: UserInfoType) {
    return Object.keys(user).length
      ? `处理好了用户信息。pin：${user?.pin} / 用户名：${user?.name} / 年龄：${user?.age}`
      : '请输入用户信息'
  }
}
