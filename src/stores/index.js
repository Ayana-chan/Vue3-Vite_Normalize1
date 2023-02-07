import persist from 'pinia-plugin-persistedstate'; //持久化

// 获取所有store文件
const requireComponent = import.meta.globEager('./modules/*.js');

let stores = {};
// 将获取到的文件拆分为'文件名-模块'的键值对并取出所有模块
Object.entries(requireComponent).forEach(([path, module]) => {
  // 合并对象，收集模块
  Object.assign(stores, module);
});

export default {
  install: (app) => {
    app.use(createPinia().use(persist));
    app.config.globalProperties['$stores'] = stores;
  },
};
