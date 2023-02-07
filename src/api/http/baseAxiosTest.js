import httpRequest from "@/utils/httpRequest";

export function getTestStr() {
  return httpRequest({
    url: '/mockBasicTest',
    method: 'get',
  });
}
