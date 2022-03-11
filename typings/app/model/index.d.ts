// This file is created by egg-ts-helper@1.30.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBlog from '../../../app/model/blog';

declare module 'egg' {
  interface IModel {
    Blog: ReturnType<typeof ExportBlog>;
  }
}
