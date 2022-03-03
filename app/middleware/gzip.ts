const isJSON = require('koa-is-json')
const zlib = require('zlib')

// 两个参数
// options: 中间件的配置项，框架会将 app.config[${middlewareName}] 传递进来。
// app: 当前应用 Application 的实例。
export default (options) => {
  return async function gzip(ctx, next) {
    // 当一个中间件调用 next() 则该函数暂停并将控制传递给定义的下一个中间件
    // 当在下游没有更多的中间件执行后，堆栈将展开并且每个中间件恢复执行其上游行为。 这就是洋葱模型
    await next()

    // 后续中间件执行完成后将响应体转换成 gzip
    let body = ctx.body
    if (!body) return

    console.log('请求体长度：', ctx.length)
    // 支持 options.threshold。当 body 大于配置的 threshold 时才进行 gzip 压缩
    if (options.threshold && ctx.length < options.threshold) return

    if (isJSON(body)) body = JSON.stringify(body)

    // 设置 gzip body，修正响应头
    const stream = zlib.createGzip()
    stream.end(body)
    ctx.body = stream
    ctx.set('Content-Encoding', 'gzip')
  }
}
