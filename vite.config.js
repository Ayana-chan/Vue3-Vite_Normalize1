import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

import mockPlugin from './build/vite/MockPlugin';

// https://vitejs.dev/config/
export default ({ mode }) => {
  console.log(mode);
  const env = loadEnv(mode, process.cwd());
  console.log(env);

  return defineConfig({
    // envDir: './config',
    // envPrefix: ['APP_', 'VITE_'],
    base: env.VITE_BASE_URL || '/', //项目运行的baseURL
    server: {
      host: env.VITE_HOST,
      port: env.VITE_PORT,
      // 是否开启 https
      https: false,
    },
    plugins: [
      vue(),
      mockPlugin(env.VITE_MOCK_ENABLED),
      AutoImport({
        dirs: ['./src/stores/modules'],
        resolvers: [ElementPlusResolver()],
        imports: ['vue', 'vue-router', 'pinia'],
      }),
      Components({
        dirs: ['src/components'], // 按需加载的文件夹
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  });
};
