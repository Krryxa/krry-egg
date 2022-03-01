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
  }
}

export default plugin
