import { BaseController } from './base'
import { UserInfoType } from '../type'

export default class UserController extends BaseController {
  public async info() {
    const { ctx } = this
    // 校验参数。如果参数校验未通过，将会抛出一个 status：422 的异常
    ctx.validate(
      {
        pin: { type: 'string', format: /\d+/, required: true }, // get 请求参数都是字符串，可通过 format 校验字符
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
