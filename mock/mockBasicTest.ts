import { MockMethod } from 'vite-plugin-mock';
// import Mock from 'mockjs';

export default [
  {
    url: '/mockBasicTest',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: { name: '@cname' },
      };
    },
  },
] as MockMethod[];
