import { BaseController } from './base'
import { UserInfoType } from '../type'

export default class UserController extends BaseController {
  public async info() {
    const { ctx } = this
    // 校验参数
    ctx.validate(
      {
        pin: { type: 'string', required: true },
        name: { type: 'string', required: true },
        age: { type: 'string', required: false }
      },
      ctx.params
    )
    // 解构参数
    const { pin, name, age } = ctx.params
    // 编写框架扩展，过滤空参数方法
    const reqData: UserInfoType = ctx.helper.filterParams({
      pin,
      name,
      age
    })
    const userInfo = await ctx.service.user.handleUserInfo(reqData)

    // 使用 BaseController 的通用返回方法
    this.success(userInfo)
  }
}
