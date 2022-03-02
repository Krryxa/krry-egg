import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1646105925786_4766';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // 配置 egg-passport-github 要用的鉴权 key、secret。在 GitHub OAuth App 创建获取
  config.passportGithub = {
    key: '013b57fffb6ef40f109c',
    secret: 'f7b86da46ab7bc1604ef881dcf8a08ce6cf348ab',
    // callbackURL: '/passport/github/callback',
    // proxy: false,
  };

  // 配置 egg-jwt secret
  config.jwt = {
    secret: 'krryxq123456'
  }


  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
