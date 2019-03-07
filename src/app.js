import { isFetch } from '../config/index';
import 'amfe-flexible';
import 'normalize.css';
import 'babel-polyfill';// 加入垫片

// px转rem
// window.pxtorem = (px, designpx) => {
//   const design = designpx || 750;
//   return px * 10 / design;
// };

// fetch兼容性按需引入
require.ensure([], (require) => {
  if (isFetch()) {
    const fetch = require('fetch-ie8');
    fetch.show();
  }
}, 'fetch-ie8');
