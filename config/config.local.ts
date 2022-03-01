import { EggAppConfig, PowerPartial } from 'egg'

export default () => {
  const config: PowerPartial<EggAppConfig> = {
    security: {
      csrf: {
        // Egg 内置的 egg-security 插件默认对所有『非安全』的方法，例如 POST，PUT，DELETE 都进行 CSRF 校验
        enable: false // 为了本地调试方便，关闭 csrf 校验（上线一定要开启）
      }
    }
  }
  return config
}
