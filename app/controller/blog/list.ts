import { BaseController } from '../base'

export default class ListController extends BaseController {
  /**
   * @description: get 请求：获取列表
   * @param {*}
   * @return {*}
   */
  async index() {
    const { ctx } = this
    ctx.validate(
      {
        id: { type: 'string', format: /\d+/, required: true },
        title: { type: 'string', required: false }
      },
      ctx.query
    )
    const { id, title } = ctx.query
    const reqData = ctx.helper.filterParams({
      id,
      title
    })
    const BlogInfo = await ctx.service.blog.handleBlogList(reqData)

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
    const BlogInfo = await ctx.service.blog.addBlog(reqData)

    this.success(BlogInfo)
  }

  /**
   * @description: put 请求：更新数据。请求 url 需要在后面附带唯一 ID：http://127.0.0.1:7001/blog/1
   * @param {*}
   * @return {*}
   */
  async update() {
    const { ctx } = this
    ctx.validate(
      {
        id: { type: 'number', required: true },
        title: { type: 'string', required: false },
        description: { type: 'string', required: false },
        classify: { type: 'number', required: false }
      },
      ctx.request.body
    )
    const { id, title, description, classify } = ctx.request.body
    const reqData = ctx.helper.filterParams({
      id,
      title,
      description,
      classify
    })
    const BlogInfo = await ctx.service.blog.updateBlog(reqData)

    this.success(BlogInfo)
  }

  /**
   * @description: DELETE 请求：删除数据。请求 url 需要在后面附带唯一 ID：http://127.0.0.1:7001/blog/1
   * @param {*}
   * @return {*}
   */
  async destroy() {
    const { ctx } = this
    ctx.validate(
      {
        id: { type: 'number', required: true }
      },
      ctx.request.body
    )
    const { id } = ctx.request.body

    const BlogInfo = await ctx.service.blog.deleteBlog(id)

    this.success(BlogInfo)
  }
}
