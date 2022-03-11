import { BaseController } from '../base'

export default class TestModelController extends BaseController {
  /**
   * @description: get 请求：获取列表
   * @param {*}
   * @return {*}
   */
  async index() {
    const { ctx } = this
    ctx.validate(
      {
        pageIndex: { type: 'string', format: /\d+/, required: false },
        pageSize: { type: 'string', format: /\d+/, required: false }
      },
      ctx.query
    )
    const { pageIndex, pageSize } = ctx.query
    const reqData = ctx.helper.filterParams({
      pageIndex,
      pageSize
    })
    const BlogInfo = await ctx.service.testModel.getBlog(reqData)

    this.success(BlogInfo)
  }

  /**
   * @description: get 请求：获取一条数据
   * @param {*}
   * @return {*}
   */
  async show() {
    const { ctx } = this
    ctx.validate(
      {
        id: { type: 'string', format: /\d+/, required: true }
      },
      ctx.params
    )
    const BlogInfo = await ctx.service.testModel.getBlogById(+ctx.params.id)

    this.success(BlogInfo)
  }

  /**
   * @description: post 请求：新增数据
   * @param {*}
   * @return {*}
   */
  async create() {
    const { ctx } = this
    ctx.validate(
      {
        title: { type: 'string', required: true },
        description: { type: 'string', required: false },
        author: { type: 'string', required: true },
        classify: { type: 'number', required: true }
      },
      ctx.request.body
    )
    const { title, description, author, classify } = ctx.request.body
    const reqData = ctx.helper.filterParams({
      title,
      description,
      author,
      classify
    })
    const BlogInfo = await ctx.service.testModel.addBlog(reqData) // 使用模型层添加

    this.success(BlogInfo)
  }
}
