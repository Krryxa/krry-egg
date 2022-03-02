import { Controller } from 'egg'

export class BaseController extends Controller {
  /**
   * @description: 定义响应格式
   * @param {*} data
   * @return {*}
   */  
  success(data) {
    const { ctx, logger } = this
    try {
      if (data.result) {
        ctx.body = {
          code: 0,
          ...data
        }
      } else if (data.error) {
        ctx.body = {
          code: data.error.code,
          message: data.error.message,
          ...data
        }
      } else {
        ctx.body = {
          message: 'response format error',
          ...data
        }
        ctx.status = 500
      }
    } catch (err) {
      logger.error('[output response error]: %s', err)
      ctx.body = data
      ctx.status = 500
    }
  }
}
