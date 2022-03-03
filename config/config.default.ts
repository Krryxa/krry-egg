import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1646105925786_4766'

  // add your egg config in here
  config.middleware = ['gzip']
  // 配置 gzip 中间件的配置
  config.gzip = {
    // enable：控制中间件是否开启。
    // match：设置只有符合某些规则的请求才会经过这个中间件。例如只针对 /static 前缀开头的 url 请求开启：match: '/static'
    // ignore：设置符合某些规则的请求不经过这个中间件。
    threshold: 1024 // 小于 1k 的响应体不压缩
  }

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
  }

  // 配置 egg-passport-github 要用的鉴权 key、secret。在 GitHub OAuth App 创建获取
  config.passportGithub = {
    key: '013b57fffb6ef40f109c',
    secret: 'f7b86da46ab7bc1604ef881dcf8a08ce6cf348ab'
    // callbackURL: '/passport/github/callback',
    // proxy: false,
  }

  // 插件的配置 egg-jwt secret
  config.jwt = {
    secret: 'krryxq123456'
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  }
}
