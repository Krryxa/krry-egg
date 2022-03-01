import { Service } from 'egg'

const blogMap = {
  1: {
    title: 'JavaScript 相关的工具代码',
    description: '记录一些 js 常用的工具代码',
    author: 'Krry'
  },
  2: {
    title: 'Vue3.2 实现 Web Components',
    description: 'vue3.2 新特性之一',
    author: 'Krry'
  },
  3: {
    title: 'Pinia 实践：更优雅、更灵活',
    description: '使用 Pinia 之后，项目开发得更加悠然，代码更优雅、更灵活~',
    author: 'Krry'
  }
}

/**
 * BlogService Service
 */
export default class BlogService extends Service {
  /**
   * 获取信息
   * @param blog - blog info
   */
  public async handleBlogList(blog) {
    return blogMap[blog.id]
  }

  /**
   * 新增博客
   * @param blog - blog info
   */
  public async addBlog(blog) {
    // 插入数据库
    console.log('新增博客', blog)
    return {
      message: '新增成功',
      blog
    }
  }

  /**
   * 修改博客
   * @param blog - blog info
   */
  public async updateBlog(blog) {
    // 插入数据库
    console.log('编辑博客', blog)
    return {
      message: '编辑成功',
      blog
    }
  }

  /**
   * 删除博客
   * @param id - id
   */
  public async deleteBlog(id) {
    // 插入数据库
    console.log('删除博客', id)
    return {
      message: '删除成功',
      id
    }
  }
}
