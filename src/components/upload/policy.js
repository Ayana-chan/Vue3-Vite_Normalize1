import http from '@/utils/httpRequest.js';
export function policy() {
  return new Promise((resolve, reject) => {
    http({
      url: '/thirdparty/oss/policy',
      method: 'get',
    }).then(({ data }) => {
      resolve(data);
      console.log(data);
    });
  });
}
