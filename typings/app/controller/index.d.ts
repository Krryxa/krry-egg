// This file is created by egg-ts-helper@1.30.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBase from '../../../app/controller/base';
import ExportHome from '../../../app/controller/home';
import ExportUser from '../../../app/controller/user';
import ExportBlogList from '../../../app/controller/blog/list';

declare module 'egg' {
  interface IController {
    base: ExportBase;
    home: ExportHome;
    user: ExportUser;
    blog: {
      list: ExportBlogList;
    }
  }
}
