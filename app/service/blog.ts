import { Service } from 'egg'

/**
 * BlogService Service
 */
export default class BlogService extends Service {
  /**
   * 获取信息
   * @param blog - blog info
   */
  async getBlog(blog) {
    // 由于对 MySQL 数据库的访问操作属于 Web 层中的数据处理层，因此我们强烈建议将这部分代码放在 Service 层中维护
    const result = await this.app.mysql.select('revise', {
      where: { id: blog.id }
    })
    // redis 测试。redis 存对象：采用序列化 或 json 字符串
    await this.app.redis.set('blog', JSON.stringify(result))
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
    const result: any = await this.app.mysql.insert('revise', blog)
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
