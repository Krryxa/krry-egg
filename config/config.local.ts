import { EggAppConfig, PowerPartial } from 'egg'

export default () => {
  const config: PowerPartial<EggAppConfig> = {
    security: {
      csrf: {
        // Egg 内置的 egg-security 插件默认对所有『非安全』的方法，例如 POST，PUT，DELETE 都进行 CSRF 校验
        enable: false // 为了本地调试方便，关闭 csrf 校验（上线一定要开启）
      }
    },

    // 插件 mysql 配置，开发环境配置。每个环境的数据库不一样
    mysql: {
      // 单数据库信息配置
      client: {
        // host
        host: 'localhost',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: 'gsq123gsq',
        // 数据库名
        database: 'krry-egg'
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false
    },
    // 插件 redis 配置
    redis: {
      client: {
        port: 6379, // Redis port
        host: '127.0.0.1', // Redis host
        password: '',
        db: 0
      }
    },
    tracer: {
      mode: 'uuid'
    }
  }
  return config
}
