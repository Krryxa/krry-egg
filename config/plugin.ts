import { EggPlugin } from 'egg'

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },

  // 参数校验，需要加上这个插件
  validate: {
    enable: true,
    package: 'egg-validate'
  },

  passport: {
    enable: true,
    package: 'egg-passport'
  },

  passportGithub: {
    enable: true,
    package: 'egg-passport-github'
  },

  jwt: {
    enable: true,
    package: 'egg-jwt'
  },

  mysql: {
    enable: true,
    package: 'egg-mysql'
  },
  redis: {
    enable: true,
    package: 'egg-redis'
  },
  tracer: {
    enable: true,
    package: 'egg-apigw-tracer'
  }
}

export default plugin
