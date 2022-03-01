import { BaseController } from '../base'

export default class ListController extends BaseController {
  public async index() {
    const { ctx } = this
    // 校验参数
    ctx.validate(
      {
        id: { type: 'string', required: true },
        title: { type: 'string', required: false }
      },
      ctx.query
    )
    // 解构参数
    const { id, title } = ctx.query
    // 编写框架扩展，过滤空参数方法
    const reqData = ctx.helper.filterParams({
      id,
      title
    })
    const userInfo = await ctx.service.blog.handleBlogList(reqData)

    // 使用 BaseController 的通用返回方法
    this.success(userInfo)
  }
}
