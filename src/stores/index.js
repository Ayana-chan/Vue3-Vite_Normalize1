import persist from 'pinia-plugin-persistedstate'; //持久化
// 导出各个模块
const requireComponent = import.meta.globEager('./modules/*.js');

let stores = {};
// 将获取到的文件拆分为'文件名-模块'的键值对并取出所有模块
Object.entries(requireComponent).forEach(([k, v]) => {
  Object.assign(stores, v);
});

export default {
  install: (app) => {
    app.use(createPinia().use(persist));
    app.config.globalProperties['$stores'] = stores;
  },
};
