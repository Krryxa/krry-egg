import { Controller } from 'egg'

export class BaseController extends Controller {
  success(data) {
    // 设置通用返回逻辑
    const { ctx } = this
    ctx.body = data
  }
}
