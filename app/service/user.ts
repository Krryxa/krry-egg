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
  async handleUserInfo(user: UserInfoType) {
    const resData = Object.keys(user).length ? user : {
      message: '信息为空'
    }
    return {
      result: {
        ...resData
      }
    }
  }
}
