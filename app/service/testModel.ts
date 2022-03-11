import { Service } from 'egg'

/**
 * TestModelService Service
 */
export default class TestModelService extends Service {
  /**
   * 查询博客，通过 模型层 查询
   * @param params
   */
  async getBlog(params) {
    const { ctx } = this
    const query = {
      limit: +params.pageSize, // 返回数据量
      offset: (+params.pageIndex - 1) * params.pageSize // 数据偏移量
    }
    const result = await ctx.model.Blog.findAll(query)

    return { result }
  }

  /**
   * 根据主键 id 查询博客，通过 模型层 查询
   * @param id
   */
  async getBlogById(id) {
    const { ctx } = this
    const result = await ctx.model.Blog.findByPk(id)

    return { result }
  }

  /**
   * 新增博客，通过 模型层 添加
   * @param blog - blog info
   */
  async addBlog(blog) {
    const { ctx } = this
    const result = await ctx.model.Blog.create(blog)
    return {
      message: '新增成功',
      result: {
        id: result.dataValues.id
      }
    }
  }
}
