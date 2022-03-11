import { Service } from 'egg'

/**
 * BlogService Service
 */
export default class BlogService extends Service {
  /**
   * 根据主键查询一条数据
   * @param blog - blog info
   */
  async getBlogById(id) {
    // mysql 查询
    const result = await this.app.mysql.select('blogs', {
      where: { id }
    })

    return { result }
  }

  /**
   * 查询列表
   * @param blog - blog info
   */
  async getBlog(params) {
    // mysql 分页查询
    const result = await this.app.mysql.select('blogs', {
      limit: +params.pageSize, // 返回数据量
      offset: (+params.pageIndex - 1) * params.pageSize // 数据偏移量
    })

    // redis
    // redis 存对象：采用序列化 或 json 字符串
    await this.app.redis.set('blog', JSON.stringify(result))
    // redis 查询
    const redisResult = await this.app.redis.get('blog')

    return { result, redisResult: JSON.parse(redisResult ?? '{}') }
  }

  /**
   * 新增博客
   * @param blog - blog info
   */
  async addBlog(blog) {
    // 插入数据库
    console.log('新增博客', blog)
    const result: any = await this.app.mysql.insert('blogs', blog)
    return {
      message: '新增成功',
      result: {
        id: result.insertId
      }
    }
  }

  /**
   * 修改博客
   * @param blog - blog info
   */
  async updateBlog(blog) {
    // 插入数据库
    console.log('编辑博客', blog)
    return {
      message: '编辑成功',
      result: {
        ...blog
      }
    }
  }

  /**
   * 删除博客
   * @param id - id
   */
  async deleteBlog(id) {
    // 插入数据库
    console.log('删除博客', id)
    return {
      message: '删除成功',
      result: {
        id
      }
    }
  }
}
