import { BaseController } from '../base'

export default class UserController extends BaseController {
  /**
   * @description: 登录接口，生成 token
   * @param {*}
   * @return {*}
   */
  async login() {
    const { ctx, app } = this
    ctx.validate(
      {
        username: { type: 'string', required: true },
        password: { type: 'string', required: true }
      },
      ctx.request.body
    )
    const { username } = ctx.request.body

    // 验证账号密码是否正确
    // ...
    // 正确则登录成功
    // 生成 token
    const token = app.jwt.sign(
      {
        username // 保存的用户数据，可通过 ctx.state.user 获取
      },
      app.config.jwt.secret,
      {
        expiresIn: 60 * 60 * 24 + 's' // 设置过期时间 24 小时
      }
    )
    // 将生成的 token 返回到前端
    this.success({
      result: token
    })
  }

  /**
   * @description: 需要登录校验的页面接口。调用时 header 需要传递 token：'Authorization': 'Bearer ${token}'。token 就是上面 login 接口生成的
   * @param {*}
   * @return {*}
   */
  async list() {
    const { ctx } = this
    console.log('查看当前登录用户：', ctx.state.user)

    this.success({
      result: '验证成功，有权限做其他事了'
    })
  }
}
