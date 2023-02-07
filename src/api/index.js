import httpRequest from '@/utils/httpRequest';

//获取所有axios api
const requireComponent = import.meta.globEager('./http/*.js');

let http = {};
// 将获取到的文件拆分为'文件名-模块'的键值对并一一加入（module每次都会取出一个文件里面的所有模块）
Object.entries(requireComponent).forEach(([path, module]) => {
  // 获取文件名
  let name = path.substring(path.lastIndexOf('/') + 1);
  name = name.substring(0, name.lastIndexOf('.'));

  // 添加键值对
  http[name] = {};
  // 合并对象，收集模块
  Object.assign(http[name], module);
});
//让httpRequest这一基础封装也加入
http['httpRequest'] = httpRequest;

export default {
  install: (app) => {
    app.config.globalProperties['$http'] = http;
  },
};
