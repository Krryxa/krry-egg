import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  router.get('/', controller.home.index)
  // 这种方式可捕获 URL 中的命名参数，注入到 controller ctx.params.x
  router.get('/user/:pin/:name/:age?', controller.user.info)
  // 通过自定义正则来捕获 URL 中的分组参数，放入 ctx.params 中
  // router.get(/^\/package\/([\w-.]+\/[\w-.]+)$/, controller.package.detail)

  // 建议通过 RESTful 风格的 URL 定义。将会自动生成路由。注意 put、DELETE 请求的 url 后面要加上唯一ID：/id
  // 参数：路由名、请求路径、controller
  router.resources('blog', '/blog', controller.blog.list)

  // 挂载鉴权路由
  app.passport.mount('github')
  // 上面的 mount 是语法糖，等价于
  // const github = app.passport.authenticate('github', {});
  // router.get('/passport/github', github);
  // router.get('/passport/github/callback', github);
}
