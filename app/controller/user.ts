import { BaseController } from './base'
import { UserInfoType } from '../type'
const ms = require('ms')

export default class UserController extends BaseController {
  async info() {
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

  // 由于浏览器和其他客户端实现的不确定性，为了保证 Cookie 可以写入成功，建议 value 通过 base64 编码或者其他形式 encode 之后再写入。
  // 由于浏览器对 Cookie 有长度限制限制，所以尽量不要设置太长的 Cookie。一般来说不要超过 4093 bytes。当设置的 Cookie value 大于这个值时，框架会打印一条警告日志。
  async testCookie() {
    const { ctx } = this
    let count: any = ctx.cookies.get('count')
    count = count ? Number(count) : 0
    ctx.cookies.set('count', String(++count), {
      // httpOnly: true // 默认就是 true
      // encrypt: true // 加密传输
    })
    ctx.body = '测试cookie：' + count

    // remove cookie
    // ctx.cookies.set('count', null);
  }

  async testSession() {
    const { ctx } = this
    const { id, username, rememberMe } = ctx.request.body
    const user = {
      id,
      username
    }
    // 设置 Session
    ctx.session.user = user
    // 如果用户勾选了 `记住我`，设置 30 天的过期时间
    if (rememberMe) ctx.session.maxAge = ms('30d')

    ctx.session.visited = ctx.session.visited ? ctx.session.visited + 1 : 1

    ctx.body = { 测试session: user, 访问次数: ctx.session.visited }

    // remove cookie
    // ctx.cookies.set('count', null);
  }
}
