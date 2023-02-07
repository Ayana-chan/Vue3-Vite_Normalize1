import persist from 'pinia-plugin-persistedstate'; //持久化

const pinia = createPinia();
pinia.use(persist);

export default pinia;
// 导出各个模块
export * from './modules/counter'